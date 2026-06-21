import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  GetTicketTroubleCategoryData,
  resetTicketTroubleCategory,
} from "../../stores/features/TicketTroubleCategorySlice";
import { useNavigate } from "react-router-dom";
import TemplateTable1 from "../../components/Table/TemplateTable1";

const DataTicketTroubleCategoryPage = () => {
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
    (state: any) => state.ticket_trouble_category,
  );

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data);
      dispatch(resetTicketTroubleCategory());
    } else if (message !== "" && isError && !isLoading) {
      console.log(message, "error");
      dispatch(resetTicketTroubleCategory());
    }
  }, [data, isLoading, isError, isSuccess, message, dispatch]);

  useEffect(() => {
    const paramsObj: any = {
      page: meta.page,
      limit: meta.limit,
      search: meta.search,
    };
    const params_attributes = new URLSearchParams(paramsObj);
    dispatch(GetTicketTroubleCategoryData(params_attributes));
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
    const back = `back=/ticket_trouble_category`;
    navigate(`/ticket_trouble_category/view/${data.uuid}?${back}`);
  };

  const handleSearch = (search: string) => {
    setMeta({ ...meta, ticket_trouble_category_uuid: "", search });
    if (meta.page !== 1) {
      setMeta({ ...meta, page: 1, search });
    }
  };

  const handleCreate = () => {
    const back = `back=/ticket_trouble_category`;
    navigate(`/ticket_trouble_category/create?${back}`);
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

export default DataTicketTroubleCategoryPage;
