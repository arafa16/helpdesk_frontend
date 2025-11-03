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
                User Company
              </FormLabel>
              <div className="">: {datas?.company?.name}</div>
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
              <FormLabel className="" htmlFor="complaint_time">
                Complaint Time
              </FormLabel>
              <div className="">
                :{" "}
                {datas &&
                  datas.complaint_time &&
                  dayjs(datas.complaint_time).format("YYYY-MM-DD HH:mm:ss")}
              </div>
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
              <div className="whitespace-pre-line">: {datas?.address}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                RFO
              </FormLabel>
              <div className="whitespace-pre-line">: {datas?.rfo}</div>
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
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="first_executor">
                First Executor
              </FormLabel>
              <div className="">: {datas?.first_executor?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="second_executor">
                Second Executor
              </FormLabel>
              <div className="">: {datas?.second_executor?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="third_executor">
                Third Executor
              </FormLabel>
              <div className="">: {datas?.third_executor?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="fourth_executor">
                Fourth Executor
              </FormLabel>
              <div className="">: {datas?.fourth_executor?.name}</div>
            </FormInline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60">
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
              <div className="whitespace-pre-line truncate">
                : {datas && datas.gmap}
              </div>
            </FormInline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="spk_number">
                SPK Number
              </FormLabel>
              <div className="">: {datas?.spk_number}</div>
            </FormInline>
          </div>
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
                Solution
              </FormLabel>
              <div className="whitespace-pre-line">: {datas?.solution}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Trouble Description
              </FormLabel>
              <div className="whitespace-pre-line">
                : {datas?.ticket_trouble_description}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket_network_status">
                Network Status
              </FormLabel>
              <div className="">: {datas?.ticket_network_status?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="down_time">
                Down Time
              </FormLabel>
              <div className="">
                :{" "}
                {datas?.down_time &&
                  dayjs(datas?.down_time).format("YYYY-MM-DD HH:mm:ss")}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="up_time">
                Up Time
              </FormLabel>
              <div className="">
                :{" "}
                {datas?.up_time &&
                  dayjs(datas?.up_time).format("YYYY-MM-DD HH:mm:ss")}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="new_cable">
                New Cable
              </FormLabel>
              <div className="">: {datas?.new_cable}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="external_pole">
                External Pole
              </FormLabel>
              <div className="">: {datas?.external_pole}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="new_pole_setup">
                New Pole Setup
              </FormLabel>
              <div className="">: {datas?.new_pole_setup}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="open_cut">
                Open Cut
              </FormLabel>
              <div className="">: {datas?.open_cut}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="drilling">
                Drilling
              </FormLabel>
              <div className="">: {datas?.drilling}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="new_closure">
                New Closure
              </FormLabel>
              <div className="">: {datas?.new_closure}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="new_splitter">
                New Splitter
              </FormLabel>
              <div className="">: {datas?.new_splitter}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="fo_jointing">
                FO Jointing
              </FormLabel>
              <div className="">: {datas?.fo_jointing}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="old_datek">
                Old Datek
              </FormLabel>
              <div className="whitespace-pre-line">: {datas?.old_datek}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="new_datek">
                New Datek
              </FormLabel>
              <div className="whitespace-pre-line">: {datas?.new_datek}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="justification">
                Justification
              </FormLabel>
              <div className="whitespace-pre-line">
                : {datas?.justification}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="constraint">
                Constraint
              </FormLabel>
              <div className="whitespace-pre-line">: {datas?.constraint}</div>
            </FormInline>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDataView;
