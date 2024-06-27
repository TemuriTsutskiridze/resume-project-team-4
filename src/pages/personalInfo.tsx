import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideResume from "../components/SideResume";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

const PersonalInfo = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;

  const firstName = userProfile.firstName || "";

  const handleFirstNameChange = (newFirstName: string) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      firstName: newFirstName,
    }));
  };

  return (
    <div className="section">
      <BackButton navigate="/homePage" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="პირადი ინფო" page={1} />
        <div className="py-10 h-full">
          <div>სახელი</div>
          <input
            className="border"
            type="text"
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
          />
          <div className="flex flex-col text-blue-600">
            <Link to="/education_3">
              <button>go to education</button>
            </Link>
            <Link to="/experience_2">
              <button>go to experience</button>
            </Link>
            <Link to="/resume">
              <button>go toresume</button>
            </Link>
          </div>

          <Button text="შემდეგ" navigate="/experience_2" />
        </div>
      </div>
      <SideResume />
    </div>
  );
};

export default PersonalInfo;
