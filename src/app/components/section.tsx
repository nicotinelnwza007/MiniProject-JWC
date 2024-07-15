import { Icons } from "@/app/components/icons";
import Link from "next/link";

export default function Section() {
  return (

    <section className=" p-16 justify-between" style={{ backgroundImage: `url('/src/app/public/image/people.png')` }}>
      <div className="mx-auto flex flex-col">
 
        <div className="flex flex-col mb-8 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <a href="#" className="bg-[#000000] rounded-full text-white text-center p-[12px] w-[210px] h-[52px] ">
            Shop Now
          </a>
        </div>
     
        <div className="mt-12 flex justify-between w-full max-w-screen-md">
          <div className="">
            <span className="text-[40px] font-bold">200+</span>
            <p className="text-gray-600">International Brands</p>
          </div>
          <div className="h-16 border-l border-gray-300"></div>
          <div className="">
            <span className="text-[40px] font-bold">2,000+</span>
            <p className="text-gray-600">High-Quality Products</p>
          </div>
          <div className="h-16 border-l border-gray-300"></div>
          <div className="">
            <span className="text-[40px] font-bold">30,000+</span>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
   
    </section>
  );
}
