// import React, { useEffect, useState } from "react";
// import DarkVeil from "../animation/dark-viel";
// import "./App.css";
// import TrueFocus from "../animation/true-focus";
// import Navbar from "../components/navbar";
// import CircularText from "../animation/circular-text";
// import AboutMe from "../components/aboutMe";

// const App = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 100); // small delay
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="bg-black">
//       <div
//         className={` absolute bg-black sticky top-0 inset-0 transition-all duration-1000 ${
//           loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
//         }`}
//       >
//         <Navbar />
//       </div>
//      <div className="relative w-full h-screen overflow-hidden">
//         <DarkVeil />

//         <div
//           className={`absolute flex flex-col inset-0 items-center justify-center transition-all duration-1000 ${
//             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//           }`}
//         >
//           <div className="flex flex-col justify-between h-[120px]">
//             <h1 className="overpass font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
//               Welcome to My portfolio
//             </h1>
//             <TrueFocus
//               manualMode={false}
//               blurAmount={5}
//               animationDuration={2}
//             />
//           </div>
//         </div>

//         <div
//           className={`absolute left-10 bottom-10 z-10  transition-all duration-1000 ${
//             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//           }`}
//         >
//           <CircularText
//             text="PERSONAL*PORTFOLIO*"
//             onHover="speedUp"
//             spinDuration={20}
//             className="sans-serif "
//           />
//         </div>
//       </div>

//       <div className="bg-[#000000] ">
//         <AboutMe />
//       </div>
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import DarkVeil from "../animation/dark-viel";
import "./App.css";
import TrueFocus from "../animation/true-focus";
import Navbar from "../components/navbar";

import AboutMe from "../components/aboutMe";
import EducationalBackground from "../components/educationalbg";
import Showcase from "../components/Showcase";
import ContactMe from "../components/contactMe";
import Footer from "../components/footer";


const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="bg-black text-white">
      <div
        className={`sticky top-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-white/10 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full min-h-[calc(100vh-6rem)] overflow-hidden flex items-center justify-center">
        <DarkVeil />

        {/* Centered Heading */}
        <div
          className={`gap-12 absolute flex flex-col items-center  text-center transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="overpass font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to My Portfolio
          </h1>
          <TrueFocus manualMode={false} blurAmount={5} animationDuration={2} />
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => {
                const target = document.getElementById("showcase");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group flex items-center justify-center gap-2 border-2 border-white rounded-xl w-[158px] px-4 py-2 
                             hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="text-white group-hover:text-blue-800 font-medium">
                View Project
              </span>
            </button>
    
            <button
              onClick={() => {
                const target = document.getElementById("contact");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group flex items-center justify-center gap-2 border-2 border-white rounded-xl w-[158px] px-4 py-2 
                             hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="text-white group-hover:text-blue-800 font-medium">
                Contact
              </span>
            </button>
          </div>
        </div>

        {/* Circular Text in Bottom-Left */}
        <div
          className={`absolute left-10 bottom-10 z-10 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >

        </div>
      </div>

      {/* About Section */}
      <div id="aboutMe" className="bg-black px-6 sm:px-12 md:px-21 lg:px-24">
        <AboutMe />
      </div>
      <div className="flex flex-col mt-26 gap-26">
        <div>
          <EducationalBackground />
        </div>
        <div id="showcase">
          <Showcase />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
