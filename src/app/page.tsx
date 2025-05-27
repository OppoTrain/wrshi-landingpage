'use client';

import { useRef } from 'react';
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RegisterNowForm from "./components/RegisterNowForm";
import Footer from "./components/Footer";
import WorkerForm from "./components/RegisterForm";

const Page = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
    return (
        <>
            <Navbar scrollToRef={sectionRef} />
            <Hero scrollToRef={sectionRef}/>
            <Features />
            <WorkerForm scrollToRef={sectionRef}/>
            <Footer />
        </>
    );
};

export default Page;
