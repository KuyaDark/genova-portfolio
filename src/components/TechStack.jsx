import React from "react";

const TECH = [
  { name: "HTML",          image: "/technologies/html.png" },
  { name: "CSS",           image: "/technologies/css.png" },
  { name: "Bootstrap",     image: "/technologies/bootstrap.png" },
  { name: "JavaScript",    image: "/technologies/js.png" },
  { name: "React",         image: "/technologies/react.png" },
  { name: "NextJS",        image: "/technologies/nextjs.png" },
  { name: "TypeScript",    image: "/technologies/ts.png" },
  { name: "TailWind",      image: "/technologies/tailwind.png" },
  { name: "MongoDB",       image: "/technologies/mongoDB.png" },
  { name: "Firebase",      image: "/technologies/firebase.png" },
  { name: "Postman",       image: "/technologies/postman.png" },
  { name: "Figma",         image: "/technologies/figma.png" },
  { name: "Visual Studio", image: "/technologies/vscode.png" },
];

const TechCard = ({ item }) => (
  <div className="flex items-center gap-2 sm:gap-3 sm:gap-4 px-3 sm:px-5 sm:px-7 py-2 sm:py-3 sm:py-4 rounded-2xl bg-[#0d1b2a] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.4)] cursor-pointer transition-all duration-200 hover:border-white/20 hover:scale-[1.03] flex-shrink-0">
    <img
      src={item.image}
      alt={item.name}
      className="w-5 h-5 sm:w-7 sm:h-7 sm:w-9 sm:h-9 object-contain"
    />
    <span className="text-xs sm:text-sm sm:text-base font-medium text-white/90 tracking-wide whitespace-nowrap">
      {item.name}
    </span>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = "60s" }) => {
  const doubled = [...items, ...items];
  const animName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div
      className="flex gap-3 sm:gap-4 sm:gap-5 w-max"
      style={{
        animation: `${animName} ${speed} linear infinite`,
        animationPlayState: "running",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
      onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
    >
      {doubled.map((item, i) => (
        <TechCard key={`${direction}-${i}`} item={item} />
      ))}
    </div>
  );
};

const TechStack = () => {
  const row2 = [...TECH].reverse();

  return (
    <section className="bg-[#0a0a0a] w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 flex flex-col gap-8 sm:gap-12 overflow-hidden">

      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA]">
          My Toolkit
        </h2>
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
          the technologies powering my work
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative w-full flex flex-col gap-3 sm:gap-4 sm:gap-5">

        <div className="absolute left-0 top-0 h-full w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <MarqueeRow items={TECH} direction="left" speed="60s" />
        </div>

        <div className="overflow-hidden">
          <MarqueeRow items={row2} direction="right" speed="70s" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;