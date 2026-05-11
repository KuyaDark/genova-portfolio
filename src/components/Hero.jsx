// import "boxicons/css/boxicons.min.css";
// import Spline from "@splinetool/react-spline";

// const Hero = () => {
//   return (
//     <main className="relative flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden">
//       <div
//         data-aos="fade-right"
//         data-aos-offset="300"
//         data-aos-easing="ease-in-sine"
//         className="max-w-2xl ml-[5%] z-10 mt-[90%] md:mt-[50%] lg:mt-0"
//       >
//         {/*Tag box-with gradient border */}

//         <div className="inline-flex max-w-full rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] p-[3px] shadow-[0_0_15px_rgba(255,255,255,0.4)]">
//           <div className="flex h-10 items-center justify-center gap-2 rounded-full bg-black px-4 text-xs sm:text-sm tracking-wider whitespace-nowrap">
//             <i className="bx bx-diamond" />
//             <span>FOCUSED ON SOFTWARE AND WEB DEVELOPER</span>
//           </div>
//         </div>

//         {/*Main Heading*/}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
//           WHERE LOGIC MEETS <br />{" "}
//           <span className="text-[#e99b63]">CREATIVITY</span>
//         </h1>

//         {/*Description*/}
//         <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
//           I'm a BSIT student who believes great software starts with
//           understanding people. I build projects that solve real problems, with
//           clean code and thoughtful design at the core
//         </p>

//         {/*Button*/}
//         <div className="flex gap-4 mt-12 ">
//           <a
//             className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
//             href="#"
//           >
//             <i className="bx bx-link-external" /> View My Projects
//           </a>

//           <a
//             className=" flex gap-2 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
//             href="#"
//           >
//             Contact Me <i className="bx bx-envelope" />
//           </a>
//         </div>
//       </div>

//       {/*3D ROBOT*/}
//       <div className="absolute inset-x-0 top-0 h-[55vh] sm:h-[65vh] lg:inset-y-0 lg:left-[42%] lg:right-0 lg:h-full pointer-events-none">
//         <Spline
//           data-aos="fade-zoom-in"
//           data-aos-easing="ease-in-back"
//           data-aos-delay="300"
//           data-aos-offset="0"
//           className="h-full w-full"
//           scene="https://prod.spline.design/05IiMWU62WsRrT5U/scene.splinecode"
//         />
//       </div>
//     </main>
//   );
// };

// export default Hero;

import ScrollFloat from "./HeroSection/ScrollFloat";
import PixelTransition from "./HeroSection/PixelTransition";
import React from "react";

const Hero = () => {
  return (
    <main className="w-full min-h-screen p-6 sm:p-12 md:p-16 bg-[#0a0a0a] text-white flex flex-col gap-12 overflow-x-hidden">
      <p
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="font-mono font-light text-right text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500"
      >
        Antipolo, Rizal — Philippines
      </p>
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6">
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          className="flex flex-col leading-[0.8]"
        >
          <p className="font-grotesk font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter">
            SOFTWARE
          </p>
          <p className="font-grotesk font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter">
            DEVELOPER
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="flex flex-col items-end sm:text-right max-w-md"
        >
          <p className="font-mono font-light text-xs md:text-sm leading-relaxed tracking-wide text-gray-400">
            Crafting Robust Software | AI-Driven Workflows |
          </p>
          <p className="font-mono font-light text-xs md:text-sm leading-relaxed tracking-wide text-gray-400">
            User-Centric Engineering
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-8 items-stretch">
        <div data-aos="flip-left" className="w-full sm:w-[50%] lg:w-[58%]">
          <PixelTransition
            firstContent={
              <img
                src="/img/Renan.jpg"
                alt="default pixel transition content, a cat!"
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-2xl "
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <img
                  src="/img/pusa.jpg"
                  alt="default pixel transition content, a cat!"
                  className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-2xl "
                />
              </div>
            }
          />
          {/* <img
            src="/img/Renan.jpg"
            alt="Renan Jayson Genova"
            className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-2xl "
          /> */}
        </div>

        <div className="flex flex-col justify-between w-full sm:w-[45%] lg:w-[38%] py-2">
          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2500"
            className="flex flex-col items-end"
          >
            <p className="font-mono font-light text-right text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
              Full-Time Opportunities /
            </p>
            <p className="font-mono font-light text-right text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
              Freelance & Contract Projects
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
            className="flex flex-col items-end mt-12 sm:mt-0"
          >
            <p className="font-grotesk font-bold text-4xl md:text-6xl lg:text-8xl text-right leading-[0.8] tracking-tighter">
              RENAN JAYSON
            </p>
            <p className="font-grotesk font-bold text-4xl md:text-6xl lg:text-8xl text-right leading-[0.8] tracking-tighter">
              GENOVA
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-auto pt-8 border-t border-white/10">
        <p className="font-mono font-light italic text-xs md:text-sm leading-tight tracking-wider text-gray-400 max-w-2xl">
          “Leveraging advanced AI to amplify clean architecture and craft
          high-performance digital solutions.”
        </p>
      </div> */}

      <div className="mt-0 mb-0 sm:mt-12 sm:mb-12">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Developing high-performance applications through a blend of modern AI
          workflows and maintainable software design.
        </ScrollFloat>
      </div>
    </main>
  );
};

export default Hero;
