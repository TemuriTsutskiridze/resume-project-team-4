import { Dispatch, SetStateAction } from "react";
export type ContextType = {
  userProfile: UserProfile;
  setUserProfile: Dispatch<SetStateAction<UserProfile>>;
};

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  image?: string;
  aboutMe?: string;
  email?: string;
  mobileNumber?: number | string;
  position?: string;
  employer?: string;
  experienceStartTime?: Date | string;
  experienceEndTime?: Date | string;
  experienceDescription?: string;
  university?: string;
  degree?: string;
  educationEndTime?: Date | string;
  educationDescription?: string;
}
