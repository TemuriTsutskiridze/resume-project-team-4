import { useContext } from "react";
import { AppContext } from "../App";

const Experience = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;

  // const firstName = userProfile.firstName || "";
  // რაც გჭირდებათ ის ველიუ წამოიღეთ App.tsx დან

  return (
    <div>
      <div>Experience</div>
    </div>
  );
};

export default Experience;
