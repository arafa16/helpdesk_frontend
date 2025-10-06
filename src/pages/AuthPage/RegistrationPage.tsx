import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormInput, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";
import logoWhite from "../../assets/images/logo/logo_kopkarla_white.png";
import logoColor from "../../assets/images/logo/logo_kopkarla_color.png";
import {
  RegistrationAttributes,
  Registration,
  resetAuth,
} from "../../stores/features/AuthSlice";
import { NewNotification } from "../../components/Notification/NewNotification";

const RegisterPage = () => {
  const [datas, setDatas] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    company_uuid: "",
    area_uuid: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isError, isSuccess, isLoading, message, messageRegister } =
    useSelector((state: any) => state.auth);

  useEffect(() => {
    if (data !== null && isSuccess && !isLoading) {
      setDatas(data?.data);
      dispatch(resetAuth());
    }
    if (message !== "" && isError && !isLoading) {
      console.log(message, "message error");
      dispatch(resetAuth());
    }
    if (messageRegister !== "" && isSuccess && !isLoading) {
      NewNotification(messageRegister?.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        phone_number: "",
        company_uuid: "",
        area_uuid: "",
      });
      dispatch(resetAuth());
    }
    if (messageRegister && isError && !isLoading) {
      NewNotification(messageRegister?.data?.message);
      dispatch(resetAuth());
    }
  }, [data, isError, isSuccess, isLoading, message, messageRegister]);

  useEffect(() => {
    dispatch(RegistrationAttributes());
  }, [dispatch]);

  const handleRegistration = (e: any) => {
    e.preventDefault();
    dispatch(Registration(formData));
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20 text-xs">
          <div className="w-[650px] intro-y">
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
            <form onSubmit={handleRegistration}>
              <div className="box grid grid-cols-12 gap-4 px-5 py-8 mt-10 max-w-[650px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                <FormInput
                  name="name"
                  type="text"
                  formInputSize="sm"
                  className="block col-span-12 md:col-span-6 px-4 py-3 mt-4"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <FormInput
                  name="email"
                  type="email"
                  formInputSize="sm"
                  className="block col-span-12 md:col-span-6 px-4 py-3 mt-4"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <FormInput
                  name="password"
                  type="password"
                  formInputSize="sm"
                  className="block col-span-12 md:col-span-6 px-4 py-3 mt-4"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <FormInput
                  name="phone_number"
                  type="text"
                  formInputSize="sm"
                  className="block col-span-12 md:col-span-6 px-4 py-3 mt-4"
                  placeholder="Nomor Telpon/Hp"
                  required
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                />
                <FormSelect
                  name="company_uuid"
                  formSelectSize="sm"
                  className="block col-span-12 md:col-span-6 px-4 py-3 mt-4"
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
                <FormSelect
                  name="area_uuid"
                  formSelectSize="sm"
                  className="block col-span-12 md:col-span-6 px-4 py-3 mt-4"
                  required
                  value={formData.area_uuid}
                  onChange={(e) =>
                    setFormData({ ...formData, area_uuid: e.target.value })
                  }
                >
                  <option></option>
                  {datas?.area.map((data: any, index: any) => (
                    <option key={index} value={data.uuid}>
                      {data.name}
                    </option>
                  ))}
                </FormSelect>
                <div className="mt-5 col-span-12 md:flex md:justify-end md:gap-4 text-center xl:mt-8 xl:text-left">
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-4 w-full md:w-auto "
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
                    className="px-4 w-full md:w-auto mt-4 md:mt-0"
                    type="button"
                    onClick={() => navigate("/login")}
                  >
                    Back to Sign in
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
