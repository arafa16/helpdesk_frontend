import CreateTemplateForm1 from "../../components/Form/CreateTemplateForm1";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CreateTicketTroubleConsequenceData,
  resetTicketTroubleConsequence,
} from "../../stores/features/TicketTroubleConsequenceSlice";
import { useNavigate } from "react-router-dom";

const CreateTicketTroubleConsequencePage = () => {
  let [formData, setFormData] = useState<any>({
    name: "",
    code: "",
    sequence: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, messageCreate } = useSelector(
    (state: any) => state.ticket_trouble_consequence,
  );

  useEffect(() => {
    if (messageCreate !== "" && isSuccess && !isLoading) {
      const back = `back=/ticket_trouble_consequence`;
      navigate(
        `/ticket_trouble_consequence/view/${messageCreate?.data?.uuid}?${back}`,
      );
      dispatch(resetTicketTroubleConsequence());
    } else if (messageCreate !== "" && isError && !isLoading) {
      console.log(messageCreate, "error");
      dispatch(resetTicketTroubleConsequence());
    }
  }, [data, isLoading, isError, isSuccess, messageCreate, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(CreateTicketTroubleConsequenceData({ formData }));
  };

  const handleDiscard = () => {
    navigate("/ticket_trouble_consequence");
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

export default CreateTicketTroubleConsequencePage;
