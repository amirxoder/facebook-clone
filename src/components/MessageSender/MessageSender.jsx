import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./messageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();

    //reset
    setImageUrl("");
    setInput("" );
  };
  return (
    <div className="message__sender">
      <div className="message__sender-top">
        <form onSubmit={sumbitHandler}>
          <Avatar />
          <input
            type="text"
            placeholder={`Whats on your mind?`}
            className="message__sender-input"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      </div>
      <div className="message__sender-bottom">
        <div className="message__sender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message__sender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message__sender-option">
          <InsertEmoticonIcon style={{ color: "darkcyan " }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
