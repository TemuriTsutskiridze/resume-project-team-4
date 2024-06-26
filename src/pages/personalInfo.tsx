import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

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
    <div>
      <div>First Name: {firstName}</div>
      <input
        className="border"
        type="text"
        value={firstName}
        onChange={(e) => handleFirstNameChange(e.target.value)}
      />
      <div className="flex flex-col text-blue-600">
        <Link to="/education">
          <button>go to education</button>
        </Link>
        <Link to="/experience">
          <button>go to experience</button>
        </Link>
        <Link to="/resume">
          <button>go toresume</button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
