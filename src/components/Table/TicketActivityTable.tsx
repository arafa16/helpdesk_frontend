import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import Button from "../../base-components/Button";
import dayjs from "dayjs";
import { Popover } from "../../base-components/Headless";

const TicketActivityTable = (props: any) => {
  const {
    datas,
    handleDelete,
    handleShowEdit,
    handleShowAttachment,
    handleShowCommentAttachment,
    handleDeleteAttachment,
    handleViewAttachment,
    handleViewCommentAttachment,
    handleViewComment,
    handleDeleteComment,
    handleDeleteCommentAttachment,
  } = props;

  let grap_duration: any = [];

  const duration = (data: any) => {
    const start_date = dayjs(data.start_date);
    const end_date = dayjs(data.end_date);

    let minutes = end_date.diff(start_date, "minute", true).toFixed(0);

    grap_duration.push(Number(minutes));
    return minutes;
  };

  return (
    <div className="grid grid-cols-12 mt-5 box text-xs">
      {/* BEGIN: Inbox Content */}
      <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
        <div className="pt-4 px-4 flex justify-between items-center">
          <p className="text-[12px]">Ticket Activity</p>
          <p className="bg-slate-500 px-2 py-1 text-white rounded-lg cursor-pointer hover:bg-slate-400">
            {" "}
            Total Duration :{" "}
            {datas &&
              datas
                .reduce((sum: number, data: any) => {
                  if (
                    data?.ticket_status?.is_active === true &&
                    data?.ticket_status?.code !== "7" &&
                    data?.start_date &&
                    data?.end_date
                  ) {
                    const start = dayjs(data.start_date);
                    const end = dayjs(data.end_date);
                    const minutes = end.diff(start, "minute", true);
                    return sum + minutes;
                  } else if (
                    data?.ticket_status?.is_active === true &&
                    data?.ticket_status?.code !== "7" &&
                    data?.end_date === null
                  ) {
                    const start = dayjs(data.start_date);
                    const end = dayjs(Date.now());
                    const minutes = end.diff(start, "minute", true);
                    return sum + minutes;
                  }
                  return sum;
                }, 0)
                .toFixed(0)}{" "}
            minute
          </p>
        </div>
        <div className="overflow-x-auto sm:overflow-x-visible mt-4 px-4">
          {datas &&
            datas.map((data: any, index: any) => (
              <div key={index} className="intro-y">
                <div
                  className={clsx([
                    "py-4",
                    "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                  ])}
                >
                  <div className="flex items-center px-5 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg">
                    <div className="mr-2 w-4">{index + 1}</div>
                    <div className="w-24 truncate sm:w-48">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data.ticket_status?.name}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-96">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data.description}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-64">
                      <span className={clsx(["ml-3 truncate"])}>
                        Reminder : {data.reminder ? "on" : "off"}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-64">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.schedule_reminder !== null
                          ? dayjs(data.schedule_reminder).format(
                              "YYYY-MM-DD HH:mm"
                            )
                          : "-"}
                      </span>
                    </div>
                    <div className="pl-10 ml-auto whitespace-nowrap"></div>
                    <div className="pl-10 ml-auto whitespace-nowrap flex gap-8">
                      <div className={"flex items-center"}>
                        <Popover className="inline-block">
                          {({ close }) => (
                            <>
                              <Popover.Button
                                className={
                                  "flex gap-2 p-1 rounded-lg hover:bg-blue-600 hover:text-white "
                                }
                              >
                                {data?.ticket_activity_attachments?.length}
                                <Lucide icon="Upload" className="w-4 h-4" />
                              </Popover.Button>
                              <Popover.Panel placement="bottom-start">
                                <div className="p-2">
                                  {data?.ticket_activity_attachments.map(
                                    (data: any, index: any) => (
                                      <div
                                        key={index}
                                        className="grid grid-cols-12 text-xs text-left"
                                      >
                                        <p
                                          className="col-span-9 hover:bg-slate-200 p-1 items-center rounded truncate"
                                          onClick={() =>
                                            handleViewAttachment(data)
                                          }
                                        >
                                          {data?.name}
                                        </p>
                                        <div
                                          className="col-span-3 hover:bg-red-500 rounded hover:text-white grid justify-center p-1"
                                          onClick={() =>
                                            handleDeleteAttachment(data?.uuid)
                                          }
                                        >
                                          <Lucide
                                            icon="Trash"
                                            className="w-4 h-4"
                                          />
                                        </div>
                                      </div>
                                    )
                                  )}

                                  <div className="flex items-center mt-3">
                                    <Button
                                      variant="primary"
                                      className="w-32 ml-2"
                                      size="sm"
                                      onClick={() =>
                                        handleShowAttachment(data.uuid)
                                      }
                                    >
                                      upload file
                                    </Button>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </>
                          )}
                        </Popover>
                      </div>
                      <div
                        className="p-1 rounded-lg hover:bg-blue-600 hover:text-white"
                        onClick={() => handleShowEdit(data)}
                      >
                        <Lucide icon="Edit" className="w-4 h-4" />
                      </div>
                      <div
                        className="p-1 rounded-lg hover:bg-red-600 hover:text-white"
                        onClick={() => handleDelete(data.uuid)}
                      >
                        <Lucide icon="Trash2" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center ml-20 px-5 py-2 mt-2 bg-slate-50 hover:bg-slate-100 rounded-lg">
                    <div className="w-24 truncate sm:w-96">
                      <span className={clsx(["ml-3 truncate"])}>
                        start date:{" "}
                        {data?.start_date !== null
                          ? dayjs(data?.start_date).format(
                              "YYYY-MM-DD HH:mm:ss"
                            )
                          : "not set"}
                      </span>
                    </div>
                    <div className="pl-1 w-64 truncate sm:w-22">
                      <span
                        className={clsx([
                          `ml-3 truncate ${
                            data?.end_date === null
                              ? "bg-slate-500 px-2 py-2 text-white"
                              : ""
                          }`,
                        ])}
                      >
                        {data?.end_date === null ? "now " : "end date "}:{" "}
                        {data?.end_date !== null
                          ? dayjs(data?.end_date).format("YYYY-MM-DD HH:mm:ss")
                          : dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")}
                      </span>
                    </div>
                    <div className="w-64 ml-auto flex justify-end truncate sm:w-64">
                      <span className={clsx(["ml-3 truncate"])}>
                        {" "}
                        {data?.start_date !== null && data?.end_date !== null
                          ? duration({
                              start_date: data?.start_date,
                              end_date: data?.end_date,
                            }) + " minute"
                          : ""}
                        {data?.start_date !== null && data?.end_date === null
                          ? duration({
                              start_date: data?.start_date,
                              end_date: Date.now(),
                            }) + " minute"
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex px-20 pt-2">
                    <div
                      className="flex items-center px-2 text-white bg-blue-800 p-1 rounded-lg hover:bg-blue-500 hover:text-white"
                      onClick={() => handleViewComment(data)}
                    >
                      <Lucide icon="Plus" className="w-4 h-4" />
                      <span className="ml-2">add comment</span>
                    </div>
                  </div>
                  {data?.ticket_activity_comments.map(
                    (data: any, index: any) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 px-20 pt-2"
                      >
                        <div className="flex gap-4 justify-start items-center mr-15 w-full bg-slate-50 hover:bg-slate-100 rounded-lg p-2">
                          <div>{index + 1}</div>
                          <div>
                            {dayjs(data?.created_at).format(
                              "YYYY-MM-DD HH:mm:ss"
                            )}
                          </div>
                          <div>{data?.description}</div>
                        </div>
                        <div className="pl-10 ml-auto whitespace-nowrap flex gap-8">
                          <div className={"flex items-center"}>
                            <Popover className="inline-block">
                              {({ close }) => (
                                <>
                                  <Popover.Button
                                    className={
                                      "flex gap-2 p-1 rounded-lg hover:bg-blue-600 hover:text-white "
                                    }
                                  >
                                    {
                                      data?.ticket_activity_comment_attachments
                                        ?.length
                                    }
                                    <Lucide icon="Upload" className="w-4 h-4" />
                                  </Popover.Button>
                                  <Popover.Panel placement="bottom-start">
                                    <div className="p-2">
                                      {data?.ticket_activity_comment_attachments?.map(
                                        (data: any, index: any) => (
                                          <div
                                            key={index}
                                            className="grid grid-cols-12 text-xs text-left"
                                          >
                                            <p
                                              className="col-span-9 hover:bg-slate-200 p-1 items-center rounded truncate"
                                              onClick={() =>
                                                handleViewCommentAttachment(
                                                  data
                                                )
                                              }
                                            >
                                              {data?.name}
                                            </p>
                                            <div
                                              className="col-span-3 hover:bg-red-500 rounded hover:text-white grid justify-center p-1"
                                              onClick={() =>
                                                handleDeleteCommentAttachment(
                                                  data?.uuid
                                                )
                                              }
                                            >
                                              <Lucide
                                                icon="Trash"
                                                className="w-4 h-4"
                                              />
                                            </div>
                                          </div>
                                        )
                                      )}

                                      <div className="flex items-center mt-3">
                                        <Button
                                          variant="primary"
                                          className="w-32 ml-2"
                                          size="sm"
                                          onClick={() =>
                                            handleShowCommentAttachment(
                                              data?.uuid
                                            )
                                          }
                                        >
                                          upload file
                                        </Button>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </>
                              )}
                            </Popover>
                          </div>
                          <div
                            className="p-1 rounded-lg hover:bg-red-500 hover:text-white"
                            onClick={() => handleDeleteComment(data)}
                          >
                            <Lucide icon="Trash2" className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* END: Inbox Content */}
    </div>
  );
};

export default TicketActivityTable;
