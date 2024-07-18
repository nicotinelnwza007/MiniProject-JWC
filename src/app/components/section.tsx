import { Icons } from "@/app/components/icons";
import Link from "next/link";
import Image from 'next/image'
import background from '@/app/public/image/People.png';

const Section = () => {
  return (
    <section className="h-[790px] relative p-16 overflow-hidden">
      
      <div className="absolute inset-0 z-[-1]">
        <Image 
          src={background}  
          alt="Background Image"
          className="w-[2000px]"
          objectFit="cover"
          quality={100}  
        />
      </div>

   
      <div className="mx-auto flex flex-col relative z-10">
        <div className="flex flex-col mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            FIND CLOTHES THAT <br /> MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-500 mb-6">
            Browse through our diverse range of meticulously crafted garments, <br />designed to bring out your individuality and cater to your sense of style.
          </p>
          <a href="#" className="bg-[#000000] rounded-full text-white text-center p-[12px] w-[210px] h-[52px]">
            Shop Now
          </a>
        </div>

        <div className="mt-4 flex justify-between w-full max-w-screen-md">
          <div>
            <span className="text-[40px] font-bold text-black">200+</span>
            <p className="text-gray-500">International Brands</p>
          </div>
          <div className="h-16 border-l border-gray-300"></div>
          <div>
            <span className="text-[40px] font-bold text-black">2,000+</span>
            <p className="text-gray-500">High-Quality Products</p>
          </div>
          <div className="h-16 border-l border-gray-300"></div>
          <div>
            <span className="text-[40px] font-bold ttext-black">30,000+</span>
            <p className="text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;