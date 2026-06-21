import dayjs from "dayjs";
import { FormInline, FormLabel } from "../../base-components/Form";

const TemplateDataView1 = (props: any) => {
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
              <FormLabel className="" htmlFor="sequence">
                Code
              </FormLabel>
              <div className="text-slate-700 lowercase">: {datas?.code}</div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="sequence">
                Sequence
              </FormLabel>
              <div className="text-slate-700 lowercase">
                : {datas?.sequence}
              </div>
            </FormInline>
          </div>
          <div className="bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="sequence">
                Is Active
              </FormLabel>
              <div className="text-slate-700 lowercase">
                : {datas?.is_active === true ? "Active" : "Inactive"}
              </div>
            </FormInline>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateDataView1;
