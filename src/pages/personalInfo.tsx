import { useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import SideResume from "../components/SideResume";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

const PersonalInfo = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;

  const {
    firstName = "",
    lastName = "",
    aboutMe = "",
    email = "",
    mobileNumber = "",
  } = userProfile;

  const handleChange = (field: string, value: string) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  return (
    <div className="section">
      <BackButton navigate="/homePage" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ" page={1} />

        <form className="py-14 h-full flex flex-col gap-8">
          <div className="flex gap-6">
            <div className="flex-1">
              <label htmlFor="firstName">
                <span className="text-[16px] font-medium">სახელი</span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="სახელი"
                  value={firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray text-[16px] h-[48px] mt-2"
                />
              </label>
            </div>
            <div className="flex-1">
              <label htmlFor="lastName">
                <span className="text-[16px] font-medium">გვარი</span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="გვარი"
                  value={lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray text-[16px] h-[48px] mt-2"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <span className="text-[16px] font-medium">
              პირადი ფოტოს ატვირთვა
            </span>
            <button className="bg-button_blue px-5 py-1 rounded-[4px] text-[16px] text-white">
              ატვირთვა
            </button>
          </div>

          <div>
            <label htmlFor="aboutMe">
              ჩემს შესახებ (არასავალდებულო)
              <textarea
                id="aboutMe"
                name="aboutMe"
                placeholder="ზოგადი ინფო შენ შესახებ"
                value={aboutMe}
                onChange={(e) => handleChange("aboutMe", e.target.value)}
                className="py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray text-[16px] h-[103px] mt-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              ელ.ფოსტა
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@redberry.ge"
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray text-[16px] h-[48px] mt-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="mobileNumber">
              მობილურის ნომერი
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="+995"
                value={mobileNumber}
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
                className="py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray text-[16px] h-[48px] mt-2"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <Button text="ᲨᲔᲛᲓᲔᲒᲘ" navigate="/experience_2" />
          </div>
        </form>
      </div>
      <SideResume />
    </div>
  );
};

export default PersonalInfo;
