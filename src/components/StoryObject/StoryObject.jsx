import { Avatar } from "@mui/material";
import React from "react";
import "./storyObject.css";

const StoryObject = ({ image, profileSrc, title }) => {
  return (
    <div
      className="storyObject"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default StoryObject;
