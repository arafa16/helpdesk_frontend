import { useState, useEffect } from "react";
import CreateUserForm from "../../components/Form/CreateUserForm";
import Button from "../../base-components/Button";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUpdateAttributeById,
  UpdateUserData,
  resetUser,
} from "../../stores/features/UserSlice";

const EditUserPage = () => {
  const { id } = useParams();

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
    //privilege
    dashboard: "",
    ticket: "",
    ticket_executor: "",
    ticket_customer: "",
    user: "",
    setting: "",
  });
  const [attributes, setAttributes] = useState<any>({
    company: [],
    division: [],
    location: [],
    user_status: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading, isError, message, messageUpdate } =
    useSelector((state: any) => state.user);

  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      setFormData({
        ...formData,
        name: data?.data?.name,
        email: data?.data?.email,
        nip: data?.data?.nip,
        phone_number: data?.data?.phone_number,
        company_uuid: data?.data?.company?.uuid,
        division_uuid: data?.data?.division?.uuid,
        location_uuid: data?.data?.location?.uuid,
        user_status_uuid: data?.data?.user_status?.uuid,
        dashboard: data?.data?.privilege?.dashboard ? 1 : 0,
        ticket: data?.data?.privilege?.ticket ? 1 : 0,
        ticket_executor: data?.data?.privilege?.ticket_executor ? 1 : 0,
        ticket_customer: data?.data?.privilege?.ticket_customer ? 1 : 0,
        user: data?.data?.privilege?.user ? 1 : 0,
        setting: data?.data?.privilege?.setting ? 1 : 0,
      });
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

    if (isSuccess && !isLoading && messageUpdate) {
      dispatch(resetUser());
      console.log("success", messageUpdate);
      navigate(`/user/view/${id}?back=/user&updated=true`);
    } else if (isError && messageUpdate && !isLoading) {
      console.log("error update", messageUpdate);
      dispatch(resetUser());
    }
    dispatch(resetUser());
  }, [data, isSuccess, isLoading, isError, message, messageUpdate]);

  useEffect(() => {
    if (id) {
      dispatch(GetUpdateAttributeById(id));
    }
  }, [id, dispatch]);

  const handleSubmitTicket = () => {
    dispatch(UpdateUserData({ uuid: id, formData }));
  };

  const handleDiscard = () => {
    const link: string | any = searchParams.get("back_view") || -1;
    const back: string | any = searchParams.get("back");
    navigate(link + `?back=${back}`);
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

export default EditUserPage;
