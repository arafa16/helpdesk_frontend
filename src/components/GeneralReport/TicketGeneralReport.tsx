import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import Tippy from "../../base-components/Tippy";
import faker from "../../utils/faker";

const TicketGeneralReport = (props: any) => {
  const { handleClickStatus, meta, statuses, reports } = props;

  console.log("statuses", statuses, reports, meta);

  return (
    <div className="col-span-12 mt-6">
      <div className="md:flex md:justify-between">
        {statuses &&
          statuses.map((status: any, index: number) => (
            <div
              key={index}
              className={`${status?.code === "6" ? "hidden" : ""}`}
              onClick={() =>
                handleClickStatus(status.code !== "6" ? status.uuid : "")
              }
            >
              <div
                className={`px-5 py-3 mb-2 md:mb-0 box zoom-in w-full md:w-[150px] truncate ${
                  status?.uuid === meta?.ticket_status_uuid
                    ? "bg-white"
                    : "bg-slate-100"
                }`}
              >
                <div className="">{status?.name}</div>
                <div className="mt-3 text-xs font-medium">
                  {reports[status?.code]?.count}
                </div>
              </div>
            </div>
          ))}
        <div>
          <div
            className={`px-5 py-3 box zoom-in w-full md:w-[150px] truncate ${
              meta?.ticket_status_uuid === "" ? "bg-white" : "bg-slate-100"
            }`}
            onClick={() => handleClickStatus("")}
          >
            <div className="">All</div>
            <div className="mt-3 text-xs font-medium">
              {reports && reports[8]?.count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketGeneralReport;
