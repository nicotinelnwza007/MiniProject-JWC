"use client"

import React from 'react';
import SLider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Icons } from "@/app/components/icons";

const comment = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from JWC.CO. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered JWC.CO. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon JWC.CO. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "lung tu",
    text: "i love you thailand",
  },
  {
    name: "Donald trump.",
    text: "This shop is very good for buy a clothes. for protect me frm ambush",
  },
];

const Slider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-full mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">OUR HAPPY CUSTOMERS
        <div className="div"> </div>
      </h2>
      <SLider {...settings}>
        {comment.map((comment, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-[240px] gap-[24px]">
              
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
               
                <div className="text-yellow-500 text-[22.58px]">★★★★★</div>
                <div className="flex gap-[4px]">
                  <div className="text-xl font-medium text-gray-900">{comment.name}</div>
                  <div className="items-center justify-center"><Icons.Verify></Icons.Verify></div>
                  </div>
               
                </div>
             
              </div>
              <p className="mt-2 text-gray-600">{comment.text}</p>
            </div>
          </div>
        ))}
      </SLider>
    </div>
  );
}

export default Slider;
