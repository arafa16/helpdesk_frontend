import React from "react";
import { useState } from "react";
import {
  FormLabel,
  FormInput,
  FormSelect,
  FormInline,
  FormTextarea,
} from "../../base-components/Form";

const CreateTicketForm = (props: any) => {
  const {
    submit,
    formData,
    setFormData,
    customer,
    company,
    area,
    ticket_category,
    ticket_trouble_category,
    ticket_trouble_couse,
    ticket_network_status,
    ticket_access,
    executor,
    users,
  } = props;

  return (
    <form onSubmit={submit} id="form_ticket">
      <div className={`text-xs box p-6 mb-20`}>
        <div
          className={`grid grid-cols-12 gap-y-1 gap-x-4 border-b border-slate-200 pb-4`}
        >
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="subject">
                Subject
              </FormLabel>
              <FormInput
                name="subject"
                formInputSize="sm"
                value={formData?.subject}
                required
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="input-wizard-1">
                User Company
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                aria-label=".form-select-sm example"
                name="company_uuid"
                required
                value={formData?.company_uuid}
                onChange={(e) =>
                  setFormData({ ...formData, company_uuid: e.target.value })
                }
              >
                <option value={""}></option>
                {company &&
                  company.map((data: any, index: any) => (
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
                required
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
                required
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
            <FormInline className="">
              <FormLabel className="" htmlFor="complaint_time">
                Complaint Time
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={
                  formData?.complaint_time !== null
                    ? formData?.complaint_time
                    : ""
                }
                name="complaint_time"
                type="datetime-local"
                step="1"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, complaint_time: e.target.value })
                }
              />
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
                  setFormData({
                    ...formData,
                    ticket_access_uuid: e.target.value,
                  })
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
              <FormLabel className="" htmlFor="rfo">
                RFO
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.rfo}
                name="rfo"
                onChange={(e) =>
                  setFormData({ ...formData, rfo: e.target.value })
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
                required
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
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded absolute z-[50]">
            <FormInline>
              <FormLabel className="" htmlFor="first_executor_uuid">
                First Executor
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="first_executor_uuid"
                value={formData?.first_executor_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    first_executor_uuid: e.target.value,
                  })
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
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded absolute z-[50]">
            <FormInline>
              <FormLabel className="" htmlFor="second_executor_uuid">
                Second Executor
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="second_executor_uuid"
                value={formData?.second_executor_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    second_executor_uuid: e.target.value,
                  })
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
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded absolute z-[50]">
            <FormInline>
              <FormLabel className="" htmlFor="third_executor_uuid">
                Third Executor
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="third_executor_uuid"
                value={formData?.third_executor_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    third_executor_uuid: e.target.value,
                  })
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
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded absolute z-[50]">
            <FormInline>
              <FormLabel className="" htmlFor="fourth_executor_uuid">
                Fourth Executor
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="fourth_executor_uuid"
                value={formData?.fourth_executor_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fourth_executor_uuid: e.target.value,
                  })
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
        </div>
        <div
          className={`grid grid-cols-12 gap-y-1 gap-x-4 border-b border-slate-200 pb-4 mt-4`}
        >
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
        <div
          className={`grid grid-cols-12 gap-y-1 gap-x-4 border-b border-slate-200 pb-4 mt-4`}
        >
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
                required
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
        <div className={`grid grid-cols-12 gap-y-1 gap-x-4 mt-4`}>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="spk_number">
                SPK Number
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.spk_number}
                name="spk_number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, spk_number: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket_trouble_category_uuid">
                Trouble Category
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="ticket_trouble_category_uuid"
                value={formData?.ticket_trouble_category_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ticket_trouble_category_uuid: e.target.value,
                  })
                }
              >
                <option value={""}></option>
                {ticket_trouble_category &&
                  ticket_trouble_category.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
              </FormSelect>
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="solution">
                Solution
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.solution}
                name="solution"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    solution: e.target.value,
                  })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket_trouble_couse_uuid">
                Trouble Couse
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="ticket_trouble_couse_uuid"
                value={formData?.ticket_trouble_couse_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ticket_trouble_couse_uuid: e.target.value,
                  })
                }
              >
                <option value={""}></option>
                {ticket_trouble_couse &&
                  ticket_trouble_couse.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
              </FormSelect>
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket_network_status_uuid">
                Network Status
              </FormLabel>
              <FormSelect
                formSelectSize="sm"
                name="ticket_network_status_uuid"
                value={formData?.ticket_network_status_uuid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ticket_network_status_uuid: e.target.value,
                  })
                }
              >
                <option value={""}></option>
                {ticket_network_status &&
                  ticket_network_status.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
              </FormSelect>
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="ticket_trouble_description">
                Trouble Description
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.ticket_trouble_description}
                name="ticket_trouble_description"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ticket_trouble_description: e.target.value,
                  })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="down_time">
                Down Time
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.down_time !== null ? formData?.down_time : ""}
                name="down_time"
                type="datetime-local"
                step="1"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, down_time: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="up_time">
                Up Time
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.up_time !== null ? formData?.up_time : ""}
                name="up_time"
                type="datetime-local"
                step="1"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, up_time: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="new_cable">
                New Cable
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.new_cable}
                name="new_cable"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, new_cable: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="external_pole">
                External Pole
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.external_pole}
                name="external_pole"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, external_pole: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="new_pole_setup">
                New Pole Setup
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.new_pole_setup}
                name="new_pole_setup"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, new_pole_setup: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="open_cut">
                Open Cut
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.open_cut}
                name="open_cut"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, open_cut: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="drilling">
                Drilling
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.drilling}
                name="drilling"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, drilling: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="new_closure">
                New Closure
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.new_closure}
                name="new_closure"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, new_closure: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="new_splitter">
                New Splitter
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.new_splitter}
                name="new_splitter"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, new_splitter: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="fo_jointing">
                FO Jointing
              </FormLabel>
              <FormInput
                formInputSize="sm"
                value={formData?.fo_jointing}
                name="fo_jointing"
                type="number"
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, fo_jointing: e.target.value })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="old_datek">
                Old Datek
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.old_datek}
                name="old_datek"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    old_datek: e.target.value,
                  })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline className="">
              <FormLabel className="" htmlFor="new_datek">
                New Datek
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.new_datek}
                name="new_datek"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    new_datek: e.target.value,
                  })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="justification">
                Justification
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.justification}
                name="justification"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    justification: e.target.value,
                  })
                }
              />
            </FormInline>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6 bg-slate-50 p-1 rounded">
            <FormInline>
              <FormLabel className="" htmlFor="constraint">
                Constraint
              </FormLabel>
              <FormTextarea
                formTextareaSize="sm"
                value={formData?.constraint}
                name="constraint"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    constraint: e.target.value,
                  })
                }
              />
            </FormInline>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTicketForm;
