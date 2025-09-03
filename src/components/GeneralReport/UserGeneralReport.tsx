import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import Tippy from "../../base-components/Tippy";

const UserGeneralReport = (props: any) => {
  const { handleClickStatus, meta, statuses, reports } = props;

  return (
    <div className="col-span-12 mt-6">
      <div
        className={clsx([
          "relative mt-12 intro-y sm:mt-4",
          "before:content-[''] before:w-[96%] before:shadow-[0px_3px_5px_#0000000b] before:h-full before:bg-slate-50 before:border before:border-slate-200 before:mt-3 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60",
        ])}
      >
        <div className="grid grid-cols-12 gap-0 py-0 divide-x divide-y box xl:py-5 xl:divide-y-0 divide-dashed divide-slate-200 dark:divide-white/5">
          {statuses &&
            statuses.map((status: any, index: number) => (
              <div
                className={clsx([
                  "cursor-pointer hover:bg-success/5 hover:rounded-lg",
                  "relative col-span-12 px-5 py-5 xl:py-2 sm:col-span-6 xl:col-span-3",
                  "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                  "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                  "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                  "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                ])}
                key={index}
                onClick={() =>
                  handleClickStatus(status?.code !== "4" ? status?.uuid : "")
                }
              >
                <div data-content>
                  <div className="flex">
                    <div className="flex gap-x-4 items-center">
                      <div
                        className={`flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-success ${
                          status?.uuid === meta?.user_status_uuid
                            ? "bg-success/20"
                            : status?.code === "4" &&
                              meta?.user_status_uuid === ""
                            ? "bg-success/20"
                            : "bg-secondary/20"
                        } border-secondary/20`}
                      >
                        <Lucide
                          className="w-[1.3rem] h-[1.3rem]"
                          icon="PieChart"
                        />
                      </div>
                      <div className="mt-1 text-slate-500">
                        {status?.code !== "4" ? status?.name : reports[4]?.name}
                      </div>
                    </div>
                    <div className="ml-auto items-center flex">
                      <Tippy
                        as="div"
                        className="flex items-center pl-2 cursor-pointer text-success"
                        content={status?.name}
                      >
                        {status?.code !== "4"
                          ? reports[status?.code].count
                          : reports[4]?.count}
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserGeneralReport;
