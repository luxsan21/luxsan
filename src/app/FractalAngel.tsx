"use client";

import React from 'react';
import Image from "next/image";

const FractalAngel: React.FC<{ size?: number }> = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <h1
        className="mt-10 mb-6 text-center font-bold text-white drop-shadow-[0_2px_16px_#000,0_1px_0_#9b5cff]"
      >
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Hi, I’m Luxsan</span>
      </h1>
      <div className="flex w-full justify-center">
        <Image
          src="/astronaut-angel.png"
          alt="Astronaut Angel"
          width={525}
          height={735}
          className="float-astronaut w-full max-w-[525px]"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 525px"
          priority
        />
      </div>
    </div>
  );
};

export default FractalAngel;
