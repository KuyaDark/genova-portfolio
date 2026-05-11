import React from "react";

const Scroll = () => {
  return (
    <div className="flex flex-col items-center gap-1 mt-12 sm:mt-[-55px]">
      {/* Mouse icon */}
      <div className="w-5 h-8 rounded-full border border-[#0a0a0a] flex justify-center pt-1.5">
        <div className="w-1 h-1.5 rounded-full bg-[#0a0a0a] animate-bounce" />
      </div>
      {/* Arrows */}
      <div className="flex flex-col items-center -gap-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="animate-pulse"
        >
          <polyline
            points="2,2 6,7 10,2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0a0a0a]"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="animate-pulse delay-150"
        >
          <polyline
            points="2,2 6,7 10,2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0a0a0a]"
          />
        </svg>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0a0a0a]">
        scroll
      </p>
    </div>
  );
};

export default Scroll;
