import React from "react";
import { FaClipboardCheck } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';


const Features = () => {
    const features = [
        {
            icon: (
                <FaShieldAlt className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "أمان و مصداقية في كل خطوة",
        },
      
       
        {
            icon: (
                <FaComments className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "تواصل مباشرة مع أصحاب العمل",
        },
          {
            icon: (
                <FaClipboardCheck className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "سجل بكم خطوة ابدأ تستقبل عروض الشغل",
        },
         {
            icon: (
                <FaUsers className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "تطبيق تواصل بين أصحاب الورشات و بين أصحاب المهن",
        },

         
        
       
    ];

    return (
        <div className="text-center py-6 md:py-18 px-4 max-w-[1240px] mx-auto">
            <h2 className="font-bold text-[24px] md:text-[42px] text-[#366585] font-inter">
                لماذا تختار ورشة ؟
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12  bg-[#FBFBFB] rounded-2xl">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-6 md:p-8 flex flex-col items-center"
                    >
                        {feature.icon}
                        <p className="font-normal text-[16px] md:text-[32px] text-[#366585] font-inter mt-8 md:mt-12">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
