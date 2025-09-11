import dayjs from "dayjs";
import { FormInline, FormLabel } from "../../base-components/Form";

const UserDataView = (props: any) => {
  const { datas, privilege_view } = props;
  return (
    <>
      <div className="w-full box text-xs p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60">
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="name">
                Name
              </FormLabel>
              <div className="text-slate-700 capitalize">: {datas?.name}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="email">
                Email
              </FormLabel>
              <div className="text-slate-700 lowercase">: {datas?.email}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="nip">
                NIP
              </FormLabel>
              <div className="text-slate-700 capitalize">: {datas?.nip}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="phone_number">
                Phone Number
              </FormLabel>
              <div className="">: {datas?.phone_number}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="company">
                Company
              </FormLabel>
              <div className="text-slate-700 capitalize">
                : {datas?.company?.name}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="division">
                Division
              </FormLabel>
              <div className="text-slate-700 capitalize">
                : {datas?.division?.name}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="location">
                Location
              </FormLabel>
              <div className="text-slate-700 capitalize">
                : {datas?.location?.name}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                User Status
              </FormLabel>
              <div className="">: {datas?.user_status?.name}</div>
            </FormInline>
          </div>
        </div>
        <div
          className={`${
            privilege_view ? "" : "hidden"
          } grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10 mt-4 pb-4 border-b border-slate-200/60`}
        >
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket">
                Dashboard
              </FormLabel>
              <div className="">
                : {datas?.privilege?.dashboard ? "active" : "inactive"}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket">
                Ticket
              </FormLabel>
              <div className="">
                : {datas?.privilege?.ticket ? "active" : "inactive"}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket_executor">
                Ticket Executor
              </FormLabel>
              <div className="">
                : {datas?.privilege?.ticket_executor ? "active" : "inactive"}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Ticket Customer
              </FormLabel>
              <div className="">
                : {datas?.privilege?.ticket_customer ? "active" : "inactive"}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                User
              </FormLabel>
              <div className="">
                : {datas?.privilege?.user ? "active" : "inactive"}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Setting
              </FormLabel>
              <div className="">
                : {datas?.privilege?.setting ? "active" : "inactive"}
              </div>
            </FormInline>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDataView;
