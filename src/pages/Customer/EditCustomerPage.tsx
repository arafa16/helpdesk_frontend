import CreateCustomerForm from "../../components/Form/CreateCustomerForm";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  UpdateCustomerData,
  GetCustomerDataById,
  resetCustomer,
} from "../../stores/features/CustomerSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditCustomerPage = () => {
  const { id } = useParams();
  let [formData, setFormData] = useState<any>({
    name: "",
    address: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess, message, messageUpdate } =
    useSelector((state: any) => state.customer);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setFormData({
        name: data?.data?.name,
        address: data?.data?.address,
      });
      dispatch(resetCustomer());
    } else if (isError && message && !isLoading) {
      console.log(message);
      dispatch(resetCustomer());
    }

    if (messageUpdate !== "" && isSuccess && !isLoading) {
      const back = `back=/customer`;
      navigate(`/customer/view/${id}?${back}`);
      dispatch(resetCustomer());
    } else if (messageUpdate !== "" && isError && !isLoading) {
      console.log(messageUpdate, "error");
      dispatch(resetCustomer());
    }
  }, [data, isLoading, isError, isSuccess, messageUpdate, message, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(GetCustomerDataById({ uuid: id }));
    }
  }, [id, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(UpdateCustomerData({ formData, uuid: id }));
  };

  const handleDiscard = () => {
    const back = `back=/customer`;
    navigate(`/customer/view/${id}?${back}`);
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

export default EditCustomerPage;
