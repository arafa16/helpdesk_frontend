import CreateTemplateForm1 from "../../components/Form/CreateTemplateForm1";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CreateTicketCategoryData,
  resetTicketCategory,
} from "../../stores/features/TicketCategorySlice";
import { useNavigate } from "react-router-dom";

const CreateTicketCategoryPage = () => {
  let [formData, setFormData] = useState<any>({
    name: "",
    code: "",
    sequence: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, messageCreate } = useSelector(
    (state: any) => state.ticket_category
  );

  useEffect(() => {
    if (messageCreate !== "" && isSuccess && !isLoading) {
      const back = `back=/ticket_category`;
      navigate(`/ticket_category/view/${messageCreate?.data?.uuid}?${back}`);
      dispatch(resetTicketCategory());
    } else if (messageCreate !== "" && isError && !isLoading) {
      console.log(messageCreate, "error");
      dispatch(resetTicketCategory());
    }
  }, [data, isLoading, isError, isSuccess, messageCreate, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(CreateTicketCategoryData({ formData }));
  };

  const handleDiscard = () => {
    navigate("/ticket_category");
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

export default CreateTicketCategoryPage;
