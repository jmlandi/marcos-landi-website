'use client';
import { FormOverlay } from "./form";
import { useState } from 'react';
import Image from "next/image";

export default function Home() {

  const [formOverlayOpen, setFormOverlayOpen] = useState(false);

  return (
    <main className="max-w-screen max-h-screen overflow-clip flex flex-col sm:flex-row items-start justify-start">
      {/* Main Image */}
      <div className="w-screen sm:w-1/2 h-1/2 sm:h-screen overflow-clip">
        <Image src="/landi.jpg" alt="Marcos Landi" width={800} height={1200} className="w-max h-max" />
      </div>
      {/* Main Content */}
      <div className="flex flex-col justify-center items-ceter w-screen sm:w-1/2 h-1/2 sm:h-screen gap-5 p-5 sm:p-16">
        {/* Title and paragraph */}
        <div className="flex flex-col items-start gap-2 text-start">
          <h1 className="custom-color text-4xl sm:text-[4rem] tracking-tighter">
            <span className="custom-serif-bold-italic">Marcos </span><span className="custom-serif">Landi</span>
          </h1>
          <p className="text-justify tracking-tight text-sm sm:text-base">
            I&apos;m a Full-Stack & Data Engineer with <span className="font-bold">7+ years</span> of experience across fintech, manufacturing/industrial, franchise networks, and e-commerce. I grew from “the marketing guy who hacked WordPress blogs” into a builder obsessed with scalable software architectures, data pipelines, growth analytics, AI automation, and <span className="font-bold">solving messy business problems fast.</span>
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col items-center gap-2 text-start w-full">
          <button onClick={() => setFormOverlayOpen(true)} className="w-full p-3 rounded-4xl text-center custom-bg text-white text-2xl tracking-tighter">
            <span className="custom-serif-bold">Get in</span><span className="custom-serif-italic pl-0.75">touch!</span>
          </button>
          <FormOverlay open={formOverlayOpen} onClose={() => setFormOverlayOpen(false)} />
          {/* <div>
               <a></a>       
          </div> */}
        </div>
      </div>
      
    </main>
  );
}