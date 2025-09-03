import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import { Form, useNavigate } from "react-router-dom";
import { FormInput } from "../../base-components/Form";

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
                    <div className="flex items-center flex-none mr-5 w-8">
                      <div className="w-6">
                        {index + 1 + (meta.page - 1) * meta.limit}
                      </div>
                    </div>
                    <div className="w-64 truncate sm:w-32">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.display_name}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-36">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.case_number}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-64">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.subject}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-52">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.customer?.name}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-24">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.area?.name}
                      </span>
                    </div>
                    <div className="w-64 truncate sm:w-24">
                      <span className={clsx(["ml-3 truncate"])}>
                        {data?.executor?.name}
                      </span>
                    </div>
                    <div className="pl-10 ml-auto whitespace-nowrap">
                      <span className={clsx(["ml-3 truncate"])}>
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
