'use client';
import Link from "next/link";
import React from "react";
import { RefObject } from "react";

interface ScrollButtonProps {
  scrollToRef: RefObject<HTMLElement | null>;
}

const Hero = ({scrollToRef }:ScrollButtonProps) => {

    const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };


    return (
       <div className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 py-25">
    {/* Image Container (Fixed 784px on large screens, responsive on smaller) */}
    <div className="w-full md:w-auto flex justify-center">
        <img
            src="/image/about-us.png"
            alt="about us"
            loading="lazy"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[784px] lg:h-[784px] object-cover"
        />
    </div>

    {/* Text Content (Adjusts based on image size) */}
    <div className="w-full md:w-[40%] text-center md:text-right space-y-5 md:space-y-16 mt-8 md:mt-0 md:pl-10">
        <h1 className="font-semibold text-[36px] md:text-[66px] leading-[66px] text-[#000102] font-inter">
            ...ورشة
        </h1>
        <p className="font-normal text-[16px] sm:text-[20px] md:text-[28px] leading-8 text-[#000102] font-inter">
            ! طريقك لأقرب فرصة شغل <br/>
            <br/>
            سواء كنت نجار , كهربجي , فني سباكة , أو حتى صاحب مشروع يبحث عن عمال<br/>
            <br/>
            تطبيق ورشة وسيلة للعمال و اصحاب المشاريع التواصل بسهولة و بأسرع وقت ممكن
        </p>
        
            <button className="cursor-pointer text-lg px-5 py-2 md:px-8 md:py-3 bg-white border-3 border-teal-700 rounded-2xl text-[#366585] hover:bg-teal-800 hover:text-white transition w-[155px]" onClick={handleClick}>
                سجل الان
            </button>
        
    </div>
</div>
    );
};

export default Hero;
