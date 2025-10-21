import React from "react";
import { Slideover } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";
import { FormLabel, FormInput } from "../../base-components/Form";
import Button from "../../base-components/Button";

const TicketActivityCommentAttachmentSlideOver = (props: any) => {
  const { show, setShow, formData, setFormData, handleSubmit, handleCancel } =
    props;

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
            <div className="w-full">
              <div className="mb-4">
                <h2 className="mr-auto text-base font-medium">
                  Attachment Ticket Activity Comment
                </h2>
              </div>
              <div className="flex justify-end ">
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
                  form="form_comment_attachment"
                  variant="primary"
                  type="submit"
                  size="sm"
                  className="w-20"
                >
                  Upload
                </Button>
              </div>
            </div>
          </Slideover.Title>
          <Slideover.Description>
            <form id="form_comment_attachment" onSubmit={handleSubmit}>
              <div className="text-xs">
                <FormLabel htmlFor="file">File Attachment</FormLabel>
                <FormInput
                  id="file"
                  type="file"
                  className="border p-1 text-xs"
                  onChange={(e: any) =>
                    setFormData({ ...formData, file: e.target.files[0] })
                  }
                />
              </div>
              <div className="text-xs mt-4">
                <FormLabel htmlFor="name">File Name</FormLabel>
                <FormInput
                  formInputSize="sm"
                  id="name"
                  name="name"
                  type="text"
                  value={formData?.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
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
              form="form_comment_attachment"
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

export default TicketActivityCommentAttachmentSlideOver;
