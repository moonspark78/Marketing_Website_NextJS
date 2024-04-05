
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/assets/logo.svg";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropDown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const closeDropDown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-7 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </Link>
        </div>


        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          <div className="hover:text-gray-50">Website Design</div>
          <div className="hover:text-gray-50">Graphic Design</div>
          <div className="hover:text-gray-50">Shopify Store</div>
          <div className="hover:text-gray-50">Brands</div>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>


        <div className="flex md:hidden">
          {isDropdownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onAuxClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
