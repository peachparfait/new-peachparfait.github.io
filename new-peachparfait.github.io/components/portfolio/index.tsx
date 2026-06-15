import Fixed from "./organisms/fixed";
import Thumbnail from "./organisms/thumbnail";
import AboutMe from "./organisms/aboutMe";
import Works from "./organisms/works";
import WorksPast from "./organisms/worksPast";
import Footer from "./organisms/footer";

export default function Index() {
  return (
    <div>
      <Fixed />
      <Thumbnail />
      <AboutMe />
      <Works />
      <WorksPast />
      <Footer />
    </div>
  );
}