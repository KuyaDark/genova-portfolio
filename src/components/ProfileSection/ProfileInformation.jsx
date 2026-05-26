import React from "react";
import { motion as Motion } from "framer-motion";

const ScrollSection = ({ children, showScrollGuide }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      viewport={{ amount: 0.45 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 min-h-screen flex flex-col items-start justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20"
    >
      <div className="w-full max-w-2xl">{children}</div>

      {/* Bouncing chevron scroll guide — shown between slides, not after the last */}
      {showScrollGuide && (
        <div className="w-full max-w-2xl mt-10 flex items-center gap-4">
          {/* Left rule */}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2a2a2a]" />

          {/* Chevrons */}
          <div className="flex flex-col items-center gap-[3px]">
            {[0, 1, 2].map((i) => (
              <Motion.div
                key={i}
                animate={{ opacity: [0.15, 0.7, 0.15], y: [0, 5, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#a09890"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Motion.div>
            ))}
          </div>

          {/* Right rule */}
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
        </div>
      )}
    </Motion.div>
  );
};

const slides = [
  {
    index: "01",
    label: "background",
    text: "I graduated with a Bachelor of Science in Information Technology from TIP–QC, specializing in software and web development.",
  },
  {
    index: "02",
    label: "approach",
    text: "I craft responsive, high-performance applications with clean, maintainable code — leveraging modern frameworks to build intuitive digital experiences that address real-world challenges.",
  },
  {
    index: "03",
    label: "mindset",
    text: "Continuously evolving with the ever-changing tech landscape, I embrace new tools, languages, and methodologies with ease, adapting quickly to deliver solutions that grow alongside the demands of the industry.",
  },
];

const SlideContent = ({ slide }) => (
  <div>
    <div
      className="
        slide-meta
        flex items-center gap-[0.6rem]
        font-mono font-light uppercase tracking-[0.24em]
        text-[clamp(0.55rem,1vw,0.65rem)]  text-slate-500
        mb-[clamp(0.5rem,1.5vw,1.1rem)]
      "
    >
      <span>{slide.index}</span>
      <span
        className="
          font-grotesk font-light uppercase tracking-[0.3em]
          text-[clamp(0.52rem,0.8vw,0.6rem)] text-slate-500
        "
      >
        {slide.label}
      </span>
    </div>

    <p
      className="
        font-sans
        text-[clamp(1.55rem,3.4vw,3.2rem)]
        font-light italic leading-[1.2] tracking-[-0.01em]
        text-[#fafafa]
      "
    >
      {slide.text}
    </p>
  </div>
);

const ProfileInformation = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400;1,600&family=DM+Mono:wght@300;400&display=swap');

        .slide-meta::after {
          content: '';
          display: inline-block;
          width: 1.75rem;
          height: 1px;
          background: #2a2a2a;
        }

        .col-rule::before {
          content: '';
          position: absolute;
          right: 0;
          top: 6%;
          bottom: 6%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, #1c1c1c 30%, #1c1c1c 70%, transparent);
        }
      `}</style>

      <div className="relative w-full bg-[#0a0a0a]">
        {/* ══════════════════════════════════════
            MOBILE / TABLET  (below lg)
        ══════════════════════════════════════ */}
        <div className="flex flex-col lg:hidden">
          <div className="sticky top-0 left-0 right-0 z-0 bg-[#0f0f0f]">
            <img
              src="/img/Gradpic.jpg"
              alt="Renan"
              className="w-full object-contain"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent, #0a0a0a)",
              }}
            />
          </div>

          <div className="relative z-10 bg-[#0a0a0a]">
            {slides.map((slide, i) => (
              <ScrollSection key={i} showScrollGuide={i < slides.length - 1}>
                <SlideContent slide={slide} />
              </ScrollSection>
            ))}
            <div className="h-[12vh]" />
          </div>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP  (lg and above)
        ══════════════════════════════════════ */}
        <div className="hidden lg:flex lg:flex-row lg:items-start">
          {/* LEFT — scrollable text */}
          <div className="col-rule relative z-10 w-[58%] order-1 bg-[#0a0a0a]">
            {slides.map((slide, i) => (
              <ScrollSection key={i} showScrollGuide={i < slides.length - 1}>
                <SlideContent slide={slide} />
              </ScrollSection>
            ))}
            <div className="h-[15vh]" />
          </div>

          {/* RIGHT — sticky image */}
          <div
            className="
              z-0
              w-[42%] h-screen
              sticky top-0 self-start
              overflow-hidden order-2
              bg-[#0f0f0f]
            "
          >
            <img
              src="/img/Gradpic.jpg"
              alt="Renan"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(160deg, rgba(10,10,10,0.08) 0%, transparent 50%, rgba(10,10,10,0.4) 100%)",
              }}
            />
            <div
              className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #0a0a0a, transparent)",
              }}
            />
            <span
              className="
                absolute bottom-8 right-[1.1rem]
                font-mono font-light uppercase tracking-[0.28em]
                text-[0.55rem] text-white/20
                [writing-mode:vertical-rl]
              "
            >
              renan · bsit · tip–qc
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
