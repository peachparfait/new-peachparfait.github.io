import ArticlesText from "./molecules/articlesText";
import ArticlesObjects from "./molecules/articlesObjects";

export default function Articles() {
  return (
    <div className="articles">
      <ArticlesText />
      <ArticlesObjects />
    </div>
  );
}