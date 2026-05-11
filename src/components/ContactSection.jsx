// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const ContactSection = () => {
//   const circleRef = useRef(null);
//   const sectionRef = useRef(null);
//   const initialTextRef = useRef(null);
//   const finalTextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const cleanup = () => {
//       ScrollTrigger.getAll().forEach((st) => {
//         if (st.vars.trigger === sectionRef.current) {
//           st.kill(true);
//         }
//       });
//     };

//     // clean up any existing scrollTrigger

//     cleanup();

//     //set initial states

//     gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
//     gsap.set(initialTextRef.current, { opacity: 1 });
//     gsap.set(finalTextRef.current, { opacity: 0 });
//     //create main timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=200%",
//         pin: true,
//         scrub: 0.5,
//         anticipatePin: 1,
//         fastScrollEnd: true,
//         preventOverlaps: true,
//         invalidateOnRefresh: true,
//       },
//     });

//     //initial state to mid-zoom (0-50%)

//     tl.to(
//       circleRef.current,
//       {
//         scale: 5,
//         backgroundColor: "#9333EA",
//         ease: "power1.inOut",
//         duration: 0.5,
//       },
//       0,
//     );

//     //fadeout initial text during first half

//     tl.to(
//       initialTextRef.current,
//       {
//         opacity: 0,
//         ease: "power1.out",
//         duration: 0.2,
//       },
//       0.1,
//     );

//     //mid-zoom to final state (50-100%)

//     tl.to(
//       circleRef.current,
//       {
//         scale: 17,
//         backgroundColor: "#E9D5FF",
//         boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
//         ease: "power2.inOut",
//         duration: 0.5,
//       },
//       0.5,
//     );

//     //fade in final text during second half

//     tl.to(
//       finalTextRef.current,
//       {
//         opacity: 1,
//         ease: "power2.in",
//         duration: 0.2,
//       },
//       0.7,
//     );

//     return cleanup;
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="flex items-center justify-center bg-[#0a0a0a] relative h-screen [overflow:clip]"
//       style={{ overscrollBehavior: "none" }}
//     >
//       {/* Circle */}
//       <div
//         ref={circleRef}
//         className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
//       >
//         {/* Initial text */}
//         <p
//           ref={initialTextRef}
//           className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center justify-center text-center"
//         >
//           SCROLL DOWN
//         </p>

//         {/* Final text */}
//         <div
//           ref={finalTextRef}
//           className="text-center relative flex flex-col items-center justify-center"
//         >
//           <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
//             Step Into the Future with Renan
//           </h1>

//           <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
//             Software Developer specialized in crafting modern, responsive web
//             interface using React, Tailwind CSS, Express, MongoDB, and NodeJS.
//             Focused on clean code, and pixel-perfect design that stand out.
//           </p>

//           <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    cleanup();

    gsap.set(circleRef.current, { scale: 1 });
    gsap.set(initialTextRef.current, { opacity: 1, y: 0 });
    gsap.set(finalTextRef.current, { opacity: 0 });
    gsap.set(scrollIndicatorRef.current, { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      circleRef.current,
      { scale: 5, ease: "power1.inOut", duration: 0.5 },
      0,
    );
    tl.to(
      scrollIndicatorRef.current,
      { opacity: 0, y: -10, ease: "power1.out", duration: 0.15 },
      0,
    );
    tl.to(
      initialTextRef.current,
      { opacity: 0, y: -8, ease: "power1.out", duration: 0.2 },
      0.1,
    );
    tl.to(
      circleRef.current,
      { scale: 18, ease: "power2.inOut", duration: 0.5 },
      0.5,
    );
    tl.to(
      finalTextRef.current,
      { opacity: 1, ease: "power2.in", duration: 0.25 },
      0.72,
    );

    return cleanup;
  }, []);

  return (
    <>
      {/* Only keyframe animations that can't be expressed in Tailwind */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.25; transform: scaleY(1); }
          50% { opacity: 0.85; transform: scaleY(1.2); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-scroll-pulse { animation: scrollPulse 2s ease-in-out infinite; }
        .animate-blink { animation: blink 1.1s step-end infinite; }

        /* eyebrow rule lines — pseudo-elements can't be done in Tailwind */
        .eyebrow-line::before,
        .eyebrow-line::after {
          content: '';
          display: inline-block;
          width: 1.25rem;
          height: 1px;
          background: #bbb;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="flex items-center justify-center bg-[#0a0a0a] relative h-screen [overflow:clip]"
        style={{ overscrollBehavior: "none" }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(200,190,170,0.05) 0%, transparent 68%)",
          }}
        />

        {/* Circle */}
        <div
          ref={circleRef}
          className="
            flex items-center justify-center relative flex-shrink-0
            rounded-full bg-[#faf7f2]
            w-[clamp(6rem,11vw,8rem)] h-[clamp(6rem,11vw,8rem)]
          "
        >
          {/* Initial scroll state */}
          <div
            ref={initialTextRef}
            className="absolute inset-0 flex flex-col items-center justify-center gap-[0.35rem]"
          >
            <span
              className="
                font-mono font-normal uppercase tracking-[0.2em]
                text-[clamp(0.4rem,0.95vw,0.58rem)] text-[#0a0a0a]
              "
            >
              scroll
            </span>
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 1v12M2 9l4 4 4-4"
                stroke="#0a0a0a"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Final content — revealed after full zoom */}
          <div
            ref={finalTextRef}
            className="
              flex flex-col items-center text-center
              [transform:scale(calc(1/18))] [transform-origin:center_center]
              w-[calc(100vw*0.94)] sm:w-[calc(100vw*0.88)] md:w-[calc(100vw*0.82)] lg:w-[calc(100vw*0.72)]
              whitespace-normal px-4
            "
          >
            {/* Eyebrow */}
            <p
              className="
                eyebrow-line
                flex items-center justify-center gap-[0.6rem]
                font-mono font-normal uppercase tracking-[0.16em]
                text-[clamp(0.58rem,1vw,0.66rem)] text-[#888]
                mb-[clamp(0.75rem,1.8vw,1.1rem)]
              "
            >
              available for work
            </p>

            {/* Headline */}
            <h1
              className="
                font-grotesk font-bold
                text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.04em]
                text-[#0a0a0a]
                mb-[clamp(0.75rem,2vw,1.25rem)]
              "
            >
              Let's builds together.
              <br />
              <span className="font-light tracking-[-0.02em]"></span>
            </h1>

            {/* Body */}
            <p
              className="
                font-mono font-normal
                text-[clamp(0.68rem,1.45vw,0.83rem)] leading-[1.8] tracking-[-0.01em]
                text-[#4a4a4a]
                max-w-[40ch] mx-auto
                mb-[clamp(1.25rem,3vw,2rem)]
              "
            >
              Software developer and ready to explore and contribute. I bring a
              strong foundation in modern development practices and an adaptable
              mindset, eager to help build the next generation of digital tools
            </p>

            {/* Button */}
            <a href="mailto:genovarenanjayson@gmail.com">
              <button
                className="
      font-grotesk font-semibold uppercase tracking-[0.1em]
      text-[clamp(0.68rem,1.2vw,0.78rem)]
      px-[clamp(1.5rem,4vw,2.25rem)] py-[clamp(0.55rem,1.4vw,0.72rem)]
      rounded-full border-[1.5px] border-[#0a0a0a]
      bg-transparent text-[#0a0a0a]
      cursor-pointer
      transition-[background,color,transform] duration-[350ms] ease-in-out
      hover:bg-[#0a0a0a] hover:text-[#faf7f2] hover:scale-[1.03]
    "
              >
                LET’S COLLABORATE
              </button>
            </a>
          </div>
        </div>

        {/* Scroll indicator — outside circle */}
        <div
          ref={scrollIndicatorRef}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center bottom-[clamp(1.5rem,4vh,2.5rem)]"
        >
          <div
            className="animate-scroll-pulse w-px h-11"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.28))",
            }}
          />
          <p
            className="
              font-mono font-normal uppercase tracking-[0.24em]
              text-[clamp(0.52rem,0.9vw,0.62rem)] text-[#555]
              mt-2
            "
          >
            scroll
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
