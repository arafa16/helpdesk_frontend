import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../base-components/Button";
import CreateTicketForm from "../../components/Form/CreateTicketForm";
import TicketStage from "../../components/Stage/TicketStage";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTicketDataAttribute,
  CreateTicketData,
  resetTicket,
} from "../../stores/features/TicketSlice";
import { useEffect, useState } from "react";

const CreateTicketPage = () => {
  const [searchParams] = useSearchParams();
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
    rfo: "",
    pic: "",
    first_executor_uuid: "",
    second_executor_uuid: "",
    third_executor_uuid: "",
    fourth_executor_uuid: "",
    pic_phone_number: "",
    lat: "",
    lng: "",
    gmap: "",
    complaint_time: null,
    eta: 0,
    priority_level: "",
    ticket_trouble_category_uuid: "",
    solution: "",
    ticket_network_status_uuid: "",
    down_time: null,
    up_time: null,
    new_cable: 0,
    external_pole: 0,
    new_pole_setup: 0,
    open_cut: 0,
    drilling: 0,
    new_closure: 0,
    new_splitter: 0,
    fo_jointing: 0,
    old_datek: "",
    new_datek: "",
    spk_number: "",
    justification: "",
    constraint: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get ticket attribute

  const { data, isError, isSuccess, isLoading, message } = useSelector(
    (state: any) => state.ticket
  );

  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      setDatas(data?.data);
      dispatch(resetTicket());
    }
    if (message !== "" && isError && !isLoading) {
      if (!isLoading) {
        console.log(message);
        dispatch(resetTicket());
      }
    }
  }, [data, isError, isSuccess, isLoading, message]);

  useEffect(() => {
    if (message !== "" && isSuccess && !isLoading) {
      const link_back: string | any = searchParams.get("back");
      const uuid = message?.data?.ticket?.uuid;
      dispatch(resetTicket());
      navigate(`/ticket/view/${uuid}?back=${link_back}`);
    }
    if (message !== "" && isError && !isLoading) {
      console.log("error", message);
      dispatch(resetTicket());
    }
  }, [data, isError, isSuccess, isLoading, message]);

  useEffect(() => {
    dispatch(GetTicketDataAttribute());
  }, [dispatch]);

  const handleSubmitTicket = (e: any) => {
    e.preventDefault();
    dispatch(CreateTicketData(formData));
  };

  const handleDiscard = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="mt-6 flex justify-end gap-2">
        <Button form="form_ticket" variant="primary" type="submit" size="sm">
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
          submit={handleSubmitTicket}
          formData={formData}
          setFormData={setFormData}
          area={datas?.area}
          ticket_category={datas?.ticket_category}
          ticket_trouble_category={datas?.ticket_trouble_category}
          ticket_access={datas?.ticket_access}
          ticket_network_status={datas?.ticket_network_status}
          executor={datas?.executor}
          customer={datas?.customer}
          users={datas?.user_customer}
        />
      </div>
    </>
  );
};

export default CreateTicketPage;
