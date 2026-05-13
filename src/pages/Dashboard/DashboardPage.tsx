import UserDataView from "../../components/DataView/UserDataView";
import UserHeader from "../../components/DataView/UserHeader";
import { GetMe, resetGetMe } from "../../stores/features/GetMeSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingIcon from "../../base-components/LoadingIcon";

const DashboardPage = () => {
  const [datas, setDatas] = useState<any>(null);

  const dispatch = useDispatch();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.getMe,
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

  useEffect(() => {
    dispatch(GetMe());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center md:mt-32 mt-10">
          <LoadingIcon icon="bars" className="w-5" color="#02357d" />
        </div>
      ) : null}
      <div className={`${isLoading && "hidden"}`}>
        <div className="mt-6">
          <UserHeader datas={datas} />
        </div>
        <div className="mt-4">
          <UserDataView datas={datas} />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
