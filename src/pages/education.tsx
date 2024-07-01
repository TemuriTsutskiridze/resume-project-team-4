import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import erorImage from "/images/errorImage.svg";
import { AppContext } from "../App";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import SideResume from "../components/SideResume";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const regex = /^[\u10D0-\u10FF]+$/;
const schema = yup.object({
  university: yup
    .string()
    .min(2, "")
    .matches(regex, "გთხოვთ შეიყვანოთ ქართული ასოები"),
  degree: yup.string().required(),
  finish_date: yup.string().required(),
  description: yup
    .string()
    .min(2, "")
    .matches(regex, "გთხოვთ შეიყვანოთ ქართული ასოები"),
});
const Education = () => {
  const { university, degree } = useContext(AppContext);
  function foo() {
    setShow(!show);
  }
  const [show, setShow] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);
  console.log(errors);
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="mb-[23px] relative">
              <label
                className={`mb-[8px]  ${
                  errors.university ? "text-red-600" : "text-[#2E2E2E]"
                } text-[16px] font-medium block`}
                htmlFor="სასწავლებელი"
              >
                სასწავლებელი
              </label>
              <input
                {...register("university")}
                id="სასწავლებელი"
                type="text"
                className={`text-[16px] font-normal text-[#00000099] pt-[13px] pb-[12px] pl-[16px] w-full   ${
                  !errors.university && show ? "bg-input-background" : null
                } bg-no-repeat bg-[right_14px_top_50%] ${
                  errors.university
                    ? "border-[1px] border-[solid] border-red-600"
                    : !errors.university && show
                    ? "border-[1px] border-[solid] border-green-600"
                    : "border-[1px] border-[solid] border-[#BCBCBC]"
                } rounded-[4px] mb-[8px]  placeholder-[#00000099]  outline-none "
                placeholder="სასწავლებელი `}
              />
              {errors.university ? (
                <img
                  className="absolute top-[45px] right-[-30px]"
                  src={erorImage}
                  alt=""
                />
              ) : null}
              {errors.university ? (
                <p className=" absolute text-[12px] text-red-600 top-[10px] right-[10px] ">
                  {errors.university.message}
                </p>
              ) : null}

              <span className={` text-[14px]  text-[#2E2E2E]  font-light`}>
                მინიმუმ 2 სიმბოლო
              </span>
            </section>
            <section className="mb-[24px]">
              <div className="flex gap-[56px]">
                <div className="flex flex-col relative">
                  <label
                    htmlFor="select"
                    className="text-[16px] font-medium text-[#000] mb-[8px]"
                  >
                    ხარისხი
                  </label>
                  <select
                    id="select"
                    className={`px-[16px] py-[13px] text-[16px] font-normal rounded-[4px]   ${
                      errors.degree
                        ? "border-[1px] border-[solid] border-[red]"
                        : "border-[1px] border-[solid] border-[#BCBCBC]"
                    }`}
                    {...register("degree")}
                  >
                    <option
                      value=""
                      className="option py-[10px] pl-[16px] text-[16px] font-medium text-[#1A1A1A]"
                    >
                      აირჩიეთ ხარისხი
                    </option>
                    <option value="საშუალო სკოლის დიპლომი">
                      საშუალო სკოლის დიპლომი
                    </option>
                    <option value="ზოგადსაგანმანათლებლო დიპლომი">
                      ზოგადსაგანმანათლებლო დიპლომი
                    </option>
                    <option value="ბაკალავრი">ბაკალავრი</option>
                    <option value="მაგისტრი">მაგისტრი</option>
                    <option value="დოქტორი">დოქტორი</option>
                    <option value="ასოცირებული ხარისხი">
                      ასოცირებული ხარისხი
                    </option>
                    <option value="სტუდენტი">სტუდენტი</option>
                    <option value="კოლეჯი(ხარისხის გარეშე)">
                      კოლეჯი(ხარისხის გარეშე)
                    </option>
                    <option value="სხვა">სხვა</option>
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
                    {...register("finish_date")}
                    type="date"
                    name="finish_date"
                    id="date"
                    className={` py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px] ${
                      errors.description
                        ? "border-[1px] border-[solid] border-red-600"
                        : !errors.description && show
                        ? "border-[1px] border-[solid] border-green-600"
                        : "border-[1px] border-[solid] border-[#BCBCBC]"
                    }`}
                  />
                </div>
              </div>
            </section>
            <section className="mb-[200px] relative">
              <label
                htmlFor="about"
                className="block text-[16px] font-medium text-[#000] mb-[8px]"
              >
                აღწერა
              </label>
              <textarea
                {...register("description")}
                id="about"
                className={`pt-[13px] pl-[16px] min-h-[160px] rounded-[4px] outline-[none] ${
                  errors.description
                    ? "border-[1px] border-[solid] border-red-600"
                    : !errors.description && show
                    ? "border-[1px] border-[solid] border-green-600"
                    : "border-[1px] border-[solid] border-[#BCBCBC]"
                } w-full mb-[45px]`}
              ></textarea>
              {errors.description ? (
                <p className=" absolute text-[14px] text-red-600 top-[7px] right-[10px] ">
                  {errors.description.message}
                </p>
              ) : null}
              {errors.description ? (
                <img
                  className="absolute top-[92px] right-[-30px]"
                  src={erorImage}
                  alt=""
                />
              ) : null}

              <hr className="w-full bg-[#C1C1C1] h-[1.5px] mb-[45px]" />
              <button className="bg-[#62A1EB] rounded-[4px] py-[12px] px-[25px] text-[#fff] text-[16px] font-medium">
                სხვა სასწავლებლის დამატება
              </button>
            </section>
            <footer className="flex justify-between">
              <button className=" back bg-[#6B40E3] rounded-[4px] py-[12px] px-[40px] text-[16px] font-medium text-[#fff]">
                უკან
              </button>
              <button
                className="finish bg-[#6B40E3] rounded-[4px] py-[12px] px-[30px] text-[16px] font-medium text-[#fff]"
                onClick={foo}
              >
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
