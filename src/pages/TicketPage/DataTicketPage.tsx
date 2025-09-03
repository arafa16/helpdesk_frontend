import TicketGeneralReport from "../../components/GeneralReport/TicketGeneralReport";
import TicketTable from "../../components/Table/TicketTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  GetTicketDataTable,
  resetTicket,
} from "../../stores/features/TicketSlice";
import { useNavigate } from "react-router-dom";

const DataTicketPage = () => {
  const [ticketStatus, setTicketStatus] = useState<any>(null);
  const [generalReport, setGeneralReport] = useState<any>(null);
  const [datas, setDatas] = useState([] as any);
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
    (state: any) => state.ticket
  );

  console.log("data ticket page", ticketStatus, generalReport);

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        console.log(data, "data");
        setDatas(data);
        setTicketStatus(data?.ticket_status);
        setGeneralReport(data?.general_report);
        dispatch(resetTicket());
      }
    }
    if (message && isError) {
      if (!isLoading) {
        console.log(message);
        dispatch(resetTicket());
      }
    }
  }, [data, isLoading, isSuccess, isError, message]);

  useEffect(() => {
    const paramsObj: any = {
      page: meta.page,
      limit: meta.limit,
      search: meta.search,
      ticket_status_uuid: meta.ticket_status_uuid,
    };
    const params_attributes = new URLSearchParams(paramsObj);
    dispatch(GetTicketDataTable(params_attributes));
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
    const back = `back=/ticket`;
    navigate(`/ticket/view/${data.uuid}?${back}`);
  };

  const handleSearch = (search: string) => {
    setMeta({ ...meta, ticket_status_uuid: "", search });
    if (meta.page !== 1) {
      setMeta({ ...meta, page: 1, search });
    }
  };

  const handleClickStatus = (uuid: any) => {
    setMeta({ ...meta, ticket_status_uuid: uuid });
  };

  const handleCreate = () => {
    const back = `back=/ticket`;
    navigate(`/ticket/create?${back}`);
  };

  return (
    <>
      <div>
        <TicketGeneralReport
          statuses={ticketStatus}
          reports={generalReport}
          handleClickStatus={handleClickStatus}
          meta={meta}
        />
      </div>
      <div>
        <TicketTable
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

export default DataTicketPage;
