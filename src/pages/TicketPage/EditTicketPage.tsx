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
import { useEffect, useState, useRef } from "react";
import { NotificationElement } from "../../base-components/Notification";
import Notification from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";
import dayjs from "dayjs";

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
    trouble_category: "",
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
          rfo: data?.data?.ticket?.rfo,
          pic: data?.data?.ticket?.pic,
          first_executor_uuid: data?.data?.ticket?.first_executor?.uuid,
          second_executor_uuid: data?.data?.ticket?.second_executor?.uuid,
          third_executor_uuid: data?.data?.ticket?.third_executor?.uuid,
          fourth_executor_uuid: data?.data?.ticket?.fourth_executor?.uuid,
          pic_phone_number: data?.data?.ticket?.pic_phone_number,
          lat: data?.data?.ticket?.lat,
          lng: data?.data?.ticket?.lng,
          gmap: data?.data?.ticket?.gmap,
          complaint_time:
            data?.data?.ticket?.complaint_time &&
            dayjs(data?.data?.ticket?.complaint_time).format(
              "YYYY-MM-DD HH:mm:ss"
            ),
          eta: data?.data?.ticket?.eta,
          priority_level: data?.data?.ticket?.priority_level,
          ticket_trouble_category_uuid:
            data?.data?.ticket?.ticket_trouble_category?.uuid,
          solution: data?.data?.ticket?.solution,
          ticket_network_status_uuid:
            data?.data?.ticket?.ticket_network_status?.uuid,
          down_time:
            data?.data?.ticket?.down_time &&
            dayjs(data?.data?.ticket?.down_time).format("YYYY-MM-DD HH:mm:ss"),
          up_time:
            data?.data?.ticket?.up_time &&
            dayjs(data?.data?.ticket?.up_time).format("YYYY-MM-DD HH:mm:ss"),
          new_cable: data?.data?.ticket?.new_cable,
          external_pole: data?.data?.ticket?.external_pole,
          new_pole_setup: data?.data?.ticket?.new_pole_setup,
          open_cut: data?.data?.ticket?.open_cut,
          drilling: data?.data?.ticket?.drilling,
          new_closure: data?.data?.ticket?.new_closure,
          new_splitter: data?.data?.ticket?.new_splitter,
          fo_jointing: data?.data?.ticket?.fo_jointing,
          old_datek: data?.data?.ticket?.old_datek,
          new_datek: data?.data?.ticket?.new_datek,
          spk_number: data?.data?.ticket?.spk_number,
          justification: data?.data?.ticket?.justification,
          constraint: data?.data?.ticket?.constraint,
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

  const handleSubmitTicket = (e: any) => {
    e.preventDefault();
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
      <div className={`mt-4 ${isLoading ? "hidden" : ""}`}>
        <TicketStage
          datas={datas?.ticket_status}
          status={{ code: datas?.ticket?.ticket_status?.code }}
          clickStage={handleClickStage}
        />
      </div>
      <div className={`mt-4 ${isLoading ? "hidden" : ""}`}>
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

export default EditTicketPage;
