import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const counterDuration = 2000;
    const holdTime = 2000;
    const fadeDelay = 800;

    const intervalTime = 20;
    const totalSteps = counterDuration / intervalTime; // 100 steps
    let currentStep = 0;

    // 1. Progress Counter — step-based so it hits exactly 100
    const timer = setInterval(() => {
      currentStep += 1;
      const nextProgress = (currentStep / totalSteps) * 100;

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setProgress(100); // guaranteed exact 100
      } else {
        setProgress(nextProgress);
      }
    }, intervalTime);

    // 2. Hold & Fade — only starts after counter truly finishes
    const t2 = setTimeout(() => setFadeOut(true), counterDuration + holdTime);
    const t3 = setTimeout(() => onComplete(), counterDuration + holdTime + fadeDelay);

    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(timer);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <div
      className={`sm:p-10 fixed inset-0 z-50 flex flex-col justify-end transition-all duration-1000 ease-in-out ${
        fadeOut ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#0A0A0A" }}
    >
      <div className="px-10 pb-8">
        <div
          className="text-white font-bold leading-none"
          style={{
            fontFamily: "grotesk, sans-serif",
            fontSize: "8rem",
            letterSpacing: "-2px",
          }}
        >
          {Math.round(progress)}
        </div>

        <div className="w-full h-[3px] mt-2 mb-4 bg-white/10 relative">
          <div
            className="absolute top-0 left-0 h-full transition-all ease-out"
            style={{
              width: `${progress}%`,
              background: "#b8a070",
              transitionDuration: "150ms",
            }}
          />
        </div>

        <div
          className="text-xs font-light tracking-[0.2em] uppercase"
          style={{ color: "#a89880", fontFamily: "grotesk, sans-serif" }}
        >
          Renan Jayson R. Genova - Developer 
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;