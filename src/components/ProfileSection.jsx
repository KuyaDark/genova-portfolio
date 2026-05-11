// // import React from "react";
// // import ProfileCard from "./ProfileCard";
// // import Experience from "./Experience";
// // import Education from "./Education";
// // import Information from "./Information";
// // import Technologies from "./Technologies";
// // import ScrambledText from "./ScrambledText ";
// // const ProfileSection = () => {
// //   return (
// //     <section
// //       className="
// //    w-[100%] min-h-screen p-6 mt-[300px]  mb-[300px] flex flex-col gap-4
// //   md:grid md:grid-cols-8 md:auto-rows-auto md:gap-6 md:p-12
// //   text-white bg-black overflow-hidden
// //   "
// //     >
// //       {/* 1. NAME CARD */}
// //       <div
// //         data-aos="zoom-in-up"
// //         data-aos-easing="linear"
// //         data-aos-duration="500"
// //         className="bg-[#111111] rounded-3xl p-8 lg:p-8 flex flex-col justify-end md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-1"
// //       >
// //         <ScrambledText
// //           className="scrambled-text-demo"
// //           radius={100}
// //           duration={1.2}
// //           speed={0.5}
// //           scrambleChars=".:"
// //         >

// //         </ScrambledText>
// //         <h1 className="font-bold text-white uppercase tracking-tight text-2xl md:text-3xl lg:text-5xl leading-[0.9]">
// //           Renan Jayson
// //           <br />
// //           R. Genova
// //         </h1>
// //       </div>

// //       {/* 2. PROFILE PICTURE*/}
// //       <div
// //         data-aos="zoom-in-up"
// //         data-aos-easing="linear"
// //         data-aos-duration="700"
// //         className="bg-[#111111] rounded-3xl overflow-hidden flex items-center justify-center md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-1"
// //       >
// //         <ProfileCard imageUrl="https://via.placeholder.com/400" />
// //       </div>

// //       {/* 3. EXPERIENCE CARD */}
// //       <div
// //         data-aos="zoom-in-up"
// //         data-aos-easing="linear"
// //         data-aos-duration="900"
// //         className="bg-[#111111] rounded-3xl p-6 md:col-span-3 md:row-span-5 md:col-start-6 md:row-start-1 overflow-y-auto border border-white/5"
// //       >
// //         <Experience />
// //       </div>

// //       {/* 4. BIO/INTRO CARD */}
// //       <div
// //         data-aos="zoom-in-up"
// //         data-aos-easing="linear"
// //         data-aos-duration="500"
// //         className=" bg-[#111111]  rounded-3xl p-6  justify-center md:col-span-3 md:row-span-2 md:row-start-4 md:col-start-1 border border-white/5"
// //       >
// //         <Information />
// //       </div>

// //       {/* 5. EDUCATION CARD (Fixed position) */}
// //       <div
// //         data-aos="zoom-in"
// //         data-aos-easing="linear"
// //         data-aos-duration="700"
// //         className=" bg-[#111111] rounded-3xl p-6 md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-4 overflow-y-auto border border-white/5"
// //       >
// //         <Education />
// //       </div>

// //       {/* 6. EMAIL CARD */}
// //       <div
// //         data-aos="zoom-in-up"
// //         data-aos-easing="linear"
// //         data-aos-duration="900"
// //         className="bg-[#111111] rounded-3xl p-6 flex flex-col justify-between md:col-start-1 md:col-span-3 md:row-start-6 md:row-span-1 group cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all duration-300"
// //       >
// //         <div className="flex justify-between items-center">
// //           <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
// //             Wanna get in touch?
// //           </p>
// //           <span className="text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
// //             <i className="bx bx-paper-plane" />
// //           </span>
// //         </div>
// //         <h2 className="text-2xl lg:text-4xl font-bold">EMAIL ME</h2>
// //       </div>

// //       {/* 7. TECHNOLOGIES CARD */}
// //       <div
// //         data-aos="zoom-in-up"
// //         data-aos-easing="linear"
// //         data-aos-duration="900"
// //         className=" bg-[#111111]  rounded-3xl p-6 md:col-span-3 md:col-start-6 md:row-span-1 md:row-start-6 border border-white/5"
// //       >
// //         <Technologies />
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProfileSection;

// import { useRef, useState, useEffect } from "react";
// import ScrollStack, { ScrollStackItem } from "./ExperienceSection/ScrollStack";

// import "boxicons/css/boxicons.min.css";
// import Spline from "@splinetool/react-spline";
// import TextType from "./ProfileSection/TextType";
// import Scroll from "./Scroll";
// import ProfileInformation from "./ProfileSection/ProfileInformation";

// const ProfileSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // stop observing once visible
//         }
//       },
//       { threshold: 0.3 }, // triggers when 30% of section is visible
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);
//   return (
//     <>
//       {/* Hero section with Spline */}
//       {/* <section
//         data-aos="zoom-in"
//         ref={sectionRef}
//         className="w-full min-h-screen p-6 sm:p-12 md:p-16 bg-[#0a0a0a] flex flex-col justify-center overflow-x-hidden"
//       >
//         <div className="flex flex-col">
//           <div className="w-full h-[40vh] md:h-screen md:relative">
//             <Spline
//               className="h-full w-full"
//               scene="https://prod.spline.design/zm4n8DKEUPUJxNpB/scene.splinecode"
//             />
//           </div>

//           <div className="md:absolute md:top-[40%] md:left-[75%] md:-translate-x-[60%] md:-translate-y-[60%] flex items-center justify-center">
//             {isVisible && (
//               <TextType
//                 text={[
//                   "Hi! I'm Byte 🤖 Let me walk you through my creator's journey.",
//                   "",
//                 ]}
//                 typingSpeed={50}
//                 pauseDuration={1500}
//                 showCursor
//                 cursorCharacter="_"
//                 texts={[
//                   "Welcome to React Bits! Good to see you!",
//                   "Build some amazing experiences!",
//                 ]}
//                 className="font-mono font-medium text-sm md:text-xl lg:text-2xl uppercase tracking-[0.2em] text-[#0a0a0a]"
//                 deletingSpeed={50}
//                 variableSpeedEnabled={false}
//                 variableSpeedMin={60}
//                 variableSpeedMax={120}
//                 cursorBlinkDuration={0.5}
//               />
//             )}
//           </div>
//           <Scroll />
//         </div>
//       </section> */}
//       <ProfileInformation />

//     </>
//   );
// };

// export default ProfileSection;

// import React from "react";
// import ProfileCard from "./ProfileCard";
// import Experience from "./Experience";
// import Education from "./Education";
// import Information from "./Information";
// import Technologies from "./Technologies";
// import ScrambledText from "./ScrambledText ";
// const ProfileSection = () => {
//   return (
//     <section
//       className="
//    w-[100%] min-h-screen p-6 mt-[300px]  mb-[300px] flex flex-col gap-4
//   md:grid md:grid-cols-8 md:auto-rows-auto md:gap-6 md:p-12
//   text-white bg-black overflow-hidden
//   "
//     >
//       {/* 1. NAME CARD */}
//       <div
//         data-aos="zoom-in-up"
//         data-aos-easing="linear"
//         data-aos-duration="500"
//         className="bg-[#111111] rounded-3xl p-8 lg:p-8 flex flex-col justify-end md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-1"
//       >
//         <ScrambledText
//           className="scrambled-text-demo"
//           radius={100}
//           duration={1.2}
//           speed={0.5}
//           scrambleChars=".:"
//         >

//         </ScrambledText>
//         <h1 className="font-bold text-white uppercase tracking-tight text-2xl md:text-3xl lg:text-5xl leading-[0.9]">
//           Renan Jayson
//           <br />
//           R. Genova
//         </h1>
//       </div>

//       {/* 2. PROFILE PICTURE*/}
//       <div
//         data-aos="zoom-in-up"
//         data-aos-easing="linear"
//         data-aos-duration="700"
//         className="bg-[#111111] rounded-3xl overflow-hidden flex items-center justify-center md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-1"
//       >
//         <ProfileCard imageUrl="https://via.placeholder.com/400" />
//       </div>

//       {/* 3. EXPERIENCE CARD */}
//       <div
//         data-aos="zoom-in-up"
//         data-aos-easing="linear"
//         data-aos-duration="900"
//         className="bg-[#111111] rounded-3xl p-6 md:col-span-3 md:row-span-5 md:col-start-6 md:row-start-1 overflow-y-auto border border-white/5"
//       >
//         <Experience />
//       </div>

//       {/* 4. BIO/INTRO CARD */}
//       <div
//         data-aos="zoom-in-up"
//         data-aos-easing="linear"
//         data-aos-duration="500"
//         className=" bg-[#111111]  rounded-3xl p-6  justify-center md:col-span-3 md:row-span-2 md:row-start-4 md:col-start-1 border border-white/5"
//       >
//         <Information />
//       </div>

//       {/* 5. EDUCATION CARD (Fixed position) */}
//       <div
//         data-aos="zoom-in"
//         data-aos-easing="linear"
//         data-aos-duration="700"
//         className=" bg-[#111111] rounded-3xl p-6 md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-4 overflow-y-auto border border-white/5"
//       >
//         <Education />
//       </div>

//       {/* 6. EMAIL CARD */}
//       <div
//         data-aos="zoom-in-up"
//         data-aos-easing="linear"
//         data-aos-duration="900"
//         className="bg-[#111111] rounded-3xl p-6 flex flex-col justify-between md:col-start-1 md:col-span-3 md:row-start-6 md:row-span-1 group cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all duration-300"
//       >
//         <div className="flex justify-between items-center">
//           <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
//             Wanna get in touch?
//           </p>
//           <span className="text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
//             <i className="bx bx-paper-plane" />
//           </span>
//         </div>
//         <h2 className="text-2xl lg:text-4xl font-bold">EMAIL ME</h2>
//       </div>

//       {/* 7. TECHNOLOGIES CARD */}
//       <div
//         data-aos="zoom-in-up"
//         data-aos-easing="linear"
//         data-aos-duration="900"
//         className=" bg-[#111111]  rounded-3xl p-6 md:col-span-3 md:col-start-6 md:row-span-1 md:row-start-6 border border-white/5"
//       >
//         <Technologies />
//       </div>
//     </section>
//   );
// };

// export default ProfileSection;

import { useRef, useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ExperienceSection/ScrollStack";

import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import TextType from "./ProfileSection/TextType";
import Scroll from "./Scroll";
import ProfileInformation from "./ProfileSection/ProfileInformation";

const ProfileSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <ProfileInformation />
    </>
  );
};

export default ProfileSection;
