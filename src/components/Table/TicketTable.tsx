import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import { FormInput } from "../../base-components/Form";
import dayjs from "dayjs";

const TicketTable = (props: any) => {
  const {
    datas,
    handleCreate,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
    handleChangeLimit,
    handleView,
    handleSearch,
    pages,
    limit,
    total,
    meta,
  } = props;

  function formatHourMinute(value: any) {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="grid grid-cols-12 mt-5 box text-xs">
      {/* BEGIN: Inbox Content */}
      <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
        <div className="md:grid md:grid-cols-12 md:flex px-5 py-4 border-b text-slate-500 border-slate-200/60 ">
          <div className="col-span-12 md:col-span-6 md:flex items-center justify-start">
            <div className="text-xs w-full py-2 md:py-0">
              <FormInput
                type="text"
                formInputSize="sm"
                className="w-full md:w-48"
                placeholder="search"
                value={meta.search}
                onChange={(e: any) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:flex md:items-center md:justify-end gap-2">
            <div className="w-full flex gap-2 items-center mt-4 md:mt-0">
              <div className="flex items-center gap-2 ml-auto">
                <FormInput
                  type="text"
                  formInputSize="sm"
                  className="w-16 text-center"
                  value={limit}
                  onChange={(e) => {
                    handleChangeLimit(e.target.value);
                  }}
                />
                <p>of {total} data</p>
              </div>
            </div>
            <div className="flex items-center justify-end mt-4 md:mt-0">
              <div className="flex items-center gap-3 ">
                <div className="text-xs">
                  <FormInput
                    type="text"
                    formInputSize="sm"
                    className="w-8 text-center"
                    value={meta.page}
                    onChange={(e) => {
                      const newPage = Number(e.target.value);
                      handlePageChange(newPage);
                    }}
                  />
                </div>
                <div className="text-xs w-16">of {pages} page </div>
                <Lucide
                  icon="ChevronLeft"
                  className="w-4 h-4 hover:cursor-pointer"
                  onClick={() => handlePrevPage()}
                />
                <Lucide
                  icon="ChevronRight"
                  className="w-4 h-4 hover:cursor-pointer"
                  onClick={() => handleNextPage()}
                />
                <div
                  className="flex items-center justify-center w-5 h-5 cursor-pointer hover:text-blue-500"
                  onClick={() => handleCreate()}
                >
                  <Lucide icon="FilePlus" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto sm:overflow-x-visible">
          {datas &&
            datas.map((data: any, index: any) => (
              <div key={index} className="intro-y">
                <div
                  className={clsx([
                    "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                    "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                  ])}
                  onClick={() => handleView(data)}
                >
                  <div className="flex px-5 py-3">
                    <div className="flex items-center flex-none mr-2 w-2">
                      {index + 1 + (meta.page - 1) * meta.limit}
                    </div>
                    <div className="w-24 truncate sm:w-24 2xl:w-32">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.display_name}
                      </span>
                    </div>
                    <div className="w-48 truncate sm:w-48 2xl:w-64">
                      <span>{data?.case_number}</span>
                    </div>
                    <div className="w-64 truncate sm:w-36 2xl:w-48">
                      <span>{data?.subject}</span>
                    </div>
                    <div className="w-64 truncate sm:w-64 2xl:w-96">
                      <span>{data?.customer?.name}</span>
                    </div>
                    <div className="w-64 truncate sm:w-20 2xl:w-32">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.area?.name}
                      </span>
                    </div>
                    <div
                      className={`w-64 truncate sm:w-16 rounded text-center px-2 2xl:w-32 ${
                        data?.ticket_activities
                          ?.reduce((sum: number, data: any) => {
                            if (
                              data?.ticket_status?.is_active === true &&
                              data?.ticket_status?.code !== "7" &&
                              data?.start_date &&
                              data?.end_date
                            ) {
                              const start = dayjs(data.start_date);
                              const end = dayjs(data.end_date);
                              const hours = end.diff(start, "hour", true);
                              return sum + hours;
                            } else if (
                              data?.ticket_status?.is_active === true &&
                              data?.ticket_status?.code !== "7" &&
                              data?.end_date === null
                            ) {
                              const start = dayjs(data.start_date);
                              const end = dayjs(Date.now());
                              const hours = end.diff(start, "hour", true);
                              return sum + hours;
                            }
                            return sum;
                          }, 0)
                          .toFixed(1) > 6
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      <span>
                        {formatHourMinute(
                          data?.ticket_activities?.reduce(
                            (sum: number, data: any) => {
                              if (
                                data?.ticket_status?.is_active === true &&
                                data?.ticket_status?.code !== "7" &&
                                data?.start_date &&
                                data?.end_date
                              ) {
                                const start = dayjs(data.start_date);
                                const end = dayjs(data.end_date);
                                const hours = end.diff(start, "hour", true);
                                return sum + hours;
                              } else if (
                                data?.ticket_status?.is_active === true &&
                                data?.ticket_status?.code !== "7" &&
                                data?.end_date === null
                              ) {
                                const start = dayjs(data.start_date);
                                const end = dayjs(Date.now());
                                const hours = end.diff(start, "hour", true);
                                return sum + hours;
                              }
                              return sum;
                            },
                            0
                          )
                        )}
                      </span>
                    </div>
                    <div className="pl-10 truncate sm:pl-10 2xl:pl-20">
                      {dayjs(data?.complaint_time).format("YYYY-MM-DD HH:mm")}
                    </div>
                    <div className="ml-auto truncate">
                      <span className={clsx(["ml-1 truncate"])}>
                        {data?.ticket_status?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* END: Inbox Content */}
    </div>
  );
};

export default TicketTable;
