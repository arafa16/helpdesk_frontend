import React from "react";
import { useState } from "react";
import {
  FormLabel,
  FormInput,
  FormSelect,
  FormInline,
  FormTextarea,
} from "../../base-components/Form";
import TomSelect from "../../base-components/TomSelect";
import { isNull } from "lodash";

const CreateTicketForm = (props: any) => {
  const {
    formData,
    setFormData,
    customer,
    area,
    ticket_category,
    ticket_access,
    executor,
    users,
  } = props;

  return (
    <div className={`text-xs box p-6`}>
      <div
        className={`grid grid-cols-12 gap-y-1 gap-x-4 border-b border-slate-200 pb-4`}
      >
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="subject">
              Subject
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="user_uuid">
              User
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="user_uuid"
              value={formData?.user_uuid}
              onChange={(e) =>
                setFormData({ ...formData, user_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {users &&
                users.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="input-wizard-1">
              Customer
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="customer_uuid"
              value={formData?.customer_uuid}
              onChange={(e) =>
                setFormData({ ...formData, customer_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {customer &&
                customer.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="area_uuid">
              Area
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="area_uuid"
              value={formData?.area_uuid}
              onChange={(e) =>
                setFormData({ ...formData, area_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {area &&
                area.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="case_number">
              Case Number
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.case_number}
              name="case_number"
              onChange={(e) =>
                setFormData({ ...formData, case_number: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline className="">
            <FormLabel className="" htmlFor="network_number">
              Network Number
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.network_number}
              name="network_number"
              placeholder="network number/nomor jaringan"
              onChange={(e) =>
                setFormData({ ...formData, network_number: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="ticket_access_uuid">
              Ticket Access
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              name="ticket_access_uuid"
              value={formData?.ticket_access_uuid}
              onChange={(e) =>
                setFormData({ ...formData, ticket_access_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {ticket_access &&
                ticket_access.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="ticket_category_uuid">
              Ticket Category
            </FormLabel>
            <FormSelect
              id="ticket_category_uuid"
              formSelectSize="sm"
              name="ticket_category_uuid"
              value={formData?.ticket_category_uuid}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  ticket_category_uuid: e.target.value,
                })
              }
            >
              <option value={""}></option>
              {ticket_category &&
                ticket_category.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="address">
              Address
            </FormLabel>
            <FormTextarea
              formTextareaSize="sm"
              value={formData?.address}
              name="address"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline className="">
            <FormLabel className="" htmlFor="description">
              Description
            </FormLabel>
            <FormTextarea
              formTextareaSize="sm"
              value={formData?.description}
              name="description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </FormInline>
        </div>
      </div>
      <div
        className={`grid grid-cols-12 gap-y-1 gap-x-4 border-b border-slate-200 pb-4 mt-4`}
      >
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="pic">
              PIC
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.pic}
              name="pic"
              onChange={(e) =>
                setFormData({ ...formData, pic: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded absolute z-[50]">
          <FormInline>
            <FormLabel className="" htmlFor="executor_uuid">
              Executor
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              name="executor_uuid"
              value={formData?.executor_uuid}
              onChange={(e) =>
                setFormData({ ...formData, executor_uuid: e.target.value })
              }
            >
              <option value={""}></option>
              {executor &&
                executor.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="pic_phone_number">
              PIC Phone Number
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.pic_phone_number}
              name="pic_phone_number"
              onChange={(e) =>
                setFormData({ ...formData, pic_phone_number: e.target.value })
              }
            />
          </FormInline>
        </div>
      </div>
      <div className={`grid grid-cols-12 gap-y-1 gap-x-4 mt-4`}>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="lat">
              Lat
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.lat}
              name="lat"
              onChange={(e) =>
                setFormData({ ...formData, lat: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="lng">
              Lng
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.lng}
              name="lng"
              onChange={(e) =>
                setFormData({ ...formData, lng: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="gmap">
              Gmap Link
            </FormLabel>
            <FormTextarea
              formTextareaSize="sm"
              value={formData?.gmap}
              name="gmap"
              onChange={(e) =>
                setFormData({ ...formData, gmap: e.target.value })
              }
            />
          </FormInline>
        </div>
      </div>
      <div className={`grid grid-cols-12 gap-y-1 gap-x-4 mt-4`}>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="eta">
              Eta
            </FormLabel>
            <FormInput
              formInputSize="sm"
              value={formData?.eta}
              type="number"
              name="eta"
              onChange={(e) =>
                setFormData({ ...formData, eta: e.target.value })
              }
            />
          </FormInline>
        </div>
        <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
          <FormInline>
            <FormLabel className="" htmlFor="priority_level">
              Priority Level
            </FormLabel>
            <FormSelect
              formSelectSize="sm"
              name="priority_level"
              value={formData?.priority_level}
              onChange={(e) =>
                setFormData({ ...formData, priority_level: e.target.value })
              }
            >
              <option value={""}></option>
              <option value={"low"}>low</option>
              <option value={"medium"}>medium</option>
              <option value={"high"}>high</option>
              <option value={"urgent"}>urgent</option>
            </FormSelect>
          </FormInline>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketForm;
