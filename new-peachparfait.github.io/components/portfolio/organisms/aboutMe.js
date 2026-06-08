import * as React from "react";
import Profile from "./molecules/profile";
import Icon from "./molecules/icon";
import History from "./molecules/history";

const AboutMe = () => {
    return (
        <div className="aboutme">
          <Profile />
          <Icon />
          <History />
        </div>
    )
  }

export default AboutMe;