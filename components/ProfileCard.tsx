"use client";
import React, { useRef, useEffect } from "react";

interface GlassProfileCardProps {
  imageUrl: string;
}

export default function GlassProfileCard({ imageUrl }: GlassProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x - rect.width / 2) / rect.width) * 20;
      const rotateX = -((y - rect.height / 2) / rect.height) * 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);
    };

    const resetTilt = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <div className="group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] relative">
      <div
        ref={cardRef}
        className="
          relative z-10 rounded-3xl overflow-hidden
          transition-all duration-300 ease-out
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_0_40px_rgba(255,255,255,0.2)]
          will-change-transform
          animate-float
          hover:shadow-[0_0_60px_rgba(125,190,255,0.5)]
          border-glow
          p-4
        "
        style={{
          transformStyle: "preserve-3d",
          "--pointer-x": "50%",
          "--pointer-y": "50%",
        } as React.CSSProperties}
      >
        {/* Profile Image */}
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-auto rounded-3xl object-cover select-none p-2 bg-white/5"
          draggable={false}
        />

        {/* Tilt shine overlay */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_var(--pointer-x)_var(--pointer-y),rgba(255,255,255,0.25),transparent_60%)]
            opacity-0 group-hover:opacity-30
            transition duration-500
          "
        />
      </div>

     
    </div>
  );
}
