import React from "react";
import "./widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs="timeline"
        data-width=""
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/facebook"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/facebook">Meta</a>
        </blockquote>
      </div>
    </div>
  );
};

export default Widgets;
