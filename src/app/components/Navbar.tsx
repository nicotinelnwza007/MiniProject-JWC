"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Icons } from "@/app/components/icons";
import Link from "next/link";
import Image from 'next/image'
import bangkok from '@/app/public/image/branch/Bangkok.png';
import newyork from '@/app/public/image/branch/Newyork.png';
import tokyo from '@/app/public/image/branch/Tokyo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="items-center ">

      <div className="flex items-center p-4 gap-[28px]">
        <div className="text-black text-[32px] font-bold px-40">JWC.CO</div>
        <div className="items-center">
          <button onClick={toggleDropdown} className="text-[16px] flex items-center">
            <a href="#" className="text-[16px]">Shop</a>
            <Icons.ArrowDown className={`ml-2 transition-all duration-500  ${isOpen ? 'rotate-180' : ''}`} />
          </button>

        </div>


        <a href="#" className="text-[16px]">On Sale</a>
        <a href="#" className="text-[16px]">New Arrivals</a>
        <a href="#" className="text-[16px]">Brands</a>

        <div className="flex items-center bg-gray-100 rounded-full w-[590px] h-[48px] px-4">
          <Icons.Search className="mr-2" />
          <input type="text" placeholder="Search for products..." className="bg-gray-100 outline-none flex-grow" />
        </div>
        <Icons.Cart />
        <Icons.Profile />
      </div>
      {isOpen && (
        <div ref={dropdownRef} className="absolute w-full text-left bg-white z-40 p-4">
          <div className="text-[16px] font-bold mb-4">Shop Branch</div>
          <div className="grid grid-cols-6 justify-items-center gap-8">
            <div className="flex flex-col text-gray-800">
              <a href="#">Bangkok</a>
              <a href="#">Tokyo</a>
              <a href="#">New York</a>
              <a href="#">London</a>
            </div>
            <div className="flex flex-col text-gray-800">
              <a href="#">Bangkok</a>
              <a href="#">Tokyo</a>
              <a href="#">New York</a>
              <a href="#">London</a>
            </div>
            <div className="flex flex-col text-gray-800">
              <a href="#">Bangkok</a>
              <a href="#">Tokyo</a>
              <a href="#">New York</a>
              <a href="#">London</a>
            </div>
            <Image src={bangkok} alt="Bangkok" className="" width={300} height={200} />
            <Image src={bangkok} alt="Bangkok" className="" width={300} height={200} />
            <Image src={tokyo} alt="Tokyo" className="" width={300} height={200} />
          </div>
        </div>


      )}
    </div>
  );
};

export default Navbar;
