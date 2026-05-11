import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-[#111111] flex justify-center">
      <img
        src="/img/profilePic.jpg"
        alt="Profile"
        className="w-full h-full transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default ProfileCard;