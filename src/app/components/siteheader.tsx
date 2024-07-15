"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Icons } from "@/app/components/icons";
import Link from "next/link";

const Siteheader = () => {
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
    <div className="flex items-center p-4">
      <div className="text-black text-[32px] font-bold px-48">JWC.CO</div>
      <div className="flex items-center gap-[48px]">
        <div className=" flex flex-col items-center">
          <button onClick={toggleDropdown} className="text-[16px] flex items-center">
            <a href="#" className="text-[16px]">Shop</a>
            <Icons.ArrowDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div ref={dropdownRef} className="absolute mt-12 items-center w-[150px] bg-white border  rounded-md">
             <div className="div">Shop branch</div>
              <a href="#" className="block  text-gray-800 hover:bg-gray-100">Category 2</a>
              <a href="#" className="block  text-gray-800 hover:bg-gray-100">Category 3</a>
              <a href="#" className="block  text-gray-800 hover:bg-gray-100">Category 4</a>
              <div className="grid-cols-3">
                
              </div>
            </div>
          )}
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
    </div>
  );
};

export default Siteheader;
