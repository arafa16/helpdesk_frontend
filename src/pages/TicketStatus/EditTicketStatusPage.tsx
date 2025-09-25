import CreateTemplateForm1 from "../../components/Form/CreateTemplateForm1";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  UpdateTicketStatusData,
  GetTicketStatusDataById,
  resetTicketStatus,
} from "../../stores/features/TicketStatusSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditTicketStatusPage = () => {
  const { id } = useParams();
  let [formData, setFormData] = useState<any>({
    name: "",
    code: "",
    sequence: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message, messageUpdate } =
    useSelector((state: any) => state.ticket_status);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setFormData({
        name: data?.data?.name,
        code: data?.data?.code,
        sequence: data?.data?.sequence,
      });
      dispatch(resetTicketStatus());
    } else if (isError && message && !isLoading) {
      console.log(message);
      dispatch(resetTicketStatus());
    }

    if (messageUpdate !== "" && isSuccess && !isLoading) {
      const back = `back=/ticket_status`;
      navigate(`/ticket_status/view/${id}?${back}`);
      dispatch(resetTicketStatus());
    } else if (messageUpdate !== "" && isError && !isLoading) {
      console.log(messageUpdate, "error");
      dispatch(resetTicketStatus());
    }
  }, [data, isLoading, isError, isSuccess, messageUpdate, message, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(GetTicketStatusDataById({ uuid: id }));
    }
  }, [id, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(UpdateTicketStatusData({ formData, uuid: id }));
  };

  const handleDiscard = () => {
    const back = `back=/ticket_status`;
    navigate(`/ticket_status/view/${id}?${back}`);
  };

  return (
    <div>
      <div className="mt-6 flex justify-end gap-2">
        <Button form="form" variant="primary" type="submit" size="sm">
          Save
        </Button>
        <Button
          variant="secondary"
          type="button"
          size="sm"
          onClick={() => handleDiscard()}
        >
          Discard
        </Button>
      </div>
      <div className="mt-4">
        <CreateTemplateForm1
          formData={formData}
          setFormData={setFormData}
          submit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EditTicketStatusPage;
