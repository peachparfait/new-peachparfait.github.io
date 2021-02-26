import * as React from "react";
import Fixed from "./organisms/fixed";
import Thumbnail from "./organisms/thumbnail";
import AboutMe from "./organisms/aboutMe";
import Works from "./organisms/works";
import Articles from "./organisms/articles";
import Footer from "./organisms/footer";

const Index = () => {
    return (
        <div>
            <Fixed />
            <Thumbnail />
            <AboutMe />
            <Works />
            <Articles />
            <Footer />
        </div>
    )
  }

export default Index;