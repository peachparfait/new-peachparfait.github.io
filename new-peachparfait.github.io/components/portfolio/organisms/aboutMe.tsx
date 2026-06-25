import AboutMeText from "./molecules/aboutMeText";
import Profile from "./molecules/profile";
import Icon from "./molecules/icon";
import History from "./molecules/history";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <AboutMeText />
      <Profile />
      <Icon />
      <History />
    </div>
  );
}