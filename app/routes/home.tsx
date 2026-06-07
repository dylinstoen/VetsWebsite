import type { Route } from "./+types/home";
import FeaturedStory from "~/welcome/featuredstory";
import MoreStories from "~/welcome/morestories";
import Facts from "~/welcome/facts";
import FooterLinks from "~/welcome/footerlinks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nonprofit" },
    { name: "description", content: "Nonprofit for vets" },
  ];
}

export default function Home() {
  return (
    <main>
      <FeaturedStory />
      <MoreStories/>
      <Facts />
    </main>
  );
}
