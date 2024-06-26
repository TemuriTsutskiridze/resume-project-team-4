import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PersonalInfo from "./pages/personalInfo";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Resume from "./pages/resume";
import { createContext, useState } from "react";
import { ContextType, UserProfile } from "./types/types";

export const AppContext = createContext<ContextType | undefined>(undefined);

const App = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({});

  const contextValue: ContextType = {
    userProfile,
    setUserProfile,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Navigate to="/homePage" />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
