import type { Metadata } from "next";
import Index from "../components/portfolio";

export const metadata: Metadata = {
  title: "parfait9",
  description: "parfait9 portfolio",
};

export default function Home() {
  return <Index />;
}
