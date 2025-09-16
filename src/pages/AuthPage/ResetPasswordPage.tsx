import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTokenData,
  ResetPassword,
  resetAuth,
} from "../../stores/features/AuthSlice";

import logoWhite from "../../assets/images/logo/logo_kopkarla_white.png";
import logoColor from "../../assets/images/logo/logo_kopkarla_color.png";
import Button from "../../base-components/Button";
import { FormInput } from "../../base-components/Form";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import LoadingIcon from "../../base-components/LoadingIcon";

import { NewNotification } from "../../components/Notification/NewNotification";
const ResetPasswordPage = () => {
  const { token } = useParams();

  let [formData, setFormData] = useState<any>({
    email: "",
    password: "",
    conf_password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    dataToken,
    isError,
    isSuccess,
    isLoading,
    messageToken,
    messageResetPassword,
  } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (dataToken !== "" && isSuccess && !isLoading) {
      setFormData({ ...formData, email: dataToken?.data?.user?.email });
      dispatch(resetAuth());
    } else if (messageToken !== "" && isError && !isLoading) {
      console.log(messageToken, "error");
      NewNotification(messageToken?.data?.message);
      dispatch(resetAuth());
    }

    if (messageResetPassword !== "" && isSuccess && !isLoading) {
      NewNotification(messageResetPassword?.message);
      setFormData({
        email: "",
        password: "",
        conf_password: "",
      });
      dispatch(resetAuth());
    } else if (messageResetPassword !== "" && isError && !isLoading) {
      console.log(messageResetPassword, "error");
      NewNotification(messageResetPassword?.data?.message);
      dispatch(resetAuth());
    }
  }, [
    dataToken,
    isError,
    isSuccess,
    isLoading,
    messageToken,
    messageResetPassword,
  ]);

  useEffect(() => {
    dispatch(GetTokenData({ token }));
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(ResetPassword({ formData, token }));
  };
  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20 text-xs">
          <div className="w-96 intro-y">
            <img
              className="w-12 md:w-24 mx-auto hidden lg:flex"
              alt="Kopkarla"
              src={logoWhite}
            />
            <img
              className="w-12 md:w-24 mx-auto flex lg:hidden"
              alt="Kopkarla"
              src={logoColor}
            />
            <form onSubmit={handleSubmit}>
              <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                <FormInput
                  type="email"
                  className="block px-4 py-3"
                  formInputSize="sm"
                  placeholder="Email"
                  disabled
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <FormInput
                  type="password"
                  className="block px-4 py-3 mt-4"
                  formInputSize="sm"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <FormInput
                  type="password"
                  className="block px-4 py-3 mt-4"
                  formInputSize="sm"
                  placeholder="Confirmation Password"
                  required
                  value={formData.conf_password}
                  onChange={(e) =>
                    setFormData({ ...formData, conf_password: e.target.value })
                  }
                />
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full xl:mr-3"
                  >
                    {isLoading ? (
                      <LoadingIcon
                        icon="circles"
                        className="w-4 h4"
                        color="white"
                      />
                    ) : (
                      "Send Email Reset Password"
                    )}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="w-full mt-3"
                    type="button"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </Button>
                </div>
                <div className="mt-10 flex justify-center text-gray-400">
                  <p>Created by Ara Fa Adri</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
