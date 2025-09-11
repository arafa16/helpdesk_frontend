import { useState, useEffect } from "react";
import CreateUserForm from "../../components/Form/CreateUserForm";
import Button from "../../base-components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCreateAttribute,
  CreateUserData,
  resetUser,
} from "../../stores/features/UserSlice";

const CreateUserPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    nip: "",
    phone_number: "",
    company_uuid: "",
    division_uuid: "",
    location_uuid: "",
    user_status_uuid: "",
    dashboard: 0,
    ticket: 0,
    ticket_executor: 0,
    ticket_customer: 0,
    user: 0,
    setting: 0,
  });
  const [attributes, setAttributes] = useState<any>({
    company: [],
    division: [],
    location: [],
    user_status: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data,
    isSuccess,
    isLoading,
    isError,
    message,
    messageUpdate,
    messageCreate,
  } = useSelector((state: any) => state.user);

  useEffect(() => {
    if (data !== "" && isSuccess && !isLoading) {
      setAttributes({
        company: data?.attributes?.company,
        division: data?.attributes?.division,
        location: data?.attributes?.location,
        user_status: data?.attributes?.user_status,
      });
      dispatch(resetUser());
    } else if (isError && message && !isLoading) {
      console.log("error get", message);
      dispatch(resetUser());
    }

    if (isSuccess && !isLoading && messageCreate !== "") {
      dispatch(resetUser());
      console.log("success", messageCreate);
      navigate(`/user`);
    } else if (isError && messageCreate !== "" && !isLoading) {
      console.log("error create", messageCreate);
      dispatch(resetUser());
    }
  }, [data, isSuccess, isLoading, isError, message, messageCreate]);

  useEffect(() => {
    dispatch(GetCreateAttribute());
  }, [dispatch]);

  const handleSubmitTicket = () => {
    dispatch(CreateUserData({ formData }));
  };

  const handleDiscard = () => {
    const back: string | any = searchParams.get("back");
    navigate(back);
  };

  return (
    <div>
      <div className="mt-6 flex justify-end gap-2">
        <Button
          variant="primary"
          type="button"
          size="sm"
          onClick={() => handleSubmitTicket()}
        >
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
        <CreateUserForm
          formData={formData}
          setFormData={setFormData}
          attributes={attributes}
        />
      </div>
    </div>
  );
};

export default CreateUserPage;
