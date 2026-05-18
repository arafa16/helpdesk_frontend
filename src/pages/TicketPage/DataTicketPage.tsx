import TicketGeneralReport from "../../components/GeneralReport/TicketGeneralReport";
import TicketTable from "../../components/Table/TicketTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  GetTicketDataTable,
  resetTicket,
} from "../../stores/features/TicketSlice";
import { useNavigate } from "react-router-dom";
import {
  ExportTicketData,
  resetTicketExport,
} from "../../stores/features/TicketExportSlice";
import Button from "../../base-components/Button";
import { FormSelect, FormInline } from "../../base-components/Form";
import LoadingIcon from "../../base-components/LoadingIcon";

const DataTicketPage = () => {
  const [ticketStatus, setTicketStatus] = useState<any>(null);
  const [generalReport, setGeneralReport] = useState<any>(null);
  const [year, setYear] = useState<any>(null);
  const [area_uuid, setAreaUuid] = useState<any>(null);
  const [area, setArea] = useState<any>(null);
  const [datas, setDatas] = useState([] as any);
  const [meta, setMeta] = useState<any>({
    page: 1,
    limit: 10,
    count: 0,
    search: "",
    ticket_status_uuid: "",
  });

  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const years = [];

  for (let y = startYear; y <= currentYear; y++) {
    years.push(y);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.ticket,
  );

  const {
    data: dataExport,
    isLoading: isLoadingExport,
    isError: isErrorExport,
    isSuccess: isSuccessExport,
    message: messageExport,
  } = useSelector((state: any) => state.ticket_export);

  useEffect(() => {
    if (messageExport !== "" && isSuccessExport && isLoadingExport) {
      dispatch(resetTicketExport());
    } else if (messageExport !== "" && isErrorExport && isLoadingExport) {
      console.log(message);
      dispatch(resetTicket());
    }
  }, [
    dataExport,
    isLoadingExport,
    isSuccessExport,
    isErrorExport,
    messageExport,
  ]);

  const handleDownloadTicket = () => {
    let searchParams;

    if (year !== null) {
      const paramsObj: any = { year: year, area_uuid: area_uuid };
      searchParams = new URLSearchParams(paramsObj);
    }

    dispatch(
      ExportTicketData({
        searchParams,
        name: "data ticket" + ".xlsx",
      }),
    );
  };

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        setDatas(data);
        setTicketStatus(data?.ticket_status);
        setGeneralReport(data?.general_report);
        setArea(data?.area);
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
      year: year,
      area_uuid: area_uuid,
    };
    const params_attributes = new URLSearchParams(paramsObj);
    dispatch(GetTicketDataTable(params_attributes));
  }, [dispatch, meta, year, area_uuid]);

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
      <div className={`mt-6 flex gap-4 justify-end`}>
        <FormInline>
          <FormSelect
            formSelectSize="sm"
            aria-label=".form-select-sm example"
            name="year"
            value={year !== null ? year : ""}
            required
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={""}></option>
            {years?.map((data: any, index: any) => (
              <option value={data} key={index}>
                {data}
              </option>
            ))}
          </FormSelect>
        </FormInline>
        <FormInline>
          <FormSelect
            formSelectSize="sm"
            aria-label=".form-select-sm example"
            name="area_uuid"
            value={area_uuid !== null ? area_uuid : ""}
            required
            onChange={(e) => setAreaUuid(e.target.value)}
          >
            <option value={""}></option>
            {area?.map((data: any, index: any) => (
              <option value={data.uuid} key={index}>
                {data.name}
              </option>
            ))}
          </FormSelect>
        </FormInline>
        <Button
          className="col-span-12"
          variant="primary"
          type="button"
          size="sm"
          onClick={() => handleDownloadTicket()}
        >
          {isLoadingExport ? "Loading..." : "Export Data Ticket"}
        </Button>
      </div>
      <div>
        <TicketTable
          datas={datas?.data}
          isLoading={isLoading}
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
