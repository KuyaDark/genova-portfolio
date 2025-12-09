
// import { useState } from "react";
// import SimpleNavbar from "./shocaseNav";
// import { useNavigate } from "react-router-dom";
// import "./global.css";


// function Showcase() {
//   const [activeSection, setActiveSection] = useState("Projects");
//   const [openPic, setOpenPic] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const certificates = [
//     {
//       src: "./kotsekcertificate.jpg",
//       title: "CATALYST COLLIDER DESIGN CHALLENGE",
//       date: "June 5, 2025",
//       issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
//     },
//     {
//       src: "./deanlister.png",
//       title: "DEAN’S LISTER",
//       date: "May 6, 2025",
//       issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
//     },
//     {
//       src: "./UIUX.png",
//       title: "UI/UX DESIGN COMPETITION",
//       date: "Issued date: December 2, 2024",
//       issuer: "JUNIOR PHILIPPINES COMPUTER SCIENCE(JPCS) TIP-QC",
//     },
//     {
//       src: "./2ndSem2324.png",
//       title: "MERIT CERTIFICATE",
//       date: "Issued date: June 6, 2024",
//       issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
//     },

//     {
//       src: "./1stSem2324.png",
//       title: "MERIT CERTIFICATE",
//       date: "Issued date: March 20, 2024",
//       issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
//     },
//     {
//       src: "./2ndSem2223.png",
//       title: "MERIT CERTIFICATE",
//       date: "Issued date: August 15, 2023",
//       issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
//     },
//   ];

//   const technologies = [
//     {
//       src: "./html.png",
//       title: "HTML",
//       description: "Markup language",
//     },
//     {
//       src: "./css.png",
//       title: "CSS",
//       description: "Styling language",
//     },
//     {
//       src: "./js.png",
//       title: "JavaScript",
//       description: "Programming language",
//     },
//     {
//       src: "./bootstrap.png",
//       title: "Bootstrap",
//       description: "CSS framework",
//     },

//     {
//       src: "./react.png",
//       title: "React",
//       description: "JavaScript library",
//     },
//     {
//       src: "./nextjs.png",
//       title: "NextJS",
//       description: "React Framework",
//     },
//     {
//       src: "./ts.png",
//       title: "TypeScript",
//       description: "Programming language",
//     },
//     {
//       src: "./tailwind.png",
//       title: "Tailwind CSS",
//       description: "CSS framework",
//     },
//     {
//       src: "./figma.png",
//       title: "Figma",
//       description: "Design tool",
//     },
//     {
//       src: "./vscode.png",
//       title: "Visual Studio",
//       description: "Code editor / IDE",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-8 mt-24 justify-center items-center w-full">
//       {/* Header */}
//       <div className="w-[70%] flex flex-col justify-center items-center text-center block-zoom">
//         <h1 className="overpass text-3xl font-bold mb-6">Portfolio Showcase</h1>
//         <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
//           Here’s the showcase of my work — featuring my projects, certificates,
//           and the technologies I use. This section highlights my skills, tools,
//           and accomplishments that represent my journey.
//         </p>
//       </div>

//       {/* Navbar */}
//       <SimpleNavbar
//         items={[
//           { label: "Projects", href: "/projects" },
//           { label: "Certificates", href: "/certificates" },
//           { label: "Technologies", href: "/tech-stack" },
//         ]}
//         activeItem={activeSection}
//         onItemClick={(label) => setActiveSection(label)}
//       />

//  {activeSection === "Projects" && (
//   <div className="flex flex-col w-full">
//     {/* CATALYST COLLIDER Project */}
//     <div className="flex flex-col md:flex-row w-full gap-6 md:p-24 p-6  ">
//       {/* Text Section */}
//       <div className="flex-1 flex flex-col gap-4 block-left">
//         <div className="flex flex-col items-start gap-1">
//           <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
//             CATALYST
//           </h1>
//           <div className="flex items-center gap-2 flex-wrap">
//             <h1 className="text-[#FFC20F] font-bold text-2xl sm:text-3xl md:text-4xl">
//               COLLIDER
//             </h1>
//             <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
//               C²
//             </h1>
//           </div>
//           <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
//             DESIGN CHALLENGE 2024
//           </h1>
//         </div>

//         <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
//           Special Project
//         </p>
//         <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
//           C² Design Challenge 2024 at the Technological Institute of the
//           Philippines – Quezon City. We proposed a project called Kotsek,
//           a system that enhances parking monitoring by eliminating manual
//           vehicle entry and exit records. Using YOLO and OCR, it detects
//           vehicles and their license plates, then automatically assigns
//           them to available parking spots.
//         </p>

//         <button onClick={()=> navigate("./kotsek")} className="group flex items-center justify-center gap-2 border-2 border-white rounded-2xl w-full sm:w-[158px] px-4 py-2 hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer">
//           <span className="text-white group-hover:text-blue-800 font-medium">
//             Details
//           </span>
//         </button>
//       </div>

//       {/* Video Section */}
//       <div className="flex-1 w-full border-white border p-4 rounded-2xl text-white flex flex-col items-center gap-2 block-right">
//         <video
//           className="w-full h-auto rounded-lg object-cover"
//           controls
//           autoPlay
//           muted
//           loop
//         >
//           <source src="./KotsekVideo.mp4" type="video/mp4" />
//         </video>
//         <h1 className="sans-serif text-white text-base sm:text-lg md:text-xl text-center">
//           Kotsek: Integrating YOLO v8 and OCR Technology for Real-Time Vehicle Detection in Parking Monitoring
//         </h1>
//       </div>
//     </div>

//     {/* COMMISSION ON ALTAR SERVER Project */}
//     <div className="flex flex-col md:flex-row w-full gap-6 md:p-24 p-6">
//       {/* Text Section */}
//       <div className="flex-1 flex flex-col gap-4 block-left">
//         <div className="flex flex-col items-start gap-1">
//           <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
//             COMMISSION ON ALTAR SERVER RECORDS AND ATTENDANCE
//           </h1>
//         </div>

//         <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
//           Personal Project
//         </p>
//         <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
//           A web-based system designed to digitize organizational records
//           and manage member attendance, reducing paper usage while making
//           information easy to access, update, and maintain.
//         </p>

//         <button onClick={()=> navigate("./cas")}  className="group flex items-center justify-center gap-2 border-2 border-white rounded-2xl w-full sm:w-[158px] px-4 py-2 hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer">
//           <span className="text-white group-hover:text-blue-800 font-medium">
//             Details
//           </span>
//         </button>
//       </div>

//       {/* Video Section */}
//       <div className="flex-1 w-full border-white border p-4 rounded-2xl text-white flex flex-col items-center gap-2 block-right">
//         <video
//           className="w-full h-auto rounded-lg object-cover"
//           controls
//           autoPlay
//           muted
//           loop
//         >
//           <source src="./CASwebsite.mp4" type="video/mp4" />
//         </video>
//         <h1 className="sans-serif text-white text-base sm:text-lg md:text-xl text-center">
//           Commission of Altar Servers Information & Attendance System (CAS-IAS)
//         </h1>
//       </div>
//     </div>
//   </div>
// )}


//       {activeSection === "Certificates" && (
//         <div className="flex w-full p-6 justify-center">
//           <div className="flex flex-wrap gap-4 justify-center">
//             {certificates.map((cert, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col gap-2 p-4 w-full sm:w-[300px] md:w-[414px] 
//                            bg-gray-900 rounded-xl 
//                            transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
//               >
//                 <div
//                   className="relative flex justify-center items-center h-[200px] border-2 border-white rounded-xl 
//                              overflow-hidden cursor-pointer transition-colors duration-300 hover:border-blue-400"
//                   onClick={() => setOpenPic(cert.src)}
//                 >
//                   <img
//                     src={cert.src}
//                     alt={cert.title}
//                     className="w-full h-full object-contain"
//                   />
//                   <div
//                     className="absolute inset-0 bg-black/60 opacity-0 
//                                   flex items-center justify-center text-white text-xl font-bold
//                                   transition-opacity duration-300 hover:opacity-100"
//                   >
//                     View
//                   </div>
//                 </div>

//                 <h1 className="Overpass font-bold text-white text-base sm:text-lg md:text-xl">
//                   {cert.title}
//                 </h1>
//                 <small className="sans-serif text-white text-sm sm:text-base md:text-lg">
//                   Issued date: {cert.date}
//                 </small>
//                 <small className="sans-serif text-white text-sm sm:text-base md:text-lg">
//                   Issued by: {cert.issuer}
//                 </small>
//               </div>
//             ))}
//           </div>

//           {openPic && (
//             <div
//               className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
//               onClick={() => setOpenPic(null)}
//             >
//               <img
//                 src={openPic}
//                 alt=""
//                 className="max-w-[90%] max-h-[90%] rounded-lg"
//               />
//             </div>
//           )}
//         </div>
//       )}

//       {activeSection === "Technologies" && (
//         <div className="flex w-full p-6 justify-center">
//           <div className="flex flex-wrap gap-4 justify-center">
//             {technologies.map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="relative flex items-center gap-4 border rounded-lg p-4 border-white/30 
//                  group overflow-hidden cursor-pointer transform transition-all duration-300 
//                  hover:scale-105 hover:shadow-xl
//                  w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//               >
//                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

//                 <div
//                   className="w-[100px] h-[100px] flex items-center justify-center 
//                   bg-white/10 backdrop-blur-sm rounded-lg p-2"
//                 >
//                   <img
//                     className="w-[80px] h-[80px] object-contain"
//                     src={tech.src}
//                     alt=""
//                   />
//                 </div>

//                 <div className="relative">
//                   <h1 className="overpass font-bold text-white text-base sm:text-md md:text-lg">
//                     {tech.title}
//                   </h1>
//                   <small className="overpass text-white text-base md:text-sm">
//                     {tech.description}
//                   </small>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Showcase;




import { useState, useEffect } from "react";
import SimpleNavbar from "./shocaseNav";
import { useNavigate } from "react-router-dom";
import "./global.css";

function Showcase() {
  const [activeSection, setActiveSection] = useState("Projects");
  const [openPic, setOpenPic] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(0);
  const navigate = useNavigate();

  const certificates = [
    { src: "./kotsekcertificate.jpg", title: "CATALYST COLLIDER DESIGN CHALLENGE", date: "June 5, 2025", issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES" },
    { src: "./deanlister.png", title: "DEAN’S LISTER", date: "May 6, 2025", issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES" },
    { src: "./UIUX.png", title: "UI/UX DESIGN COMPETITION", date: "Issued date: December 2, 2024", issuer: "JUNIOR PHILIPPINES COMPUTER SCIENCE(JPCS) TIP-QC" },
    { src: "./2ndSem2324.png", title: "MERIT CERTIFICATE", date: "Issued date: June 6, 2024", issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES" },
    { src: "./1stSem2324.png", title: "MERIT CERTIFICATE", date: "Issued date: March 20, 2024", issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES" },
    { src: "./2ndSem2223.png", title: "MERIT CERTIFICATE", date: "Issued date: August 15, 2023", issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES" },
  ];

  const technologies = [
    { src: "./html.png", title: "HTML", description: "Markup language" },
    { src: "./css.png", title: "CSS", description: "Styling language" },
    { src: "./js.png", title: "JavaScript", description: "Programming language" },
    { src: "./bootstrap.png", title: "Bootstrap", description: "CSS framework" },
    { src: "./react.png", title: "React", description: "JavaScript library" },
    { src: "./nextjs.png", title: "NextJS", description: "React Framework" },
    { src: "./ts.png", title: "TypeScript", description: "Programming language" },
    { src: "./tailwind.png", title: "Tailwind CSS", description: "CSS framework" },
    { src: "./figma.png", title: "Figma", description: "Design tool" },
    { src: "./vscode.png", title: "Visual Studio", description: "Code editor / IDE" },
  ];

  // Animate pop-in for Certificates and Technologies
  useEffect(() => {
    let count = 0;
    const items = activeSection === "Certificates" ? certificates.length : activeSection === "Technologies" ? technologies.length : 0;
    if (items > 0) {
      const interval = setInterval(() => {
        count++;
        setVisibleItems(count);
        if (count >= items) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    } else {
      setVisibleItems(0);
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col gap-8 mt-24 justify-center items-center w-full">
      {/* Header */}
      <div className="w-[70%] flex flex-col justify-center items-center text-center block-zoom">
        <h1 className="overpass text-3xl font-bold mb-6">Portfolio Showcase</h1>
        <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
          Here’s the showcase of my work — featuring my projects, certificates,
          and the technologies I use. This section highlights my skills, tools,
          and accomplishments that represent my journey.
        </p>
      </div>

      {/* Navbar */}
      <SimpleNavbar
        items={[
          { label: "Projects", href: "/projects" },
          { label: "Certificates", href: "/certificates" },
          { label: "Technologies", href: "/tech-stack" },
        ]}
        activeItem={activeSection}
        onItemClick={(label) => setActiveSection(label)}
      />

      {/* Projects Section */}
      {activeSection === "Projects" && (
        <div className="flex flex-col w-full">
          {/* CATALYST COLLIDER Project */}
          <div className="flex flex-col md:flex-row w-full gap-6 md:p-24 p-6">
            <div className="flex-1 flex flex-col gap-4 block-left">
              <div className="flex flex-col items-start gap-1">
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">CATALYST</h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-[#FFC20F] font-bold text-2xl sm:text-3xl md:text-4xl">COLLIDER</h1>
                  <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">C²</h1>
                </div>
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">DESIGN CHALLENGE 2024</h1>
              </div>
              <p className="sans-serif text-white text-base sm:text-lg md:text-xl">Special Project</p>
              <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
                C² Design Challenge 2024 at the Technological Institute of the
                Philippines – Quezon City. We proposed a project called Kotsek,
                a system that enhances parking monitoring by eliminating manual
                vehicle entry and exit records. Using YOLO and OCR, it detects
                vehicles and their license plates, then automatically assigns
                them to available parking spots.
              </p>
              <button onClick={()=> navigate("./kotsek")} className="group flex items-center justify-center gap-2 border-2 border-white rounded-2xl w-full sm:w-[158px] px-4 py-2 hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-white group-hover:text-blue-800 font-medium">Details</span>
              </button>
            </div>
            <div className="flex-1 w-full border-white border p-4 rounded-2xl text-white flex flex-col items-center gap-2 block-right">
              <video className="w-full h-auto rounded-lg object-cover" controls autoPlay muted loop>
                <source src="./KotsekVideo.mp4" type="video/mp4" />
              </video>
              <h1 className="sans-serif text-white text-base sm:text-lg md:text-xl text-center">
                Kotsek: Integrating YOLO v8 and OCR Technology for Real-Time Vehicle Detection in Parking Monitoring
              </h1>
            </div>
          </div>

          {/* COMMISSION ON ALTAR SERVER Project */}
          <div className="flex flex-col md:flex-row w-full gap-6 md:p-24 p-6">
            <div className="flex-1 flex flex-col gap-4 block-left">
              <div className="flex flex-col items-start gap-1">
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                  COMMISSION ON ALTAR SERVER RECORDS AND ATTENDANCE
                </h1>
              </div>
              <p className="sans-serif text-white text-base sm:text-lg md:text-xl">Personal Project</p>
              <p className="sans-serif text-white text-base sm:text-lg md:text-xl">
                A web-based system designed to digitize organizational records
                and manage member attendance, reducing paper usage while making
                information easy to access, update, and maintain.
              </p>
              <button onClick={()=> navigate("./cas")} className="group flex items-center justify-center gap-2 border-2 border-white rounded-2xl w-full sm:w-[158px] px-4 py-2 hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-white group-hover:text-blue-800 font-medium">Details</span>
              </button>
            </div>
            <div className="flex-1 w-full border-white border p-4 rounded-2xl text-white flex flex-col items-center gap-2 block-right">
              <video className="w-full h-auto rounded-lg object-cover" controls autoPlay muted loop>
                <source src="./CASwebsite.mp4" type="video/mp4" />
              </video>
              <h1 className="sans-serif text-white text-base sm:text-lg md:text-xl text-center">
                Commission of Altar Servers Information & Attendance System (CAS-IAS)
              </h1>
            </div>
          </div>
        </div>
      )}

       {activeSection === "Certificates" && (
        <div className="flex w-full p-6 justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 p-4 w-full sm:w-[300px] md:w-[414px] 
                           bg-gray-900 rounded-xl 
                           transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10
                           ease-out
                            ${idx < visibleItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
              >
                <div
                  className="relative flex justify-center items-center h-[200px] border-2 border-white rounded-xl 
                             overflow-hidden cursor-pointer transition-colors duration-300 hover:border-blue-400"
                  onClick={() => setOpenPic(cert.src)}
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 
                                  flex items-center justify-center text-white text-xl font-bold
                                  transition-opacity duration-300 hover:opacity-100"
                  >
                    View
                  </div>
                </div>

                <h1 className="Overpass font-bold text-white text-base sm:text-lg md:text-xl">
                  {cert.title}
                </h1>
                <small className="sans-serif text-white text-sm sm:text-base md:text-lg">
                  Issued date: {cert.date}
                </small>
                <small className="sans-serif text-white text-sm sm:text-base md:text-lg">
                  Issued by: {cert.issuer}
                </small>
              </div>
            ))}
          </div>

          {openPic && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
              onClick={() => setOpenPic(null)}
            >
              <img
                src={openPic}
                alt=""
                className="max-w-[90%] max-h-[90%] rounded-lg"
              />
            </div>
          )}
        </div>
      )}

{activeSection === "Technologies" && (
         <div className="flex w-full p-6 justify-center">
           <div className="flex flex-wrap gap-4 justify-center">
             {technologies.map((tech, idx) => (
               <div
                 key={idx}
                 className={`relative flex items-center gap-4 border rounded-lg p-4 border-white/30 
                  group overflow-hidden cursor-pointer transform transition-all duration-300 
                  hover:scale-105 hover:shadow-xl
                  w-full sm:w-1/2 md:w-1/3 lg:w-1/4  ${idx < visibleItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
               >
                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

                 <div
                   className="w-[100px] h-[100px] flex items-center justify-center 
                   bg-white/10 backdrop-blur-sm rounded-lg p-2"
                 >
                   <img
                     className="w-[80px] h-[80px] object-contain"
                     src={tech.src}
                     alt=""
                   />
                 </div>

                 <div className="relative">
                   <h1 className="overpass font-bold text-white text-base sm:text-md md:text-lg">
                     {tech.title}
                   </h1>
                   <small className="overpass text-white text-base md:text-sm">
                     {tech.description}
                   </small>
                 </div>
              </div>
            ))}
          </div>
         </div>
      )}

    </div>
  );
}

export default Showcase;
