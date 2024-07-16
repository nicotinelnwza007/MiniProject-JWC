

import { Icons } from "@/app/components/icons";
import Link from "next/link";
import Image from 'next/image'
import background from '@/app/public/image/People.png';
import shirt1 from '@/app/public/image/clothes/Shirt1.png';
import shirt2 from '@/app/public/image/clothes/Shirt2.png';
import shirt3 from '@/app/public/image/clothes/Shirt3.png';
import shirt4 from '@/app/public/image/clothes/Shirt4.png';
import star from '@/app/public/image/clothes/stars.png';
import shirt5 from '@/app/public/image/clothes/Shirt5.png';
import shirt6 from '@/app/public/image/clothes/Shirt6.png';
import shirt7 from '@/app/public/image/clothes/Shirt7.png';
import shirt8 from '@/app/public/image/clothes/Shirt8.png';
const Newarrival = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            {/* New arrivals */}
            <div className="text-center font-bold text-[48px] p-12">NEW ARRIVALS</div>
            <div className="flex grid-rows-4 gap-[12px] p-8 justify-center items-center">
                <div className="flex flex-col">
                    <Image src={shirt1} width={350} height={295} alt="shir1" />
                    <div className="text-bold text-[20px]">T-SHIRT WITH TAPE DETAILS</div>
                    <Image src={star} width={152} height={18} alt="star" />
                    <div className="text-bold text-[24px]">$120</div>
                </div>
                <div className="flex flex-col">
                    <Image src={shirt2} width={350} height={295} alt="shirt2" />
                    <div className="text-bold text-[20px]">SKINNY FIT JEANS</div>
                    <Image src={star} width={152} height={18} alt="star" />
                    <div className="flex gap-[12px] items-center">
                        <div className="text-bold text-[24px]">$240</div>
                        <div className="text-bold text-gray-300 line-through text-[24px]">$260</div>
                        <div className="bg-[#ecc5c5] text-[#FF3333] rounded-full text-[12px] p-1">-20%</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image src={shirt3} width={350} height={295} alt="shirt3" />
                    <div className="text-bold text-[20px]">CHECKERED SHIRT</div>
                    <div className="flex">
                        <Image src={star} width={152} height={18} alt="star" />
                    </div>
                    <div className="text-bold text-[24px]">$180</div>
                </div>
                <div className="flex flex-col">
                    <Image src={shirt4} width={350} height={295} alt="shirt4" />
                    <div className="text-bold text-[20px]">SLEEVE STRIPED T-SHIRT</div>
                    <Image src={star} width={152} height={18} alt="star" />
                    <div className="flex gap-[12px] items-center">
                        <div className="text-bold text-[24px]">$130</div>
                        <div className="text-bold text-gray-300 line-through text-[24px]">$160</div>
                        <div className="bg-[#ecc5c5] text-[#FF3333] rounded-full text-[12px] p-1">-30%</div>
                    </div>
                </div>
            </div>
            <button className="rounded-full p-[16px] px-[54px]  border text-[16px] font-bold">VIEW MORE</button>
            <div className="border w-10/12 m-8"></div>
            {/* Top Selling */}
            <div className="text-center font-bold text-[48px] p-12">TOP SELLING</div>
            <div className="flex grid-rows-4 gap-[12px] p-8 justify-center items-center">
                <div className="flex flex-col">
                    <Image src={shirt5} width={350} height={295} alt="shir1" />
                    <div className="text-bold text-[20px]">VERTICAL STRIPED SHIRT</div>
                    <Image src={star} width={152} height={18} alt="star" />
                    <div className="flex gap-[12px] items-center">
                        <div className="text-bold text-[24px]">$212</div>
                        <div className="text-bold text-gray-300 line-through text-[24px]">$232</div>
                        <div className="bg-[#ecc5c5] text-[#FF3333] rounded-full text-[12px] p-1">-30%</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image src={shirt6} width={350} height={295} alt="shirt2" />
                    <div className="text-bold text-[20px]">COURAGE GRAPHIC T-SHIRT</div>
                    <Image src={star} width={152} height={18} alt="star" />
                    <div className="text-bold text-[24px]">$145</div>
                </div>
                <div className="flex flex-col">
                    <Image src={shirt7} width={350} height={295} alt="shirt3" />
                    <div className="text-bold text-[20px]">LOOSE FIT BERMUDA SHORTS</div>
                    <div className="flex">
                        <Image src={star} width={152} height={18} alt="star" />
                    </div>
                    <div className="text-bold text-[24px]">$80</div>
                </div>
                <div className="flex flex-col">
                    <Image src={shirt8} width={350} height={295} alt="shirt4" />
                    <div className="text-bold text-[20px]">FADED SKINNY JEANS</div>
                    <Image src={star} width={152} height={18} alt="star" />
                    <div className="text-bold text-[24px]">$210</div>
                </div>
            </div>
            <button className="rounded-full p-[16px] px-[54px] border text-[16px] font-bold m-8">VIEW MORE</button>

        </section>
    );
};

export default Newarrival;