import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../base-components/Button";
import CreateTicketForm from "../../components/Form/CreateTicketForm";
import TicketStage from "../../components/Stage/TicketStage";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTicketUpdateDataAttribute,
  UpdateTicketData,
  resetTicket,
} from "../../stores/features/TicketSlice";
import { GetMe, resetGetMe } from "../../stores/features/GetMeSlice";
import { useEffect, useState, useRef } from "react";
import { NotificationElement } from "../../base-components/Notification";
import Notification from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";

const EditTicketPage = () => {
  const { id } = useParams();
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
    trouble_category: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get ticket attribute

  const { data, isError, isSuccess, isLoading, message, messageUpdate } =
    useSelector((state: any) => state.ticket);

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        setFormData({
          ...formData,
          subject: data?.data?.ticket?.subject,
          customer_uuid: data?.data?.ticket?.customer?.uuid,
          user_uuid: data?.data?.ticket?.user?.uuid,
          area_uuid: data?.data?.ticket?.area?.uuid,
          case_number: data?.data?.ticket?.case_number,
          network_number: data?.data?.ticket?.network_number,
          ticket_access_uuid: data?.data?.ticket?.ticket_access?.uuid,
          ticket_category_uuid: data?.data?.ticket?.ticket_category?.uuid,
          address: data?.data?.ticket?.address,
          description: data?.data?.ticket?.description,
          pic: data?.data?.ticket?.pic,
          executor_uuid: data?.data?.ticket?.executor?.uuid,
          pic_phone_number: data?.data?.ticket?.pic_phone_number,
          lat: data?.data?.ticket?.lat,
          lng: data?.data?.ticket?.lng,
          gmap: data?.data?.ticket?.gmap,
          eta: data?.data?.ticket?.eta,
          priority_level: data?.data?.ticket?.priority_level,
          ticket_trouble_category_uuid:
            data?.data?.ticket?.ticket_trouble_category?.uuid,
          trouble_description: data?.data?.ticket?.trouble_description,
        });
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
    if (messageUpdate && isSuccess) {
      if (!isLoading) {
        const link_back: string | any = searchParams.get("back");
        const back_view: string | any = searchParams.get("back_view");
        dispatch(resetTicket());
        navigate(`${back_view}?back=${link_back}`);
      }
    }
    if (messageUpdate && isError) {
      if (!isLoading) {
        console.log("error", messageUpdate);
        dispatch(resetTicket());
      }
    }
  }, [data, isError, isSuccess, isLoading, message, messageUpdate]);

  useEffect(() => {
    dispatch(GetTicketUpdateDataAttribute(id));
  }, [dispatch, id]);

  const handleSubmitTicket = () => {
    dispatch(UpdateTicketData({ uuid: id, formData }));
  };

  const handleDiscard = () => {
    const link: string | any = searchParams.get("back_view") || -1;
    const back: string | any = searchParams.get("back");
    navigate(link + `?back=${back}`);
  };

  const handleClickStage = () => {
    permissionNotificationToggle();
  };

  // permissionNotification
  const permissionNotification = useRef<NotificationElement>();
  const permissionNotificationToggle = () => {
    permissionNotification.current?.showToast();
  };

  return (
    <>
      <Notification
        getRef={(el) => {
          permissionNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex"
      >
        <Lucide icon="CheckCircle" className="text-danger" />
        <div className="ml-4 mr-4">
          <div className="font-medium">Cannot change ticket status</div>
        </div>
      </Notification>
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
      <div className={`mt-4 ${isLoading ? "hidden" : ""}`}>
        <TicketStage
          datas={datas?.ticket_status}
          status={{ code: datas?.ticket?.ticket_status?.code }}
          clickStage={handleClickStage}
        />
      </div>
      <div className={`mt-4 ${isLoading ? "hidden" : ""}`}>
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

export default EditTicketPage;
