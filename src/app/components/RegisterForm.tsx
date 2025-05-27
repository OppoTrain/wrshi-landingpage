'use client';

import { useState } from 'react';
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RefObject } from "react";

interface TargetSectionProps {
  scrollToRef: RefObject<HTMLElement | null>;
}

export default function WorkerForm({ scrollToRef }: TargetSectionProps) {
  const [role, setRole] = useState('عامل');
  const [job, setJob] = useState("");

  return (

   
    <div dir="rtl" className="min-h-screen flex items-center justify-center  p-6">
      <section ref={scrollToRef} className='w-full max-w-5xl'>
        
        <div className="bg-gray-100 rounded-xl shadow-lg px-6 py-8 flex flex-col items-center ">

          {/* Nav Toggle - Top Center */}
          <div className="mb-10">
            <div className="bg-gray-200 rounded-full p-2 flex gap-5">
              <button
              className={`min-w-[200px] py-3 px-6 text-lg font-semibold rounded-full transition duration-200 cursor-pointer ${
                  role === 'عامل'
                  ? 'text-white'
                  : 'bg-white text-black hover:bg-teal-100'
              }`}
              style={role === 'عامل' ? { backgroundColor: '#70C1B3' } : {}}
              onClick={() => setRole('عامل')}
              >
              عامل
              </button>
              <button
                className={`min-w-[200px] py-3 px-6 text-lg font-semibold rounded-full transition duration-200 cursor-pointer ${
                  role === 'مشغل'
                    ? 'text-white'
                    : 'bg-white text-black hover:bg-teal-100'
                }`}
                style={role === 'مشغل' ? { backgroundColor: '#70C1B3' } : {}}
                onClick={() => setRole('مشغل')}
              >
                مشغل
              </button>
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-center gap-8 w-full">

            <div className="flex flex-col items-center p-6 text-right" dir="rtl">
              <h2 className="text-lg font-semibold mb-1">انت عامل او فني ؟</h2>
              <p className="mb-6 text-gray-600">سجّل بياناتك وخلينا نوصلك بأقرب فرصة شغل!</p>

              <form className="w-full max-w-sm space-y-4">
                <div className="relative">
                  <FaUser className="absolute top-3 right-3 text-gray-500" />
                  <input
                    type="text"
                    placeholder="الاسم"
                    className="w-full pl-4 pr-10 py-2 rounded-full bg-green-100 focus:outline-none border border-gray-300"
                  />
                </div>

                <div className="relative">
                  <FaPhoneAlt className="absolute top-3 right-3 text-gray-500" />
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full text-right pl-4 pr-10 py-2 rounded-full bg-green-100 focus:outline-none border border-gray-300"
                  />
                </div>

                <div className="relative">
                  <MdWork className="absolute top-3 right-3 text-gray-500" />
                  <select  value={job}
                    onChange={(e) => setJob(e.target.value)}
                    className={`w-full pl-4 pr-10 py-2 rounded-full bg-green-100 focus:outline-none border border-gray-300
                      ${job === "" ? "text-gray-500" : "text-black"}`}
                  >
                    <option value="" disabled hidden>المهنة</option>
                    <option value="electrician">كهربائي</option>
                    <option value="plumber">سبّاك</option>
                    <option value="mechanic">ميكانيكي</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-full text-lg cursor-pointer"
                >
                  إرسال <span className="mr-2">←</span>
                </button>
              </form>
            </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[250px] h-[500px] bg-gray-200 rounded-[2rem] p-2 flex items-center justify-center text-center text-gray-500">
                  
                  {role==='عامل' ? (
                    <img src="/image/worker.png" alt="about us" loading="lazy" className="w-full h-full object-cover"/>

                  ):(
                    <img src="/image/enterpranure.png" alt="about us" loading="lazy" className="w-full h-full object-cover"/>

                  )}
                  
                </div>
              </div>
          </div>
        
        </div>
      </section>

    </div>
  );
}
