import CreateTemplateForm1 from "../../components/Form/CreateTemplateForm1";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CreateTicketTroubleCouseData,
  resetTicketTroubleCouse,
} from "../../stores/features/TicketTroubleCouseSlice";
import { useNavigate } from "react-router-dom";

const CreateTicketTroubleCousePage = () => {
  let [formData, setFormData] = useState<any>({
    name: "",
    code: "",
    sequence: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, messageCreate } = useSelector(
    (state: any) => state.ticket_trouble_couse,
  );

  useEffect(() => {
    if (messageCreate !== "" && isSuccess && !isLoading) {
      const back = `back=/ticket_trouble_couse`;
      navigate(
        `/ticket_trouble_couse/view/${messageCreate?.data?.uuid}?${back}`,
      );
      dispatch(resetTicketTroubleCouse());
    } else if (messageCreate !== "" && isError && !isLoading) {
      console.log(messageCreate, "error");
      dispatch(resetTicketTroubleCouse());
    }
  }, [data, isLoading, isError, isSuccess, messageCreate, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(CreateTicketTroubleCouseData({ formData }));
  };

  const handleDiscard = () => {
    navigate("/ticket_trouble_couse");
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

export default CreateTicketTroubleCousePage;
