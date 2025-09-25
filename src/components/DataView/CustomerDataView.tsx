import dayjs from "dayjs";
import { FormInline, FormLabel } from "../../base-components/Form";

const CustomerDataView = (props: any) => {
  const { datas } = props;
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
                Address
              </FormLabel>
              <div className="text-slate-700 lowercase">: {datas?.address}</div>
            </FormInline>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDataView;
