import dayjs from "dayjs";
import { FormInline, FormLabel } from "../../base-components/Form";
const TicketDataView = (props: any) => {
  const { datas } = props;
  return (
    <>
      <div className="w-full box text-xs p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          <div>
            <div className="mt-1 font-medium underline text-slate-700">
              {datas && datas.display_name}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Subject
              </FormLabel>
              <div className="">: {datas?.subject}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Customer
              </FormLabel>
              <div className="">: {datas?.customer?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Area
              </FormLabel>
              <div className="">: {datas?.area?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Case Number
              </FormLabel>
              <div className="">: {datas?.case_number}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Network Number
              </FormLabel>
              <div className="flex gap-4">
                : {datas && datas.network_number}
                <p
                  className={`text-slate-500 ${
                    datas?.network_number ? "block" : "hidden"
                  }`}
                >
                  (nomor jaringan)
                </p>
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Ticket Access
              </FormLabel>
              <div className="">: {datas?.ticket_access?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Ticket Category
              </FormLabel>
              <div className="">: {datas?.ticket_category?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Address
              </FormLabel>
              <div className="">: {datas?.address}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Description
              </FormLabel>
              <div className="">: {datas?.description}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                User
              </FormLabel>
              <div className="">: {datas?.user?.name}</div>
            </FormInline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Executor
              </FormLabel>
              <div className="">: {datas?.executor?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                PIC
              </FormLabel>
              <div className="">: {datas && datas.pic}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                PIC Phone Number
              </FormLabel>
              <div className="">: {datas && datas.pic_phone_number}</div>
            </FormInline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Lat
              </FormLabel>
              <div className="">: {datas && datas.lat}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Lng
              </FormLabel>
              <div className="">: {datas && datas.lng}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Gmap Link
              </FormLabel>
              <div className="">: {datas && datas.gmap}</div>
            </FormInline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Eta
              </FormLabel>
              <div className="">: {datas && datas.eta}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Priority Level
              </FormLabel>
              <div className="">: {datas && datas.priority_level}</div>
            </FormInline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Trouble Category
              </FormLabel>
              <div className="">: {datas?.ticket_trouble_category?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Trouble Description
              </FormLabel>
              <div className="">: {datas?.trouble_description}</div>
            </FormInline>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDataView;
