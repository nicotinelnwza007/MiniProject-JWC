import React from 'react';
import Image from 'next/image';

import causal from '@/app/public/image/categories/casual.png';
import formal from '@/app/public/image/categories/formal.png';
import party from '@/app/public/image/categories/party.png';
import gym from '@/app/public/image/categories/gym.png';

const Categories = () => {
    return (
        <div className="flex items-center justify-center m-20">
        <div className="p-16 flex flex-col items-center justify-center rounded-3xl text-black bg-[#f0f0f0]">
          <div className="text-center text-[48px] font-bold w-full pb-16">BROWSE BY DRESS STYLE</div>
          <div className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <Image src={causal} alt="casual" />
            <Image src={formal} alt="formal" />
          </div>
          <div className="flex gap-4">
            <Image src={party} alt="party" />
            <Image src={gym} alt="gym" />
          </div>
        </div>
      </div>
      </div>
    );
};

export default Categories;