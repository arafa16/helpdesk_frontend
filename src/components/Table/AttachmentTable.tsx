import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import Button from "../../base-components/Button";

const AttachmentTable = (props: any) => {
  const { datas, handleShowSlideOver, handleDelete, handleView } = props;

  return (
    <div className="grid grid-cols-12 mt-5 box text-xs">
      {/* BEGIN: Inbox Content */}
      <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
        <div className="pt-4 px-4">
          <p className="text-[12px]">Attachment Ticket</p>
        </div>
        <div className="flex flex-col-reverse px-4 pb-2 border-b sm:flex-row text-slate-500 border-slate-200/60">
          <div className="my-2 sm:ml-auto">
            <Button
              size="sm"
              variant="primary"
              className="gap-4"
              onClick={() => handleShowSlideOver()}
            >
              <Lucide icon="FilePlus" className="w-4 h-4" /> Upload Attachment
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto sm:overflow-x-visible">
          {datas &&
            datas.map((data: any, index: any) => (
              <div key={index} className="intro-y px-4 py-2">
                <div
                  className={clsx([
                    "bg-slate-50 hover:bg-slate-100 rounded",
                    "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                  ])}
                >
                  <div className="flex items-center px-5 py-1">
                    <div className="mr-5 w-8">{index + 1}</div>
                    <div className="w-64 truncate sm:w-96">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data.name}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-96">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data.description}
                      </span>
                    </div>
                    <div className="whitespace-nowrap flex justify-end gap-4 ml-auto">
                      <div
                        className="hover:bg-blue-500 rounded p-1"
                        onClick={() => handleView(data)}
                      >
                        <Lucide
                          icon="Download"
                          className="w-4 h-4 hover:text-white"
                        />
                      </div>
                      <div
                        className="hover:bg-red-500 rounded p-1"
                        onClick={() => handleDelete(data.uuid)}
                      >
                        <Lucide
                          icon="Trash2"
                          className="w-4 h-4 hover:text-white"
                        />
                      </div>
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

export default AttachmentTable;
