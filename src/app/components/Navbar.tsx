'use client';


import React from "react";
import MobileMenu from "./MobileMenu";
import { RefObject } from "react";
interface ScrollButtonProps {
  scrollToRef: RefObject<HTMLElement | null>;
}


const Navbar = ({scrollToRef }:ScrollButtonProps) => {

    const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

    return (
        <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 pt-12 text-black">
            <div className="order-2">
                <a href="#">
                    <img
                        src="/image/logo.png"
                        alt="logo"
                        loading="lazy"
                        className="w-33 h-17 md:w-43 md:h-21"
                    />
                </a>
            </div>

            <ul className="hidden md:flex order-1 space-x-8">
               
                <button className="cursor-pointer text-lg px-8 py-3 bg-white border-3 border-teal-700 rounded-2xl text-[#366585] hover:bg-teal-700 hover:text-white transition w-[155px]" onClick={handleClick}>
                    سجل الان
                </button>
                
            </ul>
            <MobileMenu />
        </div>
    );
};

export default Navbar;
