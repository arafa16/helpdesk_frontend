import React from "react";
import { Slideover } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";
import {
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
} from "../../base-components/Form";
import Button from "../../base-components/Button";
import dayjs from "dayjs";

const TicketActivitySlideOver = (props: any) => {
  const {
    show,
    setShow,
    formData,
    setFormData,
    ticket_status,
    handleSubmit,
    handleCancel,
    handleChangeFile,
  } = props;

  return (
    <>
      <Slideover
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <Slideover.Panel>
          <a
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              handleCancel();
            }}
            className="absolute top-0 left-0 right-auto mt-4 -ml-12"
            href="#"
          >
            <Lucide icon="X" className="w-8 h-8 text-slate-400" />
          </a>
          <Slideover.Title>
            <h2 className="mr-auto text-base font-medium">Ticket Activity</h2>
          </Slideover.Title>
          <Slideover.Description>
            <form id="form" onSubmit={handleSubmit}>
              <div className="mt-6 text-xs">
                <FormLabel htmlFor="ticket_status_uuid">
                  Ticket Status
                </FormLabel>
                <FormSelect
                  formSelectSize="sm"
                  aria-label=".form-select-sm example"
                  name="ticket_status_uuid"
                  value={formData?.ticket_status_uuid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ticket_status_uuid: e.target.value,
                    })
                  }
                >
                  <option value={""}></option>
                  {ticket_status &&
                    ticket_status.map((data: any, index: any) => (
                      <option key={index} value={data.uuid}>
                        {data.name}
                      </option>
                    ))}
                </FormSelect>
              </div>
              <div className="mt-6 text-xs">
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormTextarea
                  id="description"
                  formTextareaSize="sm"
                  className="border p-1"
                  value={formData.description}
                  onChange={(e: any) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="mt-6 text-xs">
                <FormLabel htmlFor="reminder">Reminder</FormLabel>
                <FormSelect
                  formSelectSize="sm"
                  aria-label=".form-select-sm example"
                  name="reminder"
                  value={formData?.reminder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reminder: e.target.value,
                    })
                  }
                >
                  <option value=""></option>
                  <option value={0}>off</option>
                  <option value={1}>on</option>
                </FormSelect>
              </div>
              <div className="mt-6 text-xs">
                <FormLabel htmlFor="reminder_date">
                  Reminder Date {formData.schedule_reminder}
                </FormLabel>
                <FormInput
                  id="schedule_reminder"
                  type="date"
                  className="border p-1 text-xs"
                  value={dayjs(formData.schedule_reminder).format("YYYY-MM-DD")}
                  onChange={(e: any) =>
                    setFormData({
                      ...formData,
                      schedule_reminder: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          </Slideover.Description>
          <Slideover.Footer>
            <Button
              variant="outline-secondary"
              type="button"
              size="sm"
              onClick={() => {
                handleCancel();
              }}
              className="w-20 mr-1"
            >
              Cancel
            </Button>
            <Button
              form="form"
              variant="primary"
              type="submit"
              size="sm"
              className="w-20"
            >
              Upload
            </Button>
          </Slideover.Footer>
        </Slideover.Panel>
      </Slideover>
    </>
  );
};

export default TicketActivitySlideOver;
