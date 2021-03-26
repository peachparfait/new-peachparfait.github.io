import * as React from "react";
import MyName from "./atoms/myName";
import SNSLink from "./atoms/SNSLink";
const Ad = () => {
    return (
        <div className="ad">
          <div className="snsLinks">
            <SNSLink classname="github" link="github" />
            <SNSLink classname="scratch" link="scratch" />
            <SNSLink classname="twitter" link="coming soon" />
          </div>
          <MyName />
        </div>
    )
  }

export default Ad;