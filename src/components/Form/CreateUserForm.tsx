import {
  FormLabel,
  FormInput,
  FormSelect,
  FormInline,
} from "../../base-components/Form";

const CreateUserForm = (props: any) => {
  const { formData, setFormData, attributes } = props;

  return (
    <div className={`text-xs box p-6`}>
      <div
        className={`grid grid-cols-12 gap-y-1 gap-x-4 border-b border-slate-200 pb-4`}
      >
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="name">
              Name
            </FormLabel>
            <FormInput
              formInputSize="sm"
              id="name"
              name="name"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="email">
              Email
            </FormLabel>
            <FormInput
              formInputSize="sm"
              id="email"
              name="email"
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="nip">
              NIP
            </FormLabel>
            <FormInput
              formInputSize="sm"
              id="nip"
              name="nip"
              value={formData?.nip}
              onChange={(e) =>
                setFormData({ ...formData, nip: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="area_uuid">
              Phone Number
            </FormLabel>
            <FormInput
              formInputSize="sm"
              id="phone_number"
              name="phone_number"
              value={formData?.phone_number}
              onChange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="company_uuid">
              Company
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="company_uuid"
              value={formData?.company_uuid}
              onChange={(e) =>
                setFormData({ ...formData, company_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {attributes?.company?.map((data: any, index: any) => (
                <option key={index} value={data.uuid}>
                  {data.name}
                </option>
              ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="division">
              Division
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="division"
              value={formData?.division_uuid}
              onChange={(e) =>
                setFormData({ ...formData, division_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {attributes?.division?.map((data: any, index: any) => (
                <option key={index} value={data.uuid}>
                  {data.name}
                </option>
              ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="location">
              Location
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="location"
              value={formData?.location_uuid}
              onChange={(e) =>
                setFormData({ ...formData, location_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {attributes?.location?.map((data: any, index: any) => (
                <option key={index} value={data.uuid}>
                  {data.name}
                </option>
              ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="user_status">
              User Status
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="user_status"
              value={formData?.user_status_uuid}
              onChange={(e) =>
                setFormData({ ...formData, user_status_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {attributes?.user_status.map((data: any, index: any) => (
                <option key={index} value={data.uuid}>
                  {data.name}
                </option>
              ))}
            </FormSelect>
          </FormInline>
        </div>
      </div>
      <div className={`grid grid-cols-12 gap-y-1 gap-x-4 pb-4 mt-4`}>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="dashboard">
              Dashboard
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="dashboard"
              value={formData?.dashboard}
              onChange={(e) =>
                setFormData({ ...formData, dashboard: e.target.value })
              }
            >
              <option value={1}>active</option>
              <option value={0}>inactive</option>
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="ticket">
              Ticket
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="ticket"
              value={formData?.ticket}
              onChange={(e) =>
                setFormData({ ...formData, ticket: e.target.value })
              }
            >
              <option value={1}>active</option>
              <option value={0}>inactive</option>
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="ticket_executor">
              Ticket Executor
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="ticket_executor"
              value={formData?.ticket_executor}
              onChange={(e) =>
                setFormData({ ...formData, ticket_executor: e.target.value })
              }
            >
              <option value={1}>active</option>
              <option value={0}>inactive</option>
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="ticket_customer">
              Ticket Customer
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="ticket_customer"
              value={formData?.ticket_customer}
              onChange={(e) =>
                setFormData({ ...formData, ticket_customer: e.target.value })
              }
            >
              <option value={1}>active</option>
              <option value={0}>inactive</option>
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="user">
              User
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="user"
              value={formData?.user}
              onChange={(e) =>
                setFormData({ ...formData, user: e.target.value })
              }
            >
              <option value={1}>active</option>
              <option value={0}>inactive</option>
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="setting">
              Setting
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="setting"
              value={formData?.setting}
              onChange={(e) =>
                setFormData({ ...formData, setting: e.target.value })
              }
            >
              <option value={1}>active</option>
              <option value={0}>inactive</option>
            </FormSelect>
          </FormInline>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
