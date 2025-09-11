import { useNavigate } from "react-router-dom";
import Button from "../../base-components/Button";
import CreateTicketForm from "../../components/Form/CreateTicketForm";
import TicketStage from "../../components/Stage/TicketStage";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTicketDataAttribute,
  CreateTicketData,
  resetTicket,
} from "../../stores/features/TicketSlice";
import { GetMe, resetGetMe } from "../../stores/features/GetMeSlice";
import { useEffect, useState } from "react";

const CreateTicketPage = () => {
  const [datas, setDatas] = useState<any>(null);
  let [formData, setFormData] = useState<any>({
    subject: "",
    customer_uuid: "",
    user_uuid: "",
    area_uuid: "",
    case_number: "",
    network_number: "",
    ticket_access_uuid: "",
    ticket_category_uuid: "",
    address: "",
    description: "",
    pic: "",
    executor_uuid: "",
    pic_phone_number: "",
    lat: "",
    lng: "",
    gmap: "",
    eta: "",
    priority_level: "",
    ticket_trouble_category_uuid: "",
    trouble_description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get ticket attribute

  const { data, isError, isSuccess, isLoading, message } = useSelector(
    (state: any) => state.ticket
  );

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        setDatas(data?.data);
        dispatch(resetTicket());
      }
    }
    if (message && isError) {
      if (!isLoading) {
        console.log(message);
        dispatch(resetTicket());
      }
    }
  }, [data, isError, isSuccess, isLoading, message]);

  useEffect(() => {
    if (message && isSuccess) {
      if (!isLoading) {
        const uuid = message?.data?.ticket?.uuid;
        dispatch(resetTicket());
        navigate(`/ticket/view/${uuid}`);
      }
    }
    if (message && isError) {
      if (!isLoading) {
        console.log("error", message);
        dispatch(resetTicket());
      }
    }
  }, [data, isError, isSuccess, isLoading, message]);

  useEffect(() => {
    dispatch(GetTicketDataAttribute());
  }, [dispatch]);

  //get me

  const {
    data: dataMe,
    isError: isErrorMe,
    isSuccess: isSuccessMe,
    isLoading: isLoadingMe,
    message: messageMe,
  } = useSelector((state: any) => state.getMe);

  useEffect(() => {
    if (dataMe && isSuccessMe) {
      if (!isLoadingMe) {
        setFormData({ ...formData, user_uuid: dataMe?.data?.user?.uuid });
        dispatch(resetGetMe());
      }
    }
    if (messageMe && isErrorMe) {
      if (!isLoadingMe) {
        console.log("get error");
        dispatch(resetGetMe());
      }
    }
  }, [dataMe, isErrorMe, isSuccessMe, isLoadingMe, messageMe]);

  useEffect(() => {
    dispatch(GetMe());
  }, [dispatch]);

  const handleSubmitTicket = () => {
    dispatch(CreateTicketData(formData));
  };

  const handleDiscard = () => {
    navigate(-1);
  };

  return (
    <>
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
        <TicketStage
          datas={datas?.ticket_status}
          status={{ code: "1" }}
          click={console.log}
        />
      </div>
      <div className="mt-4">
        <CreateTicketForm
          formData={formData}
          setFormData={setFormData}
          area={datas?.area}
          ticket_category={datas?.ticket_category}
          ticket_trouble_category={datas?.ticket_trouble_category}
          ticket_access={datas?.ticket_access}
          executor={datas?.executor}
          customer={datas?.customer}
          users={datas?.user_customer}
        />
      </div>
    </>
  );
};

export default CreateTicketPage;
