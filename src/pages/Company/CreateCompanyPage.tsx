import CreateCompanyForm from "../../components/Form/CreateCompanyForm";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CreateCompanyData,
  resetCompany,
} from "../../stores/features/CompanySlice";
import { useNavigate } from "react-router-dom";

const CreateCompanyPage = () => {
  let [formData, setFormData] = useState<any>({
    name: "",
    address: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, messageCreate } = useSelector(
    (state: any) => state.company
  );

  useEffect(() => {
    if (messageCreate !== "" && isSuccess && !isLoading) {
      const back = `back=/company`;
      navigate(`/company/view/${messageCreate?.data?.newData?.uuid}?${back}`);
      dispatch(resetCompany());
    } else if (messageCreate !== "" && isError && !isLoading) {
      console.log(messageCreate, "error");
      dispatch(resetCompany());
    }
  }, [data, isLoading, isError, isSuccess, messageCreate, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(CreateCompanyData({ formData }));
  };

  const handleDiscard = () => {
    navigate("/company");
  };

  return (
    <div>
      <div className="mt-6 flex justify-end gap-2">
        <Button form="form_company" variant="primary" type="submit" size="sm">
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
        <CreateCompanyForm
          formData={formData}
          setFormData={setFormData}
          submit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateCompanyPage;
