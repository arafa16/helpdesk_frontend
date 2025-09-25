import { FormLabel, FormInput, FormInline } from "../../base-components/Form";

const CreateCompanyForm = (props: any) => {
  const { formData, setFormData, submit } = props;

  return (
    <form onSubmit={submit} id="form_company">
      <div className={`text-xs box p-6`}>
        <div className={`grid grid-cols-12 gap-y-1 gap-x-4 pb-4`}>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="name">
                Name
              </FormLabel>
              <FormInput
                formInputSize="sm"
                id="name"
                name="name"
                required
                value={formData?.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="address">
                Address
              </FormLabel>
              <FormInput
                formInputSize="sm"
                id="address"
                name="address"
                required
                value={formData?.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </FormInline>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateCompanyForm;
