import React from 'react';
import Image from 'next/image';


import nike from '@/app/public/image/sponser/nike.jpg';
import versace from'@/app/public/image/sponser/versace.jpg';
import zara from'@/app/public/image/sponser/zara.png';
import gucci from'@/app/public/image/sponser/gucci.jpg';
import calvin from'@/app/public/image/sponser/calvinklein.png';
import handm from'@/app/public/image/sponser/handm.png';
import underarmour from'@/app/public/image/sponser/underarmour.png';
import adidas from'@/app/public/image/sponser/adidas.jpg';


const AutoSlideLogo: React.FC = () => {
  const logos = [
    { src: nike, alt: 'Nike', width: 122, height: 122 },
    { src: versace, alt: 'versace', width: 122, height: 122 },
    { src: zara, alt: 'zara', width: 122, height: 122 },
    { src: gucci, alt: 'gucci', width: 122, height: 122 },
    { src: handm, alt: 'handm', width: 122, height: 122 },
    { src: underarmour, alt: 'underarmour', width: 100, height: 100 },
    { src: adidas, alt: 'adidas', width: 122, height: 122 },
    { src: calvin, alt: 'calvin', width: 122, height: 122 },

  ];

  return (
    <div className="w-full h-full flex justify-center gap-[38px] p-4 overflow-hidden bg-black">
      <div className="flex w-max animate-slide">
        {logos.map((logo, index) => (
          <Image 
            key={index} 
            src={logo.src} 
            width={logo.width} 
            height={logo.height} 
            alt={logo.alt} 
            className="flex gap-20 h-14 mx-4" 
          />
        ))}
        
    
      </div>
    </div>
     
  );
};

export default AutoSlideLogo;



