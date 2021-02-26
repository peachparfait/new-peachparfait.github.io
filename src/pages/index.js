import * as React from "react";
import "./styles.scss";
import Index from "./templates/index";

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <title>parfait9</title>
      <Index />
    </main>
  )
}

export default IndexPage;
