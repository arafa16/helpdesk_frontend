import React, { useEffect, useState } from "react";
import UserTable from "../../components/Table/UserTable";
import UserGeneralReport from "../../components/GeneralReport/UserGeneralReport";
import { GetUserTable, resetUser } from "../../stores/features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const DataUserPage = () => {
  const [userStatus, setUserStatus] = useState<any>(null);
  const [generalReport, setGeneralReport] = useState<any>(null);
  const [datas, setDatas] = useState<any>(null);
  const [meta, setMeta] = useState<any>({
    page: 1,
    limit: 10,
    count: 0,
    search: "",
    user_status_uuid: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        console.log(data, "data");
        setDatas(data);
        setUserStatus(data?.user_status);
        setGeneralReport(data?.general_report);
        dispatch(resetUser());
      }
    }
    if (message && isError) {
      if (!isLoading) {
        console.log(message, "error");
        dispatch(resetUser());
      }
    }
  }, [data, isLoading, isError, isSuccess, message]);

  useEffect(() => {
    const paramsObj: any = {
      page: meta.page,
      limit: meta.limit,
      search: meta.search,
      user_status_uuid: meta.user_status_uuid,
    };
    const params_attributes = new URLSearchParams(paramsObj);
    dispatch(GetUserTable(params_attributes));
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
    const back = `back=/user`;
    navigate(`/user/view/${data.uuid}?${back}`);
  };

  const handleSearch = (search: string) => {
    setMeta({ ...meta, ticket_status_uuid: "", search });
    if (meta.page !== 1) {
      setMeta({ ...meta, page: 1, search });
    }
  };

  const handleClickStatus = (uuid: any) => {
    setMeta({ ...meta, user_status_uuid: uuid });
  };

  const handleCreate = () => {
    const back = `back=/user`;
    navigate(`/user/create?${back}`);
  };

  return (
    <>
      <div>
        <UserGeneralReport
          statuses={userStatus}
          reports={generalReport}
          handleClickStatus={handleClickStatus}
          meta={meta}
        />
      </div>
      <div>
        <UserTable
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
    </>
  );
};

export default DataUserPage;
