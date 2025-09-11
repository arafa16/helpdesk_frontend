import React, { useEffect, useState } from "react";
import UserDataView from "../../components/DataView/UserDataView";
import {
  DeleteUserData,
  GetUserById,
  resetUser,
} from "../../stores/features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Button from "../../base-components/Button";

const ViewUserPage = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState<any>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data, isSuccess, isLoading, isError, message, messageDelete } =
    useSelector((state: any) => state.user);

  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      setDatas(data?.data);
      dispatch(resetUser());
    } else if (isError && message && !isLoading) {
      console.log(message);
      dispatch(resetUser());
    }

    if (isSuccess && !isLoading && messageDelete !== "") {
      dispatch(resetUser());
      console.log("success", messageDelete);
      navigate(`/user`);
    } else if (isError && messageDelete !== "" && !isLoading) {
      console.log("error delete", messageDelete);
      dispatch(resetUser());
    }
  }, [data, isSuccess, isError, message, messageDelete, isLoading]);

  useEffect(() => {
    if (id) {
      dispatch(GetUserById(id));
    }
  }, [id, dispatch]);

  const handleBack = () => {
    const link: string | any = searchParams.get("back") || -1;
    navigate(link);
  };

  const handleEdit = () => {
    const link_back: string | any = searchParams.get("back") || -1;
    const back_view = `back_view=/user/view/${id}&back=${link_back}`;
    navigate(`/user/edit/${id}?` + back_view);
  };

  const handleDelete = () => {
    if (id) {
      if (window.confirm("Are you sure want to delete this data?")) {
        dispatch(DeleteUserData({ uuid: id }));
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
        <UserDataView datas={datas} privilege_view={true} />
      </div>
    </div>
  );
};

export default ViewUserPage;
