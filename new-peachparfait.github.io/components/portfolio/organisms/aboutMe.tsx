import Profile from "./molecules/profile";
import Icon from "./molecules/icon";
import History from "./molecules/history";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <Profile />
      <Icon />
      <History />
    </div>
  );
}