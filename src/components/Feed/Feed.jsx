import React from "react";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Posts/Post";
import Story from "../Story/Story";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <Story />
      <MessageSender />
      <Post
        profilePic={"https://wallpaperaccess.com/full/4142125.jpg"}
        message="wow this works"
        timestamp={"this is time stap"}
        username="amircodder"
        image={'https://wallpapercave.com/wp/wp8778501.jpg'}
      />
    </div>
  );
};

export default Feed;
