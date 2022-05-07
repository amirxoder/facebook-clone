import { Avatar } from "@mui/material";
import React from "react";
import "./sidebarRow.css";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="icon" />} 
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
