import CreateCustomerForm from "../../components/Form/CreateCustomerForm";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CreateCustomerData,
  resetCustomer,
} from "../../stores/features/CustomerSlice";
import { useNavigate } from "react-router-dom";

const CreateCustomerPage = () => {
  let [formData, setFormData] = useState<any>({
    name: "",
    address: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, messageCreate } = useSelector(
    (state: any) => state.customer
  );

  useEffect(() => {
    if (messageCreate !== "" && isSuccess && !isLoading) {
      const back = `back=/customer`;
      navigate(`/customer/view/${messageCreate?.data?.uuid}?${back}`);
      dispatch(resetCustomer());
    } else if (messageCreate !== "" && isError && !isLoading) {
      console.log(messageCreate, "error");
      dispatch(resetCustomer());
    }
  }, [data, isLoading, isError, isSuccess, messageCreate, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(CreateCustomerData({ formData }));
  };

  const handleDiscard = () => {
    navigate("/customer");
  };

  return (
    <div>
      <div className="mt-6 flex justify-end gap-2">
        <Button form="form_customer" variant="primary" type="submit" size="sm">
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
        <CreateCustomerForm
          formData={formData}
          setFormData={setFormData}
          submit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateCustomerPage;
