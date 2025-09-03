import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Button from "../../base-components/Button";
import dayjs from "dayjs";
import { Menu, Popover } from "../../base-components/Headless";

const TicketActivityTable = (props: any) => {
  const {
    datas,
    handleDelete,
    handleShowEdit,
    handleShowAttachment,
    handleDeleteAttachment,
    handleViewAttachment,
    handleViewComment,
    handleDeleteComment,
  } = props;

  return (
    <div className="grid grid-cols-12 mt-5 box text-xs">
      {/* BEGIN: Inbox Content */}
      <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
        <div className="pt-4 px-4">
          <p className="text-[12px]">Ticket Activity</p>
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
                  <div className="flex items-center px-5 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg">
                    <div className="mr-5 w-8">{index + 1}</div>
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
                        {dayjs(data.schedule_reminder).format(
                          "YYYY-MM-DD HH:mm"
                        )}
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
                                        onClick={() =>
                                          handleViewAttachment(data)
                                        }
                                      >
                                        <p className="col-span-9 hover:bg-slate-200 p-1 items-center rounded truncate">
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
                          <div>{data?.description}</div>
                        </div>
                        <div
                          className="p-1 rounded-lg hover:bg-red-500 hover:text-white"
                          onClick={() => handleDeleteComment(data)}
                        >
                          <Lucide icon="Trash2" className="w-4 h-4" />
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
