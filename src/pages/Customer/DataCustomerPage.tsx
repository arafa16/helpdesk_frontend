import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  GetCustomerData,
  resetCustomer,
} from "../../stores/features/CustomerSlice";
import { useNavigate } from "react-router-dom";
import CustomerTable from "../../components/Table/CustomerTable";

const DataCustomerPage = () => {
  const [datas, setDatas] = useState<any>();
  const [meta, setMeta] = useState<any>({
    page: 1,
    limit: 10,
    count: 0,
    search: "",
    ticket_status_uuid: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.customer
  );

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data);
      dispatch(resetCustomer());
    } else if (message !== "" && isError && !isLoading) {
      console.log(message, "error");
      dispatch(resetCustomer());
    }
  }, [data, isLoading, isError, isSuccess, message, dispatch]);

  useEffect(() => {
    const paramsObj: any = {
      page: meta.page,
      limit: meta.limit,
      search: meta.search,
    };
    const params_attributes = new URLSearchParams(paramsObj);
    dispatch(GetCustomerData(params_attributes));
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
    const back = `back=/customer`;
    navigate(`/customer/view/${data.uuid}?${back}`);
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
    const back = `back=/customer`;
    navigate(`/customer/create?${back}`);
  };

  return (
    <div>
      <div>
        <CustomerTable
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

export default DataCustomerPage;
