import React from 'react';
import Image from 'next/image';

import causal from '@/app/public/image/categories/casual.png';
import formal from '@/app/public/image/categories/formal.png';
import party from '@/app/public/image/categories/party.png';
import gym from '@/app/public/image/categories/gym.png';

const Categories = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-[#F0F0F0] rounded-xl w-[1239px] h-[866px] m-4 flex flex-col items-center p-8">
          <div className="text-center font-bold text-[48px] mb-8">BROWSE BY DRESS STYLE</div>
          <div className="grid grid-cols-2 gap-7 w-full h-full">      
              <Image src={causal} alt="casual" width={400} height={180}className="rounded-lg justify-self-center" />
              <Image src={formal} alt="formal" width={600} height={200} className="rounded-lg" />         
              <Image src={party} alt="party" width={600} height={200} className="justify-self-center" />
              <Image src={gym} alt="gym" width={400} height={120} className="rounded-lg justify-self-center" />    
           
          </div>
        </div>
      </div>
    );
};

export default Categories;