import { Icons } from "@/app/components/icons";
import Google from "@/app/public/image/payments/googlepay.png";
import Image from 'next/image';
import Section from "./components/section";
import Slider from "./components/slider";
import Newarrival from "./components/newarrive";
export default function Home() {
  return (
    <>
    
      <Section />
      <Slider />
      <Newarrival />
    </>
  );
}
