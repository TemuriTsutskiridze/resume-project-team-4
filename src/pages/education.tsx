import { useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import SideResume from "../components/SideResume";

const Education = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;

  // const firstName = userProfile.firstName || "";
  // რაც გჭირდებათ ის ველიუ წამოიღეთ App.tsx დან

  return (
    <div className="section">
      <BackButton navigate="/experience_2" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="განათლება" page={3} />
        <div className="py-10 h-full">განათლება</div>
      </div>
      <SideResume />
    </div>
  );
};

export default Education;
