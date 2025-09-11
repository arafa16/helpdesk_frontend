import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fileDownload from "js-file-download";
import Button from "../../base-components/Button";
import {
  GetTicketDataById,
  UpdateTicketStatusDataById,
  DeleteTicketData,
  resetTicket,
} from "../../stores/features/TicketSlice";

import TicketDataView from "../../components/DataView/TicketDataView";
import TicketStage from "../../components/Stage/TicketStage";
import AttachmentTable from "../../components/Table/AttachmentTable";
import TicketActivityTable from "../../components/Table/TicketActivityTable";
import UserReminderTable from "../../components/Table/UserReminderTable";
import HistoryView from "../../components/DataView/HistoryView";

import TicketAttachmentSlideOver from "../../components/SlideOver/TicketAttachmentSlideOver";
import TicketActivityAttachmentSlideOver from "../../components/SlideOver/TicketActivityAttachmentSlideOver";
import TicketActivitySlideOver from "../../components/SlideOver/TicketActivitySlideOver";
import {
  CreateTicketAttachment,
  DeleteTicketAttachment,
  resetTicketAttachment,
} from "../../stores/features/TicketAttachmentSlice";
import {
  CreateTicketActivityAttachment,
  DeleteTicketActivityAttachment,
  resetTicketActivityAttachment,
} from "../../stores/features/TicketActivityAttachmentSlice";
import {
  DeleteTicketActivityDataById,
  UpdateTicketActivityData,
  resetTicketActivity,
} from "../../stores/features/TicketActivitiesSlice";
import {
  CreateTicketActivityCommentData,
  DeleteTicketActivityCommentDataById,
  resetTicketActivityComment,
} from "../../stores/features/TicketActivityCommentSlice";
import {
  CreateTicketUserReminderData,
  DeleteTicketUserReminderDataById,
  resetTicketUserReminder,
} from "../../stores/features/TicketUserReminderSlice";
import Notification from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";
import { NotificationElement } from "../../base-components/Notification";
import dayjs from "dayjs";
import axios from "axios";
import TicketActivityCommentSlideOver from "../../components/SlideOver/TicketActivityCommentSlideOver";
import TicketUserReminderSlideOver from "../../components/SlideOver/TicketUserReminderSlideOver";

import Toastify from "toastify-js";

function NewNotification(message: any) {
  Toastify({
    text: `${message}`,
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    style: {
      background: "#fff",
      color: "#3d4044", // slate-500
      fontSize: "12px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(34,197,94,0.10)",
      padding: "20px 64px 20px 20px",
      border: "1px solid #e5e7eb",
    },
  }).showToast();
}

const ViewTicketPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [datas, setDatas] = useState<any>(null);
  const [formTicketAttachment, setFormTicketAttachment] = useState<any>({
    file: [],
    file_url: "",
    description: "",
  });
  const [formTicketActivity, setFormTicketActivity] = useState<any>({
    uuid: "",
    ticket_status_uuid: "",
    description: "",
    reminder: 0,
    schedule_reminder: dayjs().format("YYYY-MM-DD HH:mm"),
  });
  const [formTicketActivityComment, setFormTicketActivityComment] =
    useState<any>({
      ticket_activity_uuid: "",
      description: "",
    });
  const [formTicketUserReminder, setFormTicketUserReminder] = useState<any>({
    user_uuid: "",
    ticket_uuid: "",
  });
  const [formTicketActivityAttachment, setFormTicketActivityAttachment] =
    useState<any>({
      file: [],
      file_url: "",
      uuid: "",
    });
  const [showTicketAttachmentSlideOver, setShowTicketAttachmentSlideOver] =
    useState(false);
  const [showTicketActivitySlideOver, setShowTicketActivitySlideOver] =
    useState(false);
  const [
    showTicketActivityCommentSlideOver,
    setShowTicketActivityCommentSlideOver,
  ] = useState(false);
  const [
    showTicketActivityAttachmentSlideOver,
    setShowTicketActivityAttachmentSlideOver,
  ] = useState(false);
  const [showTicketUserReminderSlideOver, setShowTicketUserReminderSlideOver] =
    useState(false);

  const [messageNotification, setMessageNotification] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //ticket view
  const {
    data,
    isError,
    isSuccess,
    isLoading,
    message,
    messageUpdate,
    messageDelete,
  } = useSelector((state: any) => state.ticket);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data?.data);
      dispatch(resetTicket());
    } else if (message !== "" && isError && !isLoading) {
      NewNotification(messageUpdate.message);
      dispatch(resetTicket());
    }

    if (messageUpdate !== "" && isSuccess && !isLoading) {
      NewNotification(messageUpdate.message);
      dispatch(GetTicketDataById(id));
      dispatch(resetTicket());
    } else if (messageUpdate !== "" && isError && !isLoading) {
      NewNotification(messageUpdate.message);
      dispatch(resetTicket());
    }

    if (messageDelete !== "" && isSuccess && !isLoading) {
      dispatch(resetTicket());
      const link: string | any = searchParams.get("back") || -1;
      navigate(link);
    } else if (messageDelete !== "" && isError && !isLoading) {
      NewNotification(messageDelete.message);
      dispatch(resetTicket());
    }
  }, [
    data,
    isError,
    isSuccess,
    isLoading,
    message,
    messageUpdate,
    messageDelete,
    dispatch,
    id,
  ]);

  useEffect(() => {
    dispatch(GetTicketDataById(id));
  }, [dispatch, id]);

  const handleChangeTicketStatus = (ticket_status_uuid: string) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      if (ticket_status_uuid !== datas?.ticket?.ticket_status?.uuid) {
        dispatch(UpdateTicketStatusDataById({ uuid: id, ticket_status_uuid }));
      }
    } else {
      NewNotification("You don't have permission");
    }
  };

  //attachment ticket
  const {
    data: dataTicketAttachment,
    isError: isErrorTicketAttachment,
    isSuccess: isSuccessTicketAttachment,
    isLoading: isLoadingTicketAttachment,
    message: messageTicketAttachment,
    message2: message2TicketAttachment,
  } = useSelector((state: any) => state.ticketAttachment);

  const handleTicketAttachmentShowSlideOver = () => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      setShowTicketAttachmentSlideOver(true);
    } else {
      NewNotification("You don't have permission");
    }
  };

  useEffect(() => {
    if (
      messageTicketAttachment !== "" &&
      isSuccessTicketAttachment &&
      !isLoadingTicketAttachment
    ) {
      NewNotification(messageTicketAttachment?.message);
      handleCancelTicketAttachment();
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketAttachment());
    } else if (
      messageTicketAttachment !== "" &&
      isErrorTicketAttachment &&
      !isLoadingTicketAttachment
    ) {
      NewNotification(messageTicketAttachment?.message);
      dispatch(resetTicketAttachment());
    }

    if (
      message2TicketAttachment !== "" &&
      isSuccessTicketAttachment &&
      !isLoadingTicketAttachment
    ) {
      NewNotification(message2TicketAttachment?.message);
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketAttachment());
    } else if (
      message2TicketAttachment !== "" &&
      isErrorTicketAttachment &&
      !isLoadingTicketAttachment
    ) {
      NewNotification(message2TicketAttachment?.message);
      dispatch(resetTicketAttachment());
    }
  }, [
    dataTicketAttachment,
    isErrorTicketAttachment,
    isSuccessTicketAttachment,
    isLoadingTicketAttachment,
    messageTicketAttachment,
    message2TicketAttachment,
  ]);

  const handleSubmitTicketAttachment = (e: any) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", formTicketAttachment.file);
    formData.append("description", formTicketAttachment.description);

    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(CreateTicketAttachment({ formData, ticket_uuid: id }));
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleCancelTicketAttachment = () => {
    setShowTicketAttachmentSlideOver(false);
    setFormTicketAttachment({ file: [], description: "" });
  };

  const handleDeleteTicketAttachment = (uuid: string) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(DeleteTicketAttachment({ uuid }));
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleViewTicketAttachment = (data: any) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL + data.file_url;
    const file_name = data.name;

    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, file_name);
      });
  };

  const handleBack = () => {
    const link: string | any = searchParams.get("back") || -1;
    navigate(link);
  };

  const handleEdit = () => {
    const link_back: string | any = searchParams.get("back") || -1;
    const back_view = `back_view=/ticket/view/${id}&back=${link_back}`;
    navigate(`/ticket/edit/${id}?` + back_view);
  };

  const handleDelete = () => {
    if (id) {
      if (window.confirm("Are you sure want to delete this data?")) {
        dispatch(DeleteTicketData({ uuid: id }));
      }
    }
  };

  //ticket activity
  const {
    data: dataTicketActivity,
    isError: isErrorTicketActivity,
    isSuccess: isSuccessTicketActivity,
    isLoading: isLoadingTicketActivity,
    message: messageTicketActivity,
    messageUpdate: messageUpdateTicketActivity,
  } = useSelector((state: any) => state.ticketActivity);

  useEffect(() => {
    if (
      messageTicketActivity !== "" &&
      isSuccessTicketActivity &&
      !isLoadingTicketActivity
    ) {
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketActivity());
    } else if (
      messageTicketActivity !== "" &&
      isErrorTicketActivity &&
      !isLoadingTicketActivity
    ) {
      NewNotification(messageTicketActivity.message);
      dispatch(resetTicketActivity());
    }

    if (
      messageTicketActivity !== "" &&
      isSuccessTicketActivity &&
      !isLoadingTicketActivity
    ) {
      NewNotification(messageTicketActivity.message);
      dispatch(GetTicketDataById(id));
      setShowTicketActivitySlideOver(false);
      dispatch(resetTicketActivity());
    } else if (
      messageUpdateTicketActivity !== "" &&
      isErrorTicketActivity &&
      !isLoadingTicketActivity
    ) {
      setShowTicketActivitySlideOver(false);
      dispatch(resetTicketActivity());
    }
  }, [
    dataTicketActivity,
    isErrorTicketActivity,
    isSuccessTicketActivity,
    isLoadingTicketActivity,
    messageTicketActivity,
    messageUpdateTicketActivity,
  ]);

  const handleDeleteTicketActivity = (uuid: string) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(DeleteTicketActivityDataById(uuid));
    } else {
      NewNotification("You don't have permission");
    }
  };

  // edit ticket activity
  const handleTicketActivityShowSlideOver = (data: any) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      setFormTicketActivity({
        ...formTicketActivity,
        uuid: data.uuid,
        ticket_status_uuid: data.ticket_status.uuid,
        description: data.description,
        reminder: data.reminder ? 1 : 0,
        schedule_reminder: data.schedule_reminder,
      });
      setShowTicketActivitySlideOver(true);
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleTicketActivityCancelSlideOver = () => {
    setShowTicketActivitySlideOver(false);
    setFormTicketActivity({
      uuid: "",
      ticket_status_uuid: "",
      description: "",
      reminder: 0,
      schedule_reminder: dayjs().format("YYYY-MM-DD HH:mm"),
    });
  };
  const handleSubmitUpdateTicketActivity = (e: any) => {
    e.preventDefault();

    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(
        UpdateTicketActivityData({
          formData: formTicketActivity,
          uuid: formTicketActivity.uuid,
        })
      );
    } else {
      NewNotification("You don't have permission");
    }
  };

  //attachment ticket
  const {
    data: dataTicketActivityAttachment,
    isError: isErrorTicketActivityAttachment,
    isSuccess: isSuccessTicketActivityAttachment,
    isLoading: isLoadingTicketActivityAttachment,
    message: messageTicketActivityAttachment,
    message2: message2TicketActivityAttachment,
  } = useSelector((state: any) => state.ticketActivityAttachment);

  useEffect(() => {
    if (
      messageTicketActivityAttachment !== "" &&
      isSuccessTicketActivityAttachment &&
      !isLoadingTicketActivityAttachment
    ) {
      NewNotification(messageTicketActivityAttachment.message);
      handleCancelTicketActivityAttachment();
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketActivityAttachment());
    } else if (
      messageTicketActivityAttachment !== "" &&
      isErrorTicketActivityAttachment &&
      !isLoadingTicketActivityAttachment
    ) {
      NewNotification(messageTicketActivityAttachment.message);
      dispatch(resetTicketActivityAttachment());
    }
    if (
      message2TicketActivityAttachment !== "" &&
      isSuccessTicketActivityAttachment &&
      !isLoadingTicketActivityAttachment
    ) {
      NewNotification(message2TicketActivityAttachment.message);
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketActivityAttachment());
    } else if (
      message2TicketActivityAttachment !== "" &&
      isErrorTicketActivityAttachment &&
      !isLoadingTicketActivityAttachment
    ) {
      NewNotification(message2TicketActivityAttachment.message);
      dispatch(resetTicketActivityAttachment());
    }
  }, [
    dataTicketActivityAttachment,
    isErrorTicketActivityAttachment,
    isSuccessTicketActivityAttachment,
    isLoadingTicketActivityAttachment,
    messageTicketActivityAttachment,
    message2TicketActivityAttachment,
  ]);

  const handleTicketActivityAttachmentShowSlideOver = (uuid: string) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      setFormTicketActivityAttachment({
        ...formTicketActivityAttachment,
        uuid: uuid,
      });
      setShowTicketActivityAttachmentSlideOver(true);
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleSubmitTicketActivityAttachment = (e: any) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", formTicketActivityAttachment.file);

    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(
        CreateTicketActivityAttachment({
          formData,
          uuid: formTicketActivityAttachment.uuid,
        })
      );
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleCancelTicketActivityAttachment = () => {
    setShowTicketActivityAttachmentSlideOver(false);
    setFormTicketActivityAttachment({ file: [], uuid: "" });
  };

  const handleDeleteTicketActivityAttachment = (uuid: string) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(DeleteTicketActivityAttachment({ uuid }));
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleViewTicketActivityAttachment = (data: any) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL + data.file_url;
    const file_name = data.name;

    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, file_name);
      });
  };

  //ticket activity comment
  const {
    data: dataTicketActivityComment,
    isError: isErrorTicketActivityComment,
    isSuccess: isSuccessTicketActivityComment,
    isLoading: isLoadingTicketActivityComment,
    message: messageTicketActivityComment,
    messageDelete: messageDeleteTicketActivityComment,
  } = useSelector((state: any) => state.ticketActivityComment);

  useEffect(() => {
    if (
      messageTicketActivityComment !== "" &&
      isSuccessTicketActivityComment &&
      !isLoadingTicketActivityComment
    ) {
      NewNotification(messageTicketActivityComment.message);
      handleCancelTicketActivityComment();
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketActivityComment());
    } else if (
      messageTicketActivityComment !== "" &&
      isErrorTicketActivityComment &&
      !isLoadingTicketActivityComment
    ) {
      NewNotification(messageTicketActivityComment.message);
      dispatch(resetTicketActivityComment());
    }

    if (
      messageDeleteTicketActivityComment !== "" &&
      isSuccessTicketActivityComment &&
      !isLoadingTicketActivityComment
    ) {
      NewNotification(messageDeleteTicketActivityComment.message);
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketActivityComment());
    } else if (
      messageDeleteTicketActivityComment !== "" &&
      isErrorTicketActivityComment &&
      !isLoadingTicketActivityComment
    ) {
      NewNotification(messageDeleteTicketActivityComment.message);
      dispatch(resetTicketActivityComment());
    }
  }, [
    dataTicketActivityComment,
    isErrorTicketActivityComment,
    isSuccessTicketActivityComment,
    isLoadingTicketActivityComment,
    messageTicketActivityComment,
    messageDeleteTicketActivityComment,
  ]);

  const handleSubmitTicketActivityComment = (e: any) => {
    e.preventDefault();

    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(
        CreateTicketActivityCommentData({ formData: formTicketActivityComment })
      );
      setShowTicketActivityCommentSlideOver(false);
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleCancelTicketActivityComment = () => {
    setFormTicketActivityComment({ ticket_activity_uuid: "", description: "" });
    setShowTicketActivityCommentSlideOver(false);
  };

  const handleTicketActivityCommentShowSlideOver = (data: any) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      setFormTicketActivityComment({
        ...formTicketActivityComment,
        ticket_activity_uuid: data.uuid,
      });
      setShowTicketActivityCommentSlideOver(true);
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleDeleteTicketActivityComment = (data: any) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(DeleteTicketActivityCommentDataById(data.uuid));
    } else {
      NewNotification("You don't have permission");
    }
  };

  //ticket user reminder
  const {
    data: dataTicketUserReminder,
    isError: isErrorTicketUserReminder,
    isSuccess: isSuccessTicketUserReminder,
    isLoading: isLoadingTicketUserReminder,
    message: messageTicketUserReminder,
    messageDelete: messageDeleteTicketUserReminder,
  } = useSelector((state: any) => state.ticketUserReminder);

  useEffect(() => {
    if (
      messageTicketUserReminder !== "" &&
      isSuccessTicketUserReminder &&
      !isLoadingTicketUserReminder
    ) {
      NewNotification(messageTicketUserReminder.message);
      handleCancelTicketUserReminder();
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketUserReminder());
    } else if (
      messageTicketUserReminder !== "" &&
      isErrorTicketUserReminder &&
      !isLoadingTicketUserReminder
    ) {
      NewNotification(messageTicketUserReminder.message);
      dispatch(resetTicketUserReminder());
    }

    if (
      messageDeleteTicketUserReminder !== "" &&
      isSuccessTicketUserReminder &&
      !isLoadingTicketUserReminder
    ) {
      NewNotification(messageDeleteTicketUserReminder.message);
      dispatch(GetTicketDataById(id));
      dispatch(resetTicketUserReminder());
    } else if (
      messageDeleteTicketUserReminder !== "" &&
      isErrorTicketUserReminder &&
      !isLoadingTicketUserReminder
    ) {
      NewNotification(messageDeleteTicketUserReminder.message);
      dispatch(resetTicketUserReminder());
    }
  }, [
    dataTicketUserReminder,
    isErrorTicketUserReminder,
    isSuccessTicketUserReminder,
    isLoadingTicketUserReminder,
    messageTicketUserReminder,
    messageDeleteTicketUserReminder,
  ]);

  const handleTicketUserReminderShowSlideOver = () => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      setFormTicketUserReminder({ ...formTicketUserReminder, ticket_uuid: id });
      setShowTicketUserReminderSlideOver(true);
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleSubmitTicketUserReminder = (e: any) => {
    e.preventDefault();
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(
        CreateTicketUserReminderData({ formData: formTicketUserReminder })
      );
    } else {
      NewNotification("You don't have permission");
    }
  };

  const handleCancelTicketUserReminder = () => {
    setFormTicketUserReminder({ user_uuid: "", ticket_uuid: "" });
    setShowTicketUserReminderSlideOver(false);
  };

  const handleDeleteTicketUserReminder = (uuid: string) => {
    if (
      datas?.user?.privilege?.ticket === true ||
      datas?.user?.privilege?.ticket_executor === true
    ) {
      dispatch(DeleteTicketUserReminderDataById(uuid));
    } else {
      NewNotification("You don't have permission");
    }
  };

  return (
    <div className="mb-24">
      <div className="mt-6 flex justify-end md:justify-between gap-4">
        <Button
          variant="primary"
          type="button"
          size="sm"
          onClick={() => handleBack()}
        >
          Back
        </Button>
        <div className="flex gap-4">
          <Button
            variant="outline-primary"
            type="button"
            size="sm"
            onClick={() => handleEdit()}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            type="button"
            size="sm"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <TicketStage
          datas={datas?.ticket_status}
          status={datas?.ticket?.ticket_status}
          clickStage={handleChangeTicketStatus}
        />
      </div>
      <div className="mt-4">
        <TicketDataView datas={datas?.ticket} />
      </div>
      <div>
        <AttachmentTable
          datas={datas?.ticket?.ticket_attachments}
          handleShowSlideOver={handleTicketAttachmentShowSlideOver}
          handleDelete={handleDeleteTicketAttachment}
          handleView={handleViewTicketAttachment}
        />
        <TicketAttachmentSlideOver
          show={showTicketAttachmentSlideOver}
          setShow={setShowTicketAttachmentSlideOver}
          formData={formTicketAttachment}
          setFormData={setFormTicketAttachment}
          handleSubmit={handleSubmitTicketAttachment}
          handleCancel={handleCancelTicketAttachment}
        />
      </div>
      <div>
        <TicketActivityTable
          datas={datas?.ticket?.ticket_activities}
          handleDelete={handleDeleteTicketActivity}
          handleShowEdit={handleTicketActivityShowSlideOver}
          handleShowAttachment={handleTicketActivityAttachmentShowSlideOver}
          handleDeleteAttachment={handleDeleteTicketActivityAttachment}
          handleViewAttachment={handleViewTicketActivityAttachment}
          handleViewComment={handleTicketActivityCommentShowSlideOver}
          handleDeleteComment={handleDeleteTicketActivityComment}
        />
        <TicketActivitySlideOver
          show={showTicketActivitySlideOver}
          setShow={setShowTicketActivitySlideOver}
          formData={formTicketActivity}
          setFormData={setFormTicketActivity}
          ticket_status={datas?.ticket_status}
          handleSubmit={handleSubmitUpdateTicketActivity}
          handleCancel={handleTicketActivityCancelSlideOver}
        />
        <TicketActivityAttachmentSlideOver
          show={showTicketActivityAttachmentSlideOver}
          setShow={setShowTicketActivityAttachmentSlideOver}
          formData={formTicketActivityAttachment}
          setFormData={setFormTicketActivityAttachment}
          handleSubmit={handleSubmitTicketActivityAttachment}
          handleCancel={handleCancelTicketActivityAttachment}
        />
        <TicketActivityCommentSlideOver
          show={showTicketActivityCommentSlideOver}
          setShow={setShowTicketActivityCommentSlideOver}
          formData={formTicketActivityComment}
          setFormData={setFormTicketActivityComment}
          handleSubmit={handleSubmitTicketActivityComment}
          handleCancel={handleCancelTicketActivityComment}
        />
      </div>
      <div>
        <UserReminderTable
          datas={datas?.ticket?.ticket_user_reminders}
          handleShowCreateSlideOver={handleTicketUserReminderShowSlideOver}
          handleDelete={handleDeleteTicketUserReminder}
        />
        <TicketUserReminderSlideOver
          show={showTicketUserReminderSlideOver}
          setShow={setShowTicketUserReminderSlideOver}
          formData={formTicketUserReminder}
          users={datas?.users}
          setFormData={setFormTicketUserReminder}
          handleSubmit={handleSubmitTicketUserReminder}
          handleCancel={handleCancelTicketUserReminder}
        />
      </div>
      <div className="mt-4 mb-4">
        <HistoryView history={datas?.ticket?.ticket_histories} />
      </div>
    </div>
  );
};

export default ViewTicketPage;
