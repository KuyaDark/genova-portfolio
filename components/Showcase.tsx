

import { useState, useEffect } from "react";
import SimpleNavbar from "./shocaseNav";
import "./global.css";

function Showcase() {
  const [activeSection, setActiveSection] = useState("Projects");
  const [openPic, setOpenPic] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(0);

  const certificates = [
    {
      src: "./kotsekcertificate.jpg",
      title: "CATALYST COLLIDER DESIGN CHALLENGE",
      date: "June 5, 2025",
      issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
    },
    {
      src: "./deanlister.png",
      title: "DEAN’S LISTER",
      date: "May 6, 2025",
      issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
    },
    {
      src: "./UIUX.png",
      title: "UI/UX DESIGN COMPETITION",
      date: "Issued date: December 2, 2024",
      issuer: "JUNIOR PHILIPPINES COMPUTER SCIENCE(JPCS) TIP-QC",
    },
    {
      src: "./2ndSem2324.png",
      title: "MERIT CERTIFICATE",
      date: "Issued date: June 6, 2024",
      issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
    },
    {
      src: "./1stSem2324.png",
      title: "MERIT CERTIFICATE",
      date: "Issued date: March 20, 2024",
      issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
    },
    {
      src: "./2ndSem2223.png",
      title: "MERIT CERTIFICATE",
      date: "Issued date: August 15, 2023",
      issuer: "TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES",
    },
  ];

  const technologies = [
    { src: "./html.png", title: "HTML", description: "Markup language" },
    { src: "./css.png", title: "CSS", description: "Styling language" },
    {
      src: "./js.png",
      title: "JavaScript",
      description: "Programming language",
    },
    {
      src: "./bootstrap.png",
      title: "Bootstrap",
      description: "CSS framework",
    },
    { src: "./react.png", title: "React", description: "JavaScript library" },
    { src: "./nextjs.png", title: "NextJS", description: "React Framework" },
    {
      src: "./ts.png",
      title: "TypeScript",
      description: "Programming language",
    },
    {
      src: "./tailwind.png",
      title: "Tailwind CSS",
      description: "CSS framework",
    },
    { src: "./figma.png", title: "Figma", description: "Design tool" },
    {
      src: "./vscode.png",
      title: "Visual Studio",
      description: "Code editor / IDE",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Kotsek: Integrating YOLO v8 and OCR for Real-Time Vehicle Detection",
      tech: ["NextJS", "TailwindCSS", "Python", "Supabase", "Docker"],
      img: "/KotsekPic.png",
    },
    {
      number: "02",
      title: "CAS - Records and Attendance",
      tech: ["NextJS", "TailwindCSS", "Firebase"],
      img: "/CASwebsite.png",
    },
    {
      number: "03",
      title: "Mobile Computing: FlowState",
      tech: ["React Native", "Firabase",  ],
      img: "/Flowstate.png",
    },
    {
      number: "04",
      title: "Mobile Application: HighPie",
      tech: ["Ionic Angular", "Firebase"],
      img: "/HighPie.png",
    },
    {
      number: "05",
     title: "System Analysis and Design: Bread Winner",
      tech: ["HTML", "CSS", "Bootstrap", "PHP"],
      img: "/breadWinner.png",
    },
    {
      number: "06",
      title: "Web System: Castra Flores",
     tech: ["HTML", "CSS", "Bootstrap", "PHP"],
      img: "/castraFlores.png",
    },
  ];

  // Animate pop-in for Certificates and Technologies
  useEffect(() => {
    let count = 0;
    const items =
      activeSection === "Certificates"
        ? certificates.length
        : activeSection === "Technologies"
        ? technologies.length
        : 0;
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
        <div className="flex flex-wrap justify-center w-full p-6">
          {projects.map((proj, idx) => {
            const isEven = (idx + 1) % 2 === 0;

            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center border border-gray-200 p-4 w-full sm:w-[calc(33.333%-1rem)] overflow-hidden"
              >
                <div className="w-full transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                  {/* Image first for even-numbered cards */}
                  {isEven && (
                    <img
                      className="w-3/4 sm:w-full h-auto rounded-md mt-2"
                      src={proj.img}
                      alt={`Project ${proj.number}`}
                    />
                  )}

                  {/* Number and Title */}
                  <div className="flex flex-col md:flex-row justify-between w-full mb-2 mt-2 gap-4">
                    <h1 className="sans-serif font-bold text-4xl sm:text-5xl md:text-6xl text-center md:text-left">
                      {proj.number}
                    </h1>
                    <div className="mt-2 md:mt-0">
                      <h1 className="sans-serif font-semibold text-base sm:text-lg md:text-xl text-center md:text-left">
                        {proj.title}
                      </h1>

                      {/* Tech stack badges */}
                      {proj.tech && proj.tech.length > 0 && (
                        <div className="flex gap-2 mt-1 flex-wrap justify-center md:justify-start">
                          {proj.tech.map((t, i) => (
                            <div
                              key={i}
                              className="inline-block px-2 py-1 text-xs sm:text-sm rounded-lg bg-white/20 backdrop-blur-md text-white"
                            >
                              {t}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Image last for odd-numbered cards */}
                  {!isEven && (
                    <img
                      className="w-3/4 sm:w-full h-auto rounded-md mt-2"
                      src={proj.img}
                      alt={`Project ${proj.number}`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeSection === "Certificates" && (
        <div className="flex w-full p-6 justify-center ">
          <div className="flex flex-wrap gap-4 justify-center ">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 p-4 w-full sm:w-[300px] md:w-[414px] 
                           bg-gray-900 rounded-xl 
                           transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10
                           ease-out
                            ${
                              idx < visibleItems
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-6"
                            }`}
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
                  w-full sm:w-1/2 md:w-1/3 lg:w-1/4  ${
                    idx < visibleItems
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-6"
                  }`}
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

