import React, { useEffect, useState } from "react";
import UserDataView from "../../components/DataView/UserDataView";
import {
  GetCompanyDataById,
  DeleteCompanyData,
  resetCompany,
} from "../../stores/features/CompanySlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Button from "../../base-components/Button";
import CompanyDataView from "../../components/DataView/CompanyDataView";

const ViewCompanyPage = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState<any>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data, isSuccess, isLoading, isError, message, messageDelete } =
    useSelector((state: any) => state.company);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data?.data);
      dispatch(resetCompany());
    } else if (isError && message && !isLoading) {
      console.log(message);
      dispatch(resetCompany());
    }

    if (isSuccess && !isLoading && messageDelete !== "") {
      dispatch(resetCompany());
      console.log("success", messageDelete);
      navigate(`/company`);
    } else if (isError && messageDelete !== "" && !isLoading) {
      console.log("error delete", messageDelete);
      dispatch(resetCompany());
    }
  }, [data, isSuccess, isError, message, messageDelete, isLoading]);

  useEffect(() => {
    if (id) {
      dispatch(GetCompanyDataById({ uuid: id }));
    }
  }, [id, dispatch]);

  const handleBack = () => {
    const link: string | any = searchParams.get("back") || -1;
    navigate(link);
  };

  const handleEdit = () => {
    const link_back: string | any = searchParams.get("back") || -1;
    const back_view = `back_view=/company/view/${id}&back=${link_back}`;
    navigate(`/company/edit/${id}?` + back_view);
  };

  const handleDelete = () => {
    if (id) {
      if (window.confirm("Are you sure want to delete this data?")) {
        dispatch(DeleteCompanyData({ uuid: id }));
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
        <CompanyDataView datas={datas} />
      </div>
    </div>
  );
};

export default ViewCompanyPage;
