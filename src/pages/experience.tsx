import { useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import SideResume from "../components/SideResume";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

const Experience = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;

  // const firstName = userProfile.firstName || "";
  // რაც გჭირდებათ ის ველიუ წამოიღეთ App.tsx დან

  return (
    <div className="section">
      <BackButton navigate="/personalInfo_1" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="გამოცდილება" page={2} />
        <div className="py-10 h-full">
          გამოცდილება
          <div className="flex justify-between">
            <Button text="უკან" navigate="/personalInfo_1" />
            <Button text="შემდეგ" navigate="/education_3" />
          </div>
        </div>
      </div>
      <SideResume />
    </div>
  );
};

export default Experience;
