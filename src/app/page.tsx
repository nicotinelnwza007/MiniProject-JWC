
import Section from "./components/section";
import Newarrival from "./components/newarrive";
import AutoSlideLogo from "./components/AutoSlideLogo";
import Categories from "./components/categories";
import Comment from "./components/review";
export default function Home() {
  return (
    <>
      <Section />
      <AutoSlideLogo />
      <Newarrival />
      <Categories/>
      <Comment />
    </>
  );
}
