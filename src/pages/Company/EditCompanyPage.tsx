import CreateCompanyForm from "../../components/Form/CreateCompanyForm";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  UpdateCompanyData,
  GetCompanyDataById,
  resetCompany,
} from "../../stores/features/CompanySlice";
import { useNavigate, useParams } from "react-router-dom";

const EditCompanyPage = () => {
  const { id } = useParams();
  let [formData, setFormData] = useState<any>({
    name: "",
    address: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message, messageUpdate } =
    useSelector((state: any) => state.company);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setFormData({
        name: data?.data?.name,
        address: data?.data?.address,
      });
      dispatch(resetCompany());
    } else if (isError && message && !isLoading) {
      console.log(message);
      dispatch(resetCompany());
    }

    if (messageUpdate !== "" && isSuccess && !isLoading) {
      const back = `back=/company`;
      navigate(`/company/view/${id}?${back}`);
      dispatch(resetCompany());
    } else if (messageUpdate !== "" && isError && !isLoading) {
      console.log(messageUpdate, "error");
      dispatch(resetCompany());
    }
  }, [data, isLoading, isError, isSuccess, messageUpdate, message, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(GetCompanyDataById({ uuid: id }));
    }
  }, [id, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(UpdateCompanyData({ formData, uuid: id }));
  };

  const handleDiscard = () => {
    const back = `back=/company`;
    navigate(`/company/view/${id}?${back}`);
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

export default EditCompanyPage;
