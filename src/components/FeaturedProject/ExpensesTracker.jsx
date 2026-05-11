import { useCallback, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const project = {
  title: "Expenses Tracker",
  tag: "Featured Project",
  role: "Full-Stack Developer",
  deployment: "Render",
  technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
  images: [
    { src: "/img/expensesTracker.png", alt: "Expenses Tracker screenshot" },
    { src: "/img/expensesTracker2.png", alt: "Expenses Tracker screenshot" },
    { src: "/img/expensesTracker3.png", alt: "Expenses Tracker screenshot" },
    { src: "/img/expensesTracker4.png", alt: "Expenses Tracker screenshot" },
  ],
  description:
    "Developed as a hands-on milestone to master the MERN stack, this project features a comprehensive Expense Tracker designed to streamline personal financial management. By integrating MongoDB, Express.js, React, and Node.js, the application provides a seamless interface for users to monitor their real-time income and expenditures with clarity. Built as a self-directed learning initiative and inspired by the educational resources of Time To Program on YouTube, this project emphasizes clean full-stack architecture and functional data visualization to help users maintain a precise overview of their financial health",
};

const ProjectCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultipleImages = images.length > 1;

  const next = useCallback(() => {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const previous = () => {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  useEffect(() => {
    if (paused || !hasMultipleImages) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [hasMultipleImages, next, paused]);

  return (
    <div
      className="relative w-full h-full bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden group flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        key={current}
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-full object-contain transition-opacity duration-500"
      />
      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80"
          >
            <HiChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80"
          >
            <HiChevronRight size={20} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ExpensesTracker = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0a] text-white overflow-y-auto transition-opacity duration-700 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background glow — fixed so it doesn't scroll away */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)",
          }}
        />
      </div>

      {/* min-h-screen so it always fills viewport, grows if content is taller */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row">
        {/* LEFT — grows with content, no fixed height */}
        <div className="flex flex-col gap-6 px-8 sm:px-12 lg:px-16 pt-20 pb-10 lg:w-[38%] lg:border-r border-white/[0.06]">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/35 border border-white/10 rounded-full px-3 py-1 w-fit">
              {project.tag}
            </span>
            <h1 className="text-xl sm:text-2xl xl:text-3xl font-black tracking-tight leading-snug text-white">
              {project.title}
            </h1>
            <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent mt-1" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
                Role
              </p>
              <p className="text-sm font-semibold text-white/80">
                {project.role}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
                  Deployment
                </p>
                <p className="text-sm font-semibold text-white/80">
                  {project.deployment}
                </p>
              </div>
              <a
                href="https://expenses-tracker-n6nd.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-[10px] font-semibold tracking-wider uppercase text-white/70 border border-white/10 bg-white/[0.05] hover:bg-white/10 hover:text-white transition-all rounded-md px-3 py-1">
                  Live Site
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-semibold text-white/55 border border-white/10 bg-white/[0.05] rounded-lg px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/[0.06]" />

          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
              Overview
            </p>
            <p className="font-mono text-sm sm:text-md text-white/45 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* RIGHT — sticky on desktop so carousel stays in view while left side scrolls */}
        <div className="flex-1 p-6 sm:p-10 lg:p-12 flex items-center justify-center lg:sticky lg:top-0 lg:self-start lg:h-screen">
          <div className="w-full flex flex-col gap-6 max-w-4xl">
            <div className="w-full h-[50vw] lg:h-[70vh] max-h-[75vh]">
              <ProjectCarousel images={project.images} />
            </div>

            <div className="mt-auto pt-10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onNavigate("high-pie")}
                className="group flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
              >
                <HiChevronLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>Previous</span>
              </button>

              <div className="h-px flex-1 bg-white/[0.06] mx-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesTracker;
