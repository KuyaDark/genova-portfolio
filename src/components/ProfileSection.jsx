import { useRef, useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ExperienceSection/ScrollStack";

import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import TextType from "./ProfileSection/TextType";
import ProfileInformation from "./ProfileSection/ProfileInformation";

const ProfileSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <ProfileInformation />
    </>
  );
};

export default ProfileSection;
