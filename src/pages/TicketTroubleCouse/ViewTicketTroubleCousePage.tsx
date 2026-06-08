import React, { useEffect, useState } from "react";
import UserDataView from "../../components/DataView/UserDataView";
import {
  GetTicketTroubleCouseDataById,
  DeleteTicketTroubleCouseData,
  resetTicketTroubleCouse,
} from "../../stores/features/TicketTroubleCouseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Button from "../../base-components/Button";
import TemplateDataView1 from "../../components/DataView/TemplateDataView1";

const ViewTicketTroubleCousePage = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState<any>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data, isSuccess, isLoading, isError, message, messageDelete } =
    useSelector((state: any) => state.ticket_trouble_couse);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data?.data);
      dispatch(resetTicketTroubleCouse());
    } else if (isError && message && !isLoading) {
      console.log(message);
      dispatch(resetTicketTroubleCouse());
    }

    if (isSuccess && !isLoading && messageDelete !== "") {
      dispatch(resetTicketTroubleCouse());
      console.log("success", messageDelete);
      navigate(`/ticket_trouble_couse`);
    } else if (isError && messageDelete !== "" && !isLoading) {
      console.log("error delete", messageDelete);
      dispatch(resetTicketTroubleCouse());
    }
  }, [data, isSuccess, isError, message, messageDelete, isLoading]);

  useEffect(() => {
    if (id) {
      dispatch(GetTicketTroubleCouseDataById({ uuid: id }));
    }
  }, [id, dispatch]);

  const handleBack = () => {
    const link: string | any = searchParams.get("back") || -1;
    navigate(link);
  };

  const handleEdit = () => {
    const link_back: string | any = searchParams.get("back") || -1;
    const back_view = `back_view=/ticket_trouble_couse/view/${id}&back=${link_back}`;
    navigate(`/ticket_trouble_couse/edit/${id}?` + back_view);
  };

  const handleDelete = () => {
    if (id) {
      if (window.confirm("Are you sure want to delete this data?")) {
        dispatch(DeleteTicketTroubleCouseData({ uuid: id }));
      }
    }
  };

  return (
    <div>
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
        <TemplateDataView1 datas={datas} />
      </div>
    </div>
  );
};

export default ViewTicketTroubleCousePage;
