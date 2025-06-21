"use client";

import React from 'react';
import Image from "next/image";

const FractalAngel: React.FC<{ size?: number }> = () => {
  return (
    <div style={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <h1 style={{
        color: '#fff',
        fontWeight: 700,
        fontSize: '2.5rem',
        marginTop: '2.5rem', // increased top margin
        marginBottom: '1.5rem',
        textAlign: 'center',
        textShadow: '0 2px 16px #000, 0 1px 0 #9b5cff',
        letterSpacing: '-1px',
        zIndex: 2,
        position: 'relative',
      }}>
        Hi, I’m Luxsan
      </h1>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Image
          src="/AdobeExpressfile.png"
          alt="Astronaut Angel"
          width={500}
          height={700}
          style={{ maxWidth: '100%', height: 'auto', marginTop: 0, display: 'block' }}
          priority
        />
      </div>
    </div>
  );
};

export default FractalAngel;
