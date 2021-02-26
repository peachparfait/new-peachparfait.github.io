import * as React from "react";
import ArticlesText from "./molecules/articlesText";
import ArticlesObjects from "./molecules/articlesObjects";

const Articles = () => {
    return (
        <div class="articles">
          <ArticlesText />
          <ArticlesObjects />
        </div>
    )
  }

export default Articles;