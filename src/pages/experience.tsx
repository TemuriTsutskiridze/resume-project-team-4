import { useState, useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import SideResume from "../components/SideResume";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import styled, { css } from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface IExperience {
  position: string;
  employer: string;
  date_started: string;
  date_finished: string;
  description: string;
}

interface InputContentProps {
  haserror: string;
}

const schema = yup.object().shape({
  experiences: yup.array().of(
    yup.object().shape({
      position: yup
        .string()
        .required("სავალიდაციო ველია")
        .min(2, "მინიმუმ 2 სიმბოლო")
        .matches(/^[\u10D0-\u10FF]+$/, "გთხოვთ შეიყვანოთ ქართული ასოები"),
      employer: yup
        .string()
        .required("სავალიდაციო ველია")
        .min(2, "მინიმუმ 2 სიმბოლო")
        .matches(/^[\u10D0-\u10FF]+$/, "გთხოვთ შეიყვანოთ ქართული ასოები"),
      date_started: yup.string().required("სავალიდაციო ველია"),
      date_finished: yup.string().required("სავალიდაცო ველია"),
      description: yup
        .string()
        .required("სავალიდაციო ველია")
        .min(2, "მინიმუმ 2 სიმბოლო")
        .matches(/^[\u10D0-\u10FF]+$/, "გთხოვთ შეიყვანოთ ქართული ასოები"),
    })
  ),
});

const Experience = () => {
  // const { userProfile, setUserProfile } = useContext(AppContext)!;

  const [experiences, setExperiences] = useState<IExperience[]>([
    {
      position: "",
      employer: "",
      date_started: "",
      date_finished: "",
      description: "",
    },
  ]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
    setValue,
  } = useForm<IExperience>({ resolver: yupResolver(schema) });

  // const watchedExperiences = watch("experiences");

  const handleFormSubmit: SubmitHandler<IExperience> = (data) => {
    setExperiences([...experiences, data]);
    console.log(data);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        position: "",
        employer: "",
        date_started: "",
        date_finished: "",
        description: "",
      },
    ]);
  };
  const validateForm = () => {
    const noErrors = experiences.every(
      (exp, index) =>
        !errors.experiences?.[index]?.position &&
        !errors.experiences?.[index]?.employer &&
        !errors.experiences?.[index]?.date_started &&
        !errors.experiences?.[index]?.date_finished &&
        !errors.experiences?.[index]?.description
    );

    const allFieldsFilled = experiences.every(
      (exp) =>
        exp.position &&
        exp.employer &&
        exp.date_started &&
        exp.date_finished &&
        exp.description
    );

    return noErrors && allFieldsFilled;
  };

  const history = useNavigate();
  const onSubmitNext = handleSubmit(() => {
    history("/education_3");
  });

  const onSubmitPrev = handleSubmit(() => {
    history("/personalInfo_1");
  });

  const handleChange = (
    index: number,
    fieldName: keyof IExperience,
    newValue: string
  ) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp, idx) =>
        idx === index ? { ...exp, [fieldName]: newValue } : exp
      )
    );
    setValue(
      `experiences[${index}].${fieldName}` as keyof IExperience,
      newValue,
      {
        shouldValidate: true,
      }
    );
  };

  console.log(experiences);
  return (
    <div className="section">
      <BackButton navigate="/personalInfo_1" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="გამოცდილება" page={2} />
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {experiences.map((experience, index) => (
            <InputContent
              key={index}
              haserror={
                (errors?.experiences?.[index]?.position &&
                  errors.experiences[index].position.message) ||
                (errors?.experiences?.[index]?.employer &&
                  errors.experiences[index].employer.message) ||
                (errors?.experiences?.[index]?.date_started &&
                  errors.experiences[index].date_started.message) ||
                (errors?.experiences?.[index]?.date_finished &&
                  errors.experiences[index].date_finished.message) ||
                (errors?.experiences?.[index]?.description &&
                  errors.experiences[index].description.message)
                  ? "true"
                  : "false"
              }
            >
              <div className="inputWrapper">
                <label htmlFor={`position${index}`}>
                  თანამდებობა
                  <input
                    id={`position${index}`}
                    type="text"
                    {...register(`experiences[${index}].position`)}
                    value={experience.position}
                    onChange={(e) =>
                      handleChange(index, "position", e.target.value)
                    }
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                    className={
                      !isSubmitted
                        ? ""
                        : isSubmitted && !errors?.experiences?.[index]?.position
                        ? "greenBorder"
                        : errors.experiences?.[index]?.position
                        ? "redBorder"
                        : "greenBorder"
                    }
                  />
                  {!isSubmitted ? (
                    ""
                  ) : isSubmitted && errors.experiences?.[index]?.position ? (
                    <>
                      <span className="inputComment">
                        {errors.experiences?.[index]?.position?.message}
                      </span>
                      <img
                        src="/images/error.svg"
                        className="errorIcon"
                        alt="errorIcon"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {!isSubmitted ? (
                    ""
                  ) : isSubmitted && !errors?.experiences?.[index]?.position ? (
                    <img
                      src="/images/akar-icons.svg"
                      className="validatedIcon"
                      alt="validated"
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>

              <div className="inputWrapper">
                <label htmlFor={`employer${index}`}>
                  დამსაქმებელი
                  <input
                    id={`employer${index}`}
                    type="text"
                    {...register(`experiences[${index}].employer`)}
                    value={experience.employer}
                    onChange={(e) =>
                      handleChange(index, "employer", e.target.value)
                    }
                    placeholder="დამსაქმებელი"
                    className={
                      !isSubmitted
                        ? ""
                        : isSubmitted && !errors?.experiences?.[index]?.employer
                        ? "greenBorder"
                        : errors.experiences?.[index]?.employer
                        ? "redBorder"
                        : "greenBorder"
                    }
                  />
                  {!isSubmitted ? (
                    ""
                  ) : isSubmitted && errors.experiences?.[index]?.employer ? (
                    <>
                      <span className="inputComment">
                        {errors.experiences?.[index]?.employer?.message}
                      </span>
                      <img
                        src="/images/error.svg"
                        className="errorIcon"
                        alt="errorIcon"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {!isSubmitted ? (
                    ""
                  ) : isSubmitted && !errors?.experiences?.[index]?.employer ? (
                    <img
                      src="/images/akar-icons.svg"
                      className="validatedIcon"
                      alt="validated"
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>

              <div className="datesInputWrapper">
                <label htmlFor={`date_started${index}`}>
                  დაწყების რიცხვი
                  <input
                    id={`date_started${index}`}
                    type="date"
                    {...register(`experiences[${index}].date_started`)}
                    value={experience.date_started}
                    onChange={(e) =>
                      handleChange(index, "date_started", e.target.value)
                    }
                    className={
                      !isSubmitted
                        ? "py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                        : isSubmitted &&
                          !errors?.experiences?.[index]?.date_started
                        ? "greenBorder py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                        : errors.experiences?.[index]?.date_started
                        ? "redBorder py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                        : "greenBorder py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                    }
                  />
                  {!isSubmitted ? (
                    ""
                  ) : isSubmitted &&
                    errors.experiences?.[index]?.date_started ? (
                    <span className="inputComment">
                      {errors.experiences?.[index]?.employer?.message}
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <label htmlFor={`date_finished${index}`}>
                  დამთავრების რიცხვი
                  <input
                    id={`date_finished${index}`}
                    type="date"
                    {...register(`experiences[${index}].date_finished`)}
                    value={experience.date_finished}
                    onChange={(e) =>
                      handleChange(index, "date_finished", e.target.value)
                    }
                    className={
                      !isSubmitted
                        ? "py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                        : isSubmitted &&
                          !errors?.experiences?.[index]?.date_finished
                        ? "greenBorder py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                        : errors.experiences?.[index]?.date_finished
                        ? "redBorder py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                        : "greenBorder py-[10px] px-[16px] text-[16px] font-medium text-[#00000099] rounded-[4px] border-[1px]"
                    }
                  />
                  {!isSubmitted ? (
                    ""
                  ) : isSubmitted &&
                    errors.experiences?.[index]?.date_finished ? (
                    <span className="inputComment">
                      {errors.experiences?.[index]?.employer?.message}
                    </span>
                  ) : (
                    ""
                  )}
                </label>
              </div>

              <label htmlFor={`description${index}`}>
                აღწერა
                <textarea
                  id={`description${index}`}
                  {...register(`experiences[${index}].description`)}
                  value={experience.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  className={
                    !isSubmitted
                      ? ""
                      : isSubmitted &&
                        !errors?.experiences?.[index]?.description
                      ? "greenBorder"
                      : errors.experiences?.[index]?.description
                      ? "redBorder"
                      : "greenBorder"
                  }
                />
                {!isSubmitted ? (
                  ""
                ) : isSubmitted && errors.experiences?.[index]?.description ? (
                  <>
                    <span className="inputComment">
                      {errors.experiences?.[index]?.employer?.message}
                    </span>
                    <img
                      src="/images/error.svg"
                      className="errorIcon"
                      alt="errorIcon"
                    />
                  </>
                ) : (
                  ""
                )}
                {!isSubmitted ? (
                  ""
                ) : isSubmitted &&
                  !errors?.experiences?.[index]?.description ? (
                  <img
                    src="/images/akar-icons.svg"
                    className="validatedIcon"
                    alt="validated"
                  />
                ) : (
                  ""
                )}
              </label>

              <div className="bottomLine"></div>
            </InputContent>
          ))}
          <button
            className="moreExperienceBtn"
            type="button"
            onClick={() => (validateForm() ? addExperience() : null)}
          >
            მეტი გამოცდილების დამატება
          </button>
          <div className="prevNextBtnWrapper">
            <Button text="უკან" action={onSubmitPrev} />
            <Button text="შემდეგი" action={onSubmitNext} />
          </div>
        </form>
      </div>
      <SideResume />
    </div>
  );
};

const InputContent = styled.div<InputContentProps>`
  padding-top: 30px;
  form {
    margin-bottom: 45px;
  }
  .inputWrapper {
    margin-bottom: 30px;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    position: relative;
    .validatedIcon {
      position: absolute;
      transform: translateY(50%);
      top: 50%;
      right: 15px;
      z-index: 1;
    }
    .errorIcon {
      position: absolute;
      top: 40px;
      right: -237%;
    }
  }

  input,
  textarea {
    width: 100%;
    height: 48px;
    padding: 13px 16px;
    margin: 8px 0;
    border-radius: 4px;
    border: 1px solid rgba(188, 188, 188, 1);
    transition: border-color 0.3s ease;
    outline: none;
  }

  textarea {
    height: 123px;
    resize: none;
  }

  input.greenBorder,
  textarea.greenBorder {
    border-color: rgba(152, 227, 126, 1);
  }

  ${(props) =>
    props.haserror === "true" &&
    css`
      input.redBorder,
      textarea.redBorder {
        border-color: rgba(239, 80, 80, 1);
      }
    `}

  .inputComment {
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
    color: rgba(46, 46, 46, 1);
    color: rgba(239, 80, 80, 1);
  }

  .datesInputWrapper {
    display: flex;
    justify-content: space-between;
    gap: 56px;
    margin-bottom: 30px;
  }
  .bottomLine {
    width: 100%;
    height: 1px;
    background-color: rgba(193, 193, 193, 1);
    margin-top: 50px;
  }
`;

export default Experience;
