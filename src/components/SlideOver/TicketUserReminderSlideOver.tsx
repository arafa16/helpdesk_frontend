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

const TicketUserReminderSlideOver = (props: any) => {
  const {
    show,
    setShow,
    formData,
    setFormData,
    users,
    handleSubmit,
    handleCancel,
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
            <h2 className="mr-auto text-base font-medium">User Reminder</h2>
          </Slideover.Title>
          <Slideover.Description>
            <form id="form" onSubmit={handleSubmit}>
              <div className="text-xs">
                <FormLabel htmlFor="user_uuid">User</FormLabel>
                <FormSelect
                  formSelectSize="sm"
                  aria-label=".form-select-sm example"
                  name="user_uuid"
                  value={formData?.user_uuid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user_uuid: e.target.value,
                    })
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

export default TicketUserReminderSlideOver;
