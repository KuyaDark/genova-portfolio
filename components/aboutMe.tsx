// import SocialButtons from "./socmedIcons";
// import { FaDownload } from "react-icons/fa";
// import Lanyard from "./Lanyard";
// import ScrambledText from "./ScrambledText";

// function AboutMe() {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-2 w-full pt-26 pb-26">
//       <div className="flex-1 flex justify-center">
//         <Lanyard position={[0, 0, 14]} gravity={[0, -20, 0]} />
//       </div>

//       <div className="flex-1 flex flex-col gap-12 p-6  ">
//         <p className="overpass  text-white  text-base sm:text-lg md:text-xl">
//           About Me
//         </p>

//         <ScrambledText
//           className="overpass font-bold text-white text-2xl sm:text-3xl md:text-4xl"
//           radius={100}
//           duration={1.2}
//           speed={2}
//           scrambleChars=".:" // ✅ string
//         >
//           Hi! I’m Renan Jayson R. Genova
//         </ScrambledText>

//         <ScrambledText
//           className="font-sans text-white text-base sm:text-lg md:text-xl"
//           radius={100}
//           duration={1.2}
//           speed={0.5}
//           scrambleChars=".:" // ✅ string
//         >
//            I'm a 4th year student pursuing a Bachelor of Science in Information
//           Technology (BSIT) at the Technological Institute of the Philippines –
//           Quezon City (TIP-QC). I'm an aspiring front-end developer with
//           increasing expertise in creating visually appealing, user-friendly,
//           and responsive web interfaces.
//         </ScrambledText>

//         <SocialButtons />

//         <button
//           className="group flex items-center justify-center gap-2 border-2 border-white rounded-2xl w-[158px] px-4 py-2
//                    hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
//         >
//           <span className="text-white group-hover:text-blue-800 font-medium">
//             My CV
//           </span>
//           <FaDownload className="text-white group-hover:text-blue-800 text-xl transition-colors duration-300" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

import SocialButtons from "./socmedIcons";
import { FaDownload } from "react-icons/fa";
import ScrambledText from "./ScrambledText";
import GlassProfileCard from "./ProfileCard";
import "./global.css";

function AboutMe() {

    const handleDownload = () =>{
      const link = document.createElement("a");
      link.href = "/Renan_Jayson_Genova_CV.pdf";
      link.download = "/Renan_Jayson_Genova_CV.pdf";
      link.click();
    }
  
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full px-4 sm:px-8 md:px-16 py-20">
      <div className="flex-1 z-10 flex justify-center items-center min-h-[300px] block-left">
        {/* <Lanyard position={[0, 0, 14]} gravity={[0, -30, 0]} /> */}
        <GlassProfileCard imageUrl="/pictureNiRenan.png" />
      </div>

      <div className="flex-1 flex flex-col gap-8 max-w-xl text-center md:text-left block-right">
        <p className="overpass text-white text-lg sm:text-xl md:text-2xl">
          About Me
        </p>

        <ScrambledText
          className="overpass font-bold text-white 
                     text-2xl sm:text-3xl md:text-4xl block-animation"
          radius={100}
          duration={1.2}
          speed={2}
          scrambleChars=".:"
        >
          Hi! I’m Renan Jayson R. Genova
        </ScrambledText>

        <ScrambledText
          className="font-sans text-white text-base sm:text-lg md:text-xl leading-relaxed wrap-break-word"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          I'm a 4th year student pursuing a Bachelor of Science in Information
          Technology (BSIT) at the Technological Institute of the Philippines –
          Quezon City (TIP-QC). I'm an aspiring front-end developer with
          increasing expertise in creating visually appealing, user-friendly,
          and responsive web interfaces.
        </ScrambledText>

        <div className="flex justify-center md:justify-start">
          <SocialButtons />
        </div>

        <div className="flex justify-center md:justify-start">
          <button
          type="button"
          onClick={handleDownload}
            className="group flex items-center justify-center gap-2 border-2 border-white 
                       rounded-2xl px-5 py-2 w-fit
                       hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="text-white group-hover:text-blue-800 font-medium">
              My CV
            </span>
            <FaDownload className="text-white group-hover:text-blue-800 text-xl transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
