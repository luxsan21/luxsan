"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    function resize() {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    type Star = {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      glow: number;
      glowSpeed: number;
    };
    const STAR_COUNT = 180;
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        dx: (Math.random() - 0.5) * 0.08,
        dy: (Math.random() - 0.5) * 0.08,
        glow: Math.random(),
        glowSpeed: Math.random() * 0.03 + 0.01
      });
    }

    let running = true;
    function animate() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (let s of stars) {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
        s.glow += s.glowSpeed * (Math.random() > 0.5 ? 1 : -1);
        if (s.glow > 1) s.glow = 1;
        if (s.glow < 0.2) s.glow = 0.2;
        ctx.save();
        ctx.globalAlpha = s.glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8 * s.glow;
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas id="star-bg" ref={canvasRef} />
  );
}
