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
import apple from'@/app/public/image/sponser/apple.png';
import spotify from'@/app/public/image/sponser/Spotify.png';
import dior from'@/app/public/image/sponser/dior.png';


const AutoSlideLogo: React.FC = () => {
  const logos = [
    { src: nike, alt: 'Nike', width: 122, height: 122 },
    { src: versace, alt: 'versace', width: 350, height: 350 },
    { src: zara, alt: 'zara', width: 350, height: 350 },
    { src: gucci, alt: 'gucci', width: 122, height: 122 },
    { src: handm, alt: 'handm', width: 122, height: 122 },
    { src: underarmour, alt: 'underarmour', width: 100, height: 100 },
    { src: adidas, alt: 'adidas', width: 122, height: 122 },
    { src: calvin, alt: 'calvin', width: 122, height: 122 },
    { src: apple, alt: 'apple',width: 100, height: 100 },
    { src: dior, alt: 'dior', width: 90, height: 90 },
    { src: spotify, alt: 'spotify', width: 122, height: 122 },

  ];

  return (
    <div className="w-full h-full flex justify-center  p-4 overflow-hidden bg-black">
      <div className="flex w-max animate-slider">
        {logos.map((logo, index) => (
          <Image 
            key={index} 
            src={logo.src} 
            width={logo.width} 
            height={logo.height} 
            alt={logo.alt} 
            quality={100}
            className="flex gap-20 h-14 mx-14" 
          />
        ))}
        
    
      </div>
    </div>
     
  );
};

export default AutoSlideLogo;



