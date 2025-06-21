"use client";

import React from 'react';
import Image from "next/image";

const FractalAngel: React.FC<{ size?: number }> = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h1
        className="mt-10 mb-6 text-center font-bold text-white text-[2.5rem] sm:text-[3.2rem]"
        style={{
          textShadow: '0 2px 16px #000, 0 1px 0 #9b5cff',
          letterSpacing: '-1px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        Hi, I’m Luxsan
      </h1>
      <div className="w-full flex justify-center">
        <Image
          src="/astronaut-angel.png"
          alt="Astronaut Angel"
          width={525}
          height={735}
          className="float-astronaut block mt-0 w-auto max-w-full"
          priority
        />
      </div>
    </div>
  );
};

export default FractalAngel;
