import MyName from "./atoms/myName";
import SNSLink from "./atoms/SNSLink";

export default function Ad() {
  return (
    <div className="ad">
      <div className="snsLinks">
        <SNSLink classname="github" src="/assets/github.svg" />
        <SNSLink classname="scratch" src="/assets/scratch.svg" />
      </div>
      <MyName />
    </div>
  );
}