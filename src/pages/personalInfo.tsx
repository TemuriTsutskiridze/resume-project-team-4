import { useContext, useRef } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import SideResume from "../components/SideResume";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleChangeProps } from "../types/types";

const PersonalInfo = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;
  const history = useNavigate();

  // Define yup schema for validation
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "მინიმუმ 2 ასო")
      .matches(/^[\u10D0-\u10FF]+$/, "მინიმუმ 2 ასო, ქართული ასოები")
      .required("სახელი აუცილებელია"),
    last_name: yup
      .string()
      .min(2, "მინიმუმ 2 ასო")
      .matches(/^[\u10D0-\u10FF]+$/, "მინიმუმ 2 ასო, ქართული ასოები")
      .required("გვარი აუცილებელია"),
    email: yup
      .string()
      .matches(/^[\w.%+-]+@redberry\.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
      .required("მეილი აუცილებელია"),
    phone_num: yup
      .string()
      .matches(
        /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
      )
      .required("მობილური ნომერი აუცილებელია"),
    about_me: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch, // Add this line
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userProfile.name || "",
      last_name: userProfile.last_name || "",
      email: userProfile.email || "",
      phone_num: userProfile.phone_num || "",
      about_me: userProfile.about_me || "",
    },
    resolver: yupResolver(schema),
  });

  const handleChange: handleChangeProps = (field, value) => {
    let formattedValue = value.toString();

    if (field === "phone_num") {
      // Remove non-digit characters
      formattedValue = formattedValue.replace(/\D/g, "");
      // Format the phone number as "+995 XXX XX XX XX"
      if (formattedValue.length > 3) {
        formattedValue = "+995 " + formattedValue.slice(3);
      }
      if (formattedValue.length > 6) {
        formattedValue =
          formattedValue.slice(0, 8) + " " + formattedValue.slice(8);
      }
      if (formattedValue.length > 9) {
        formattedValue =
          formattedValue.slice(0, 11) + " " + formattedValue.slice(11);
      }
      if (formattedValue.length > 12) {
        formattedValue =
          formattedValue.slice(0, 14) + " " + formattedValue.slice(14);
      }
      if (formattedValue.length >= 17) {
        formattedValue = formattedValue.slice(0, 17);
      }
    }

    setValue(field, formattedValue.trim()); // Trim leading/trailing spaces if any

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [field]: formattedValue.trim(),
    }));
  };

  const onSubmit = () => {
    history("/experience_2");
  };

  // Image upload handling
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="section">
      <BackButton navigate="/homePage" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ" page={1} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-14 h-full flex flex-col justify-between"
        >
          <div className="flex flex-col gap-8">
            <div className="flex gap-10">
              <div className="flex-1">
                <label htmlFor="name">
                  <span className="text-[16px] font-medium">სახელი</span>
                  <div className="relative flex gap-1 justify-center items-center">
                    <input
                      type="text"
                      id="name"
                      placeholder="სახელი"
                      {...register("name", {
                        onChange: (e) => handleChange("name", e.target.value),
                      })}
                      className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                        errors.name
                          ? "inputError"
                          : watch("name")
                          ? "inputCorrect"
                          : ""
                      } text-[16px] h-[48px] mt-2`}
                    />
                    {errors.name ? (
                      <img
                        src="./images/error.png"
                        alt="error"
                        className="w-[24px] h-[24px] mt-2"
                      />
                    ) : (
                      watch("name") && (
                        <img
                          src="./images/correct.png"
                          alt="correct"
                          className="absolute w-[18px] right-3 top-[1.5rem]"
                        />
                      )
                    )}
                  </div>
                  {errors.name && (
                    <span className="text-[14px] text-validation_black">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex-1">
                <label htmlFor="last_name">
                  <span className="text-[16px] font-medium">გვარი</span>
                  <div className="relative flex gap-1 justify-center items-center">
                    <input
                      type="text"
                      id="last_name"
                      placeholder="გვარი"
                      {...register("last_name", {
                        onChange: (e) =>
                          handleChange("last_name", e.target.value),
                      })}
                      className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                        errors.last_name
                          ? "inputError"
                          : watch("last_name")
                          ? "inputCorrect"
                          : ""
                      } text-[16px] h-[48px] mt-2`}
                    />
                    {errors.last_name ? (
                      <img
                        src="./images/error.png"
                        alt="error"
                        className="w-[24px] h-[24px] mt-2"
                      />
                    ) : (
                      watch("last_name") && (
                        <img
                          src="./images/correct.png"
                          alt="correct"
                          className="absolute w-[18px] right-3 top-[1.5rem]"
                        />
                      )
                    )}
                  </div>
                  {errors.last_name && (
                    <span className="text-[14px] text-validation_black">
                      {errors.last_name.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <span className="text-[16px] font-medium">
                პირადი ფოტოს ატვირთვა
              </span>
              <div>
                <button
                  type="button"
                  className="bg-button_blue px-5 py-1 rounded-[4px] text-[16px] text-white"
                  onClick={handleButtonClick}
                >
                  ატვირთვა
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
            </div>
            <div>
              <label htmlFor="about_me">
                <span className="text-[16px] font-medium">ჩემს შესახებ</span>

                <textarea
                  id="about_me"
                  placeholder="ჩემს შესახებ"
                  {...register("about_me", {
                    onChange: (e) => handleChange("about_me", e.target.value),
                  })}
                  className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                    errors.about_me
                      ? "inputError"
                      : watch("about_me")
                      ? "inputCorrect"
                      : ""
                  } text-[16px] h-[103px] mt-2`}
                />
                {errors.about_me && (
                  <span className="text-[14px] text-validation_black">
                    {errors.about_me.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <span className="text-[16px] font-medium">მეილი</span>
                <div className="relative flex gap-1 justify-center items-center">
                  <input
                    type="email"
                    id="email"
                    placeholder="მეილი"
                    {...register("email", {
                      onChange: (e) => handleChange("email", e.target.value),
                    })}
                    className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                      errors.email
                        ? "inputError"
                        : watch("email")
                        ? "inputCorrect"
                        : ""
                    } text-[16px] h-[48px] mt-2`}
                  />
                  {errors.email ? (
                    <img
                      src="./images/error.png"
                      alt="error"
                      className="w-[24px] h-[24px] mt-2"
                    />
                  ) : (
                    watch("email") && (
                      <img
                        src="./images/correct.png"
                        alt="correct"
                        className="absolute w-[18px] right-3 top-[1.5rem]"
                      />
                    )
                  )}
                </div>
                {errors.email && (
                  <span className="text-[14px] text-validation_black">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <label htmlFor="phone_num">
                <span className="text-[16px] font-medium">ტელეფონი</span>
                <div className="relative flex gap-1 justify-center items-center">
                  <input
                    type="tel"
                    id="phone_num"
                    placeholder="+995 XXX XX XX XX"
                    {...register("phone_num", {
                      onChange: (e) =>
                        handleChange("phone_num", e.target.value),
                    })}
                    className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                      errors.phone_num
                        ? "inputError"
                        : watch("phone_num")
                        ? "inputCorrect"
                        : ""
                    } text-[16px] h-[48px] mt-2`}
                  />
                  {errors.phone_num ? (
                    <img
                      src="./images/error.png"
                      alt="error"
                      className="w-[24px] h-[24px] mt-2"
                    />
                  ) : (
                    watch("phone_num") && (
                      <img
                        src="./images/correct.png"
                        alt="correct"
                        className="absolute w-[18px] right-3 top-[1.5rem]"
                      />
                    )
                  )}
                </div>
                {errors.phone_num && (
                  <span className="text-[14px] text-validation_black">
                    {errors.phone_num.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <Button text="შემდეგი" action={handleSubmit(onSubmit)} />
          </div>
        </form>
      </div>
      <SideResume />
    </div>
  );
};

export default PersonalInfo;
