import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  GetUserStatusData,
  resetUserStatus,
} from "../../stores/features/UserStatusSlice";
import { useNavigate } from "react-router-dom";
import TemplateTable1 from "../../components/Table/TemplateTable1";

const DataUserStatusPage = () => {
  const [datas, setDatas] = useState<any>();
  const [meta, setMeta] = useState<any>({
    page: 1,
    limit: 10,
    count: 0,
    search: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.user_status
  );

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data);
      dispatch(resetUserStatus());
    } else if (message !== "" && isError && !isLoading) {
      console.log(message, "error");
      dispatch(resetUserStatus());
    }
  }, [data, isLoading, isError, isSuccess, message, dispatch]);

  useEffect(() => {
    const paramsObj: any = {
      page: meta.page,
      limit: meta.limit,
      search: meta.search,
    };
    const params_attributes = new URLSearchParams(paramsObj);
    dispatch(GetUserStatusData(params_attributes));
  }, [dispatch, meta]);

  const handleNextPage = () => {
    if (meta.page < datas?.meta?.pages) {
      setMeta({ ...meta, page: meta.page + 1 });
    }
  };

  const handlePrevPage = () => {
    if (meta.page > 1) {
      setMeta({ ...meta, page: meta.page - 1 });
    }
  };

  const handlePageChange = (newPage: number) => {
    setMeta({ ...meta, page: newPage });
  };

  const handleChangeLimit = (newLimit: number) => {
    if (
      newLimit === null ||
      newLimit === undefined ||
      newLimit === 0 ||
      isNaN(newLimit)
    ) {
      setMeta({ ...meta, limit: 0 });
    } else {
      if (newLimit > datas?.meta?.total) {
        setMeta({ ...meta, limit: newLimit, page: 1 });
      } else {
        setMeta({ ...meta, limit: newLimit });
      }
    }
  };

  const handleView = (data: any) => {
    const back = `back=/user_status`;
    navigate(`/user_status/view/${data.uuid}?${back}`);
  };

  const handleSearch = (search: string) => {
    setMeta({ ...meta, ticket_status_uuid: "", search });
    if (meta.page !== 1) {
      setMeta({ ...meta, page: 1, search });
    }
  };

  const handleCreate = () => {
    const back = `back=/user_status`;
    navigate(`/user_status/create?${back}`);
  };

  return (
    <div>
      <div>
        <TemplateTable1
          datas={datas?.data}
          page={datas?.meta?.page}
          pages={datas?.meta?.pages}
          limit={meta?.limit}
          total={datas?.meta?.total}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageChange={handlePageChange}
          handleChangeLimit={handleChangeLimit}
          handleView={handleView}
          handleSearch={handleSearch}
          handleCreate={handleCreate}
          meta={meta}
          setMeta={setMeta}
        />
      </div>
    </div>
  );
};

export default DataUserStatusPage;
