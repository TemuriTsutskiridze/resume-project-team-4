import { useContext } from "react";
import { AppContext } from "../App";

const Education = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;

  // const firstName = userProfile.firstName || "";
  // რაც გჭირდებათ ის ველიუ წამოიღეთ App.tsx დან

  return (
    <div>
      <div>education</div>
    </div>
  );
};

export default Education;
