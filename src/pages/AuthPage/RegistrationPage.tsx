import { useEffect, useState, useRef } from "react";
import { FormInput, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";
import logoWhite from "../../assets/images/logo/logo_kopkarla_white.png";
import logoColor from "../../assets/images/logo/logo_kopkarla_color.png";
import Notification from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";
import { NotificationElement } from "../../base-components/Notification";
import {
  RegistrationAttributes,
  Registration,
  resetAuth,
} from "../../stores/features/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {
  const [datas, setDatas] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    location_uuid: "",
    company_uuid: "",
    division_uuid: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isError, isSuccess, isLoading, message, messageRegister } =
    useSelector((state: any) => state.auth);

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        setDatas(data?.data);
        dispatch(resetAuth());
      }
    }
    if (message && isError) {
      if (!isLoading) {
        dispatch(resetAuth());
      }
    }
    if (messageRegister && isSuccess) {
      if (!isLoading) {
        successNotificationToggle();
        setFormData({
          name: "",
          email: "",
          password: "",
          phone_number: "",
          location_uuid: "",
          company_uuid: "",
          division_uuid: "",
        });
        dispatch(resetAuth());
      }
    }
    if (messageRegister && isError) {
      if (!isLoading) {
        dispatch(resetAuth());
      }
    }
  }, [data, isError, isSuccess, isLoading, message, messageRegister]);

  useEffect(() => {
    dispatch(RegistrationAttributes());
  }, [dispatch]);

  const handleRegistration = (e: any) => {
    e.preventDefault();
    dispatch(Registration(formData));
  };

  // Success notification
  const successDeleteNotification = useRef<NotificationElement>();
  const successNotificationToggle = () => {
    successDeleteNotification.current?.showToast();
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
          successDeleteNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex"
      >
        <Lucide icon="CheckCircle" className="text-success" />
        <div className="ml-4 mr-4">
          <div className="font-medium">Success</div>
        </div>
      </Notification>
      {/* <Notification
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
          <div className="font-medium">Register Error</div>
        </div>
      </Notification> */}
      <div className="container">
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20 text-xs">
          <div className="w-96 intro-y">
            <img
              className="w-24 mx-auto hidden lg:flex"
              alt="Kopkarla"
              src={logoWhite}
            />
            <img
              className="w-24 mx-auto flex lg:hidden"
              alt="Kopkarla"
              src={logoColor}
            />
            <form onSubmit={handleRegistration}>
              <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                <FormInput
                  type="text"
                  formInputSize="sm"
                  className="block px-4 py-3 mt-4"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <FormInput
                  type="email"
                  formInputSize="sm"
                  className="block px-4 py-3 mt-4"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <FormInput
                  type="password"
                  formInputSize="sm"
                  className="block px-4 py-3 mt-4"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <FormInput
                  type="text"
                  formInputSize="sm"
                  className="block px-4 py-3 mt-4"
                  placeholder="Nomor Telpon/Hp"
                  required
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                />
                <FormSelect
                  formSelectSize="sm"
                  className="block px-4 py-3 mt-4"
                  name="location_uuid"
                  value={formData.location_uuid}
                  onChange={(e) =>
                    setFormData({ ...formData, location_uuid: e.target.value })
                  }
                >
                  <option></option>
                  {datas?.location.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
                </FormSelect>
                <FormSelect
                  formSelectSize="sm"
                  className="block px-4 py-3 mt-4"
                  name="division_uuid"
                  value={formData.division_uuid}
                  onChange={(e) =>
                    setFormData({ ...formData, division_uuid: e.target.value })
                  }
                >
                  <option></option>
                  {datas?.division.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
                </FormSelect>
                <FormSelect
                  formSelectSize="sm"
                  className="block px-4 py-3 mt-4"
                  name="company_uuid"
                  required
                  value={formData.company_uuid}
                  onChange={(e) =>
                    setFormData({ ...formData, company_uuid: e.target.value })
                  }
                >
                  <option></option>
                  {datas?.company.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
                </FormSelect>
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
                      "Register"
                    )}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="w-full mt-3"
                    type="button"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
