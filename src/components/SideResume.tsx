import { useContext } from "react";
import { AppContext } from "../App";

const SideResume = () => {
  const { userProfile } = useContext(AppContext)!;
  const {
    firstName,
    lastName,
    email,
    image,
    mobileNumber,
    aboutMe,
    position,
    employer,
    experienceStartTime,
    experienceEndTime,
    experienceDescription,
    university,
    degree,
    educationEndTime,
    educationDescription,
  } = userProfile;

  return (
    <div className="flex flex-col flex-1 h-full gap-6 py-10 md:px-16 px-8 relative bg-white">
      <div className="max-h-[90%] overflow-y-auto h-full ">
        <div className="flex justify-between items-start gap-6 font-normal">
          <div className="flex flex-col gap-3">
            <h1 className="text-[34px] font-bold text-resume_orange">
              {firstName} {lastName}
            </h1>
            <div>
              <div className="flex flex-[2/3] items-center gap-4">
                <img
                  className="w-[20px] h-[20px]"
                  src="./images/email.png"
                  alt="email"
                />
                <span className="text-[18px] text-resume_black">{email}</span>
              </div>
              <div className="flex flex-[1/3] items-center gap-4">
                <img
                  className="w-[20px] h-[20px]"
                  src="./images/phone.png"
                  alt="phone"
                />
                <span className="text-[18px] text-resume_black">
                  {mobileNumber}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-resume_orange">
                ᲩᲔᲛᲡ ᲨᲔᲡᲐᲮᲔᲑ
              </h2>
              <p className="mt-2 text-[16px]">{aboutMe}</p>
            </div>
          </div>
          <img
            className="max-w-[246px] max-h-[246px] w-[50%]"
            src={image}
            alt="profile"
          />
        </div>
        <div className="w-full h-[1px] bg-line_bg_black my-4"></div>
        <div className="flex flex-col gap-2 text-[16px]">
          <h1 className="text-[18px] font-bold text-resume_orange">
            ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
          </h1>
          <div>
            <div className="font-medium mb-1 flex gap-4">
              <h4>{position}</h4>
              <span>{employer}</span>
            </div>
            <span className="text-[#909090] italic">
              {experienceStartTime} - {experienceEndTime}
            </span>
          </div>
          <p>{experienceDescription}</p>
        </div>
        <div className="w-full h-[1px] bg-line_bg_black my-4"></div>
        <div className="flex flex-col gap-2 text-[16px]">
          <h1 className="text-[18px] font-bold text-resume_orange">
            ᲒᲐᲜᲐᲗᲚᲔᲑᲐ
          </h1>
          <div>
            <div className="font-medium mb-1 flex gap-4">
              <h4>{university}</h4>
              <span>{degree}</span>
            </div>
            <span className="text-[#909090] italic">{educationEndTime} - </span>
          </div>
          <p>{educationDescription}</p>
        </div>
      </div>
      <img
        src="/images/redberryMiniLogo.png"
        alt="redberryMiniLogo"
        className="w-[42px] absolute bottom-10 left-10"
      />
    </div>
  );
};

export default SideResume;
