import React from "react";
import ScrollStack, { ScrollStackItem } from "./ExperienceSection/ScrollStack";

const Experience = () => {
  return (
    <section
      className="bg-[#0a0a0a] w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 flex flex-col gap-6 overflow-x-clip"
      style={{ isolation: "isolate" }}
    >
      <div className="text-center space-y-2">
        <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA]">
          My Experience
        </h2>
      </div>
      <ScrollStack useWindowScroll={true}>
        {/* Card 1: Ateneo Innovation Center */}
        <ScrollStackItem itemClassName="bg-[#111111] border border-white/5 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]">
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div>
                <p className="font-grotesk font-bold text-md sm:text-lg lg:text-xl">
                  Ateneo Innovation Center
                </p>
                <h2 className=" font-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fafafa] tracking-tight mt-0.5">
                  Research & Development Intern
                </h2>
              </div>
              <span className="font-mono inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white-500/20 bg-blue-500/10 text-xs font-medium text-slate-300 uppercase tracking-widest shrink-0">
                Jan — April 2026
              </span>
            </div>

            <div className="h-px bg-white/5" />

            {/* Description */}
            <p className="font-mono text-slate-200 leading-relaxed text-sm sm:text-base lg:text-lg">
              Contributed to the development of{" "}
              <span className="text-white font-semibold">WATCH</span> (Weather
              Station, Auditory Sensing, Tracking Precipitation, Catching Sight
              and Holistic Assessment) and{" "}
              <span className="text-[#fafafa] font-semibold">SHARP</span>{" "}
              (Seeing-Hearing and Rain Prediction) — AI frameworks for
              hyper-local meteorological nowcasting. Also worked on integrating
              IoT-based microcontroller systems for real-time auditory rainfall
              detection.
            </p>

            {/* Tech Stack */}
            <div>
              <p className="font-mono text-[10px] font-medium text-white/30 uppercase tracking-widest mb-2">
                Technologies
              </p>
              <div className=" flex flex-wrap gap-2">
                {["Python", "Arduino IDE", "ESP32", "Raspberry Pi"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="font-mono px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs text-white/50 font-medium hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            <a
              href="https://www.ateneo.edu/sose/aic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="group relative flex items-center justify-center gap-2 mt-4 px-6 py-3 
             w-fit rounded-xl border border-blue-500/20 bg-blue-500/5 
             text-xs font-bold tracking-[0.2em] uppercase text-blue-400
             hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 
             transition-all duration-500 overflow-hidden"
              >
                {/* Subtle "Scanning" Light Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                <span className="relative z-10">Explore Research</span>

                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </a>
          </div>
        </ScrollStackItem>

        {/* Card 2: Placeholder */}
        <ScrollStackItem itemClassName="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border-dashed min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]">
          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa]/50 italic">
                The Next Chapter
              </h2>
              <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-white/20 shrink-0 uppercase tracking-tighter">
                Coming Soon
              </span>
            </div>
            <p className="text-white/40 text-base sm:text-lg lg:text-xl w-full leading-relaxed">
              Currently exploring new opportunities to push the boundaries of
              <span className="text-white/60"> Web </span>
              and <span className="text-white/60"> Software Development</span>
            </p>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};

export default Experience;
