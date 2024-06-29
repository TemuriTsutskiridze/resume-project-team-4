import { useContext } from "react";
import { AppContext } from "../App";

const SideResume = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;
  const firstName = userProfile.firstName || "";

  return (
    <div className="flex-1 justify-between h-full py-10 px-9 relative bg-white">
      <div>სახელი: {firstName}</div>
      <img
        src="/images/redberryMiniLogo.png"
        alt="redberryMiniLogo"
        className="w-[42px] absolute bottom-10 left-10"
      />
    </div>
  );
};

export default SideResume;
