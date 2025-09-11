import background from "../../assets/images/backgrounds/background.jpg";
import userNotFound from "../../assets/images/user/userNotFound.jpg";
import Lucide from "../../base-components/Lucide";

const UserHeader = (props: any) => {
  const { datas } = props;

  return (
    <div className="col-span-12">
      <div className="px-3 pt-3 pb-5 box intro-y">
        <div className="image-fit h-64 before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-black/10 to-black before:rounded-md before:z-10">
          <img
            alt="User"
            className="rounded-md md:object-[0px_-170px]"
            src={background}
          />
        </div>
        <div className="flex flex-col items-center justify-start text-center xl:flex-row xl:text-left">
          <div className="z-20 -mt-20 xl:-mt-10 xl:ml-10">
            <div className="w-32 h-32 overflow-hidden border-4 border-white rounded-full shadow-md image-fit">
              <img alt="Rocketman - HTML Admin Template" src={userNotFound} />
            </div>
          </div>
          <div className="xl:ml-5">
            <h2 className="mt-5 text-lg font-medium capitalize">
              {datas?.name}
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center justify-center mt-2 text-slate-500 xl:justify-start">
                <Lucide icon="Mail" className="w-4 h-4 mr-2" /> {datas?.email}
              </div>
              <div className="flex items-center justify-center mt-2 text-slate-500 xl:justify-start">
                <Lucide icon="Phone" className="w-4 h-4 mr-2" />{" "}
                {datas?.phone_number}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
