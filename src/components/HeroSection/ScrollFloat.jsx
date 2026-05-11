import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);

  // const splitText = useMemo(() => {
  //   const text = typeof children === "string" ? children : "";
  //   return text.split("").map((char, index) => (
  //     <span className="inline-block word" key={index}>
  //       {char === " " ? "\u00A0" : char}
  //     </span>
  //   ));
  // }, [children]);
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(" ").map((word, wordIndex) => (
      <span
        key={wordIndex}
        className="inline-block whitespace-nowrap word-wrapper"
      >
        {word.split("").map((char, charIndex) => (
          <span className="inline-block char" key={charIndex}>
            {char}
          </span>
        ))}
        {"\u00A0"}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // const charElements = el.querySelectorAll(".inline-block");
    const charElements = el.querySelectorAll(".char");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      },
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <main className="w-full min-h-screen px-6 md:px-12 lg:px-24 flex items-center">
      <h2
        ref={containerRef}
        className={`w-full max-w-7xl mx-auto my-10 leading-relaxed ${containerClassName}`}
      >
        <span
          className={`
        font-grotesk
        font-bold 
        block
        italic
        w-full
        text-center
        text-[clamp(1.5rem,5vw,4rem)] 
        leading-[1.2]
        break-words
        [word-spacing:0.25em]
        ${textClassName}
      `}
        >
          {splitText}
        </span>
      </h2>
    </main>
  );
};

export default ScrollFloat;
