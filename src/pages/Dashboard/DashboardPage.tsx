import UserDataView from "../../components/DataView/UserDataView";
import UserHeader from "../../components/DataView/UserHeader";
import { GetMe, resetGetMe } from "../../stores/features/GetMeSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DashboardPage = () => {
  const [datas, setDatas] = useState<any>(null);

  const dispatch = useDispatch();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.getMe
  );

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data?.data?.user);
      console.log(data?.data?.user, "datas");
      dispatch(resetGetMe());
    } else if (message !== "" && isError && !isLoading) {
      console.log(message, "message");
      dispatch(resetGetMe());
    }
  }, [data, isLoading, isError, isSuccess, message]);

  console.log(datas, "datas");

  useEffect(() => {
    dispatch(GetMe());
  }, [dispatch]);

  return (
    <div>
      <div className="mt-6">
        <UserHeader datas={datas} />
      </div>
      <div className="mt-4">
        <UserDataView datas={datas} />
      </div>
    </div>
  );
};

export default DashboardPage;
