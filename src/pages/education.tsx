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
    <div className=" main w-[57%] inline-block bg-[#F9F9F9] pt-[47px] pr-[150px] pb-[65px] pl-[48px] min-h-screen ">
      <div className=" divided flex gap-[61px]">
        <div className="svgCon w-[40px] h-[40px] mr-[61px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M22.8577 12.3522C23.0832 12.5778 23.2099 12.8837 23.2099 13.2026C23.2099 13.5216 23.0832 13.8275 22.8577 14.053L16.9035 20.0073L22.8577 25.9615C23.0768 26.1883 23.198 26.4922 23.1953 26.8076C23.1926 27.123 23.0661 27.4247 22.843 27.6477C22.62 27.8707 22.3183 27.9972 22.0029 28C21.6875 28.0027 21.3837 27.8815 21.1568 27.6623L14.3522 20.8577C14.1267 20.6321 14 20.3262 14 20.0073C14 19.6883 14.1267 19.3824 14.3522 19.1568L21.1568 12.3522C21.3824 12.1267 21.6883 12 22.0073 12C22.3262 12 22.6321 12.1267 22.8577 12.3522Z"
              fill="#2E2E2E"
            />
          </svg>
        </div>
        <div className="inputsContainer w-full">
          <div className="flex justify-between mb-[12px]">
            <h1 className="text-[24px] font-bold text-[#1A1A1A] ">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
            <span className="text-[20px] font-normal text-[#1A1A1A]">3/3</span>
          </div>
          <hr className="bg-[#1A1A1A] w-full h-[1.5px] mb-[68px]" />

          <form>
            <section className="mb-[23px]">
              <label
                className="mb-[8px] text-[#000] text-[16px] font-medium block"
                htmlFor="სასწავლებელი"
              >
                სასწავლებელი
              </label>
              <input
                id="სასწავლებელი"
                type="text"
                className="text-[16px] font-normal text-[#00000099] pt-[13px] pb-[12px] pl-[16px] w-full  border-[1px] border-[solid] border-[#BCBCBC] rounded-[4px] mb-[8px]  placeholder-[#00000099]  "
                placeholder="სასწავლებელი"
              />
              <span className=" text-[14px] text-[#2E2E2E] font-light">
                მინიმუმ 2 სიმბოლო
              </span>
            </section>
            <section className="mb-[24px]">
              <div className="flex gap-[56px]">
                <div className="flex flex-col">
                  <label
                    htmlFor="select"
                    className="text-[16px] font-medium text-[#000] mb-[8px]"
                  >
                    ხარისხი
                  </label>
                  <select
                    name=""
                    id="select"
                    className="px-[16px] py-[13px] text-[16px] font-normal rounded-[4px]  border-[1px] border-[solid] border-[#BCBCBC]"
                  >
                    <option
                      value=""
                      className="option py-[10px] pl-[16px] text-[16px] font-medium text-[#1A1A1A]"
                    >
                      აირჩიეთ ხარისხი
                    </option>
                    <option value="">საშუალო სკოლის დიპლომი</option>
                    <option value=""> ზოგადსაგანმანათლებლო დიპლომი</option>
                    <option value="">ბაკალავრი</option>
                    <option value="">მაგისტრი</option>
                    <option value="">დოქტორი</option>
                    <option value="">ასოცირებული ხარისხი</option>
                    <option value="">სტუდენტი</option>
                    <option value="">კოლეჯი(ხარისხის გარეშე)</option>
                    <option value="">სხვა</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="date"
                    className="text-[16px] font-medium texr-[#000] mb-[8px]"
                  >
                    დამთავრების რიცხვი
                  </label>
                  <input
                    type="date"
                    name=""
                    id="date"
                    className=" py-[13px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px] border-[solid] border-[#BCBCBC]"
                  />
                </div>
              </div>
            </section>
            <section className="mb-[200px]">
              <label
                htmlFor="about"
                className="block text-[16px] font-medium text-[#000] mb-[8px]"
              >
                აღწერა
              </label>
              <input
                type="text"
                id="about"
                className="pt-[13px] pl-[16px] min-h-[160px] rounded-[4px] border-[1px] border-[solid] border-[#BCBCBC] w-full mb-[45px]"
              />
              <hr className="w-full bg-[#C1C1C1] h-[1.5px] mb-[45px]" />
              <button className="bg-[#62A1EB] rounded-[4px] py-[12px] px-[25px] text-[#fff] text-[16px] font-medium">
                სხვა სასწავლებლის დამატება
              </button>
            </section>
            <footer className="flex justify-between">
              <button className=" back bg-[#6B40E3] rounded-[4px] py-[12px] px-[40px] text-[16px] font-medium text-[#fff]">
                უკან
              </button>
              <button className="finish bg-[#6B40E3] rounded-[4px] py-[12px] px-[30px] text-[16px] font-medium text-[#fff]">
                დასრულება
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
