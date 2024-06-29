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
  experienceStartTime?: string;
  experienceEndTime?: string;
  experienceDescription?: string;
  university?: string;
  degree?: string;
  educationEndTime?: string;
  educationDescription?: string;
}

export interface BackButtonProps {
  navigate: string;
}

export interface HeaderProps {
  header: string;
  page: number;
}

export interface buttonProps {
  navigate: string;
  text: string;
}
