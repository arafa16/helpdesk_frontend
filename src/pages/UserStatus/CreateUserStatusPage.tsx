import CreateTemplateForm1 from "../../components/Form/CreateTemplateForm1";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CreateUserStatusData,
  resetUserStatus,
} from "../../stores/features/UserStatusSlice";
import { useNavigate } from "react-router-dom";

const CreateUserStatusPage = () => {
  let [formData, setFormData] = useState<any>({
    name: "",
    code: "",
    sequence: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, messageCreate } = useSelector(
    (state: any) => state.user_status
  );

  useEffect(() => {
    if (messageCreate !== "" && isSuccess && !isLoading) {
      const back = `back=/user_status`;
      navigate(`/user_status/view/${messageCreate?.data?.uuid}?${back}`);
      dispatch(resetUserStatus());
    } else if (messageCreate !== "" && isError && !isLoading) {
      console.log(messageCreate, "error");
      dispatch(resetUserStatus());
    }
  }, [data, isLoading, isError, isSuccess, messageCreate, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(CreateUserStatusData({ formData }));
  };

  const handleDiscard = () => {
    navigate("/user_status");
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

export default CreateUserStatusPage;
