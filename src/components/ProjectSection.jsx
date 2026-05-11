// import { useCallback, useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
// import { SlShareAlt } from "react-icons/sl";

// const projects = [
//   {
//     id: 1,
//     title: "Kotsek",
//     imageSrc: "/img/KotsekPic.png",
//     tag: "Featured Project",
//     role: "Front-End Developer",
//     deployment: "Local",
//     technologies: ["Next.js", "Tailwind", "TypeScript", "Python", "Supabase"],
//     images: [
//       { src: "/img/KotsekPic.png", alt: "Kotsek screenshot 1" },
//       { src: "/img/KotsekPic2.png", alt: "Kotsek screenshot 2" },
//       { src: "/img/KotsekPic3.png", alt: "Kotsek screenshot 3" },
//     ],
//     description:
//       "Kotsek is an AI-driven smart parking monitoring system originally proposed for the C2 Design Challenge 2024 at the Technological Institute of the Philippines - Quezon City. The project enhances parking management by eliminating the need for manual entry and exit records. By leveraging YOLOv8 for real-time vehicle detection and OCR for license plate recognition, Kotsek automates the tracking process through existing CCTV infrastructure.",
//   },
//   {
//     id: 2,
//     title: "Bread Winner",
//     imageSrc: "/img/breadWinner.png",
//     tag: "Featured Project",
//     role: "Front-End Developer",
//     deployment: "Local",
//     technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
//     images: [
//       { src: "/img/breadWinner.png", alt: "Bread Winner screenshot" },
//       { src: "/img/breadWinner2.png", alt: "Bread Winner screenshot" },
//       { src: "/img/breadWinner3.png", alt: "Bread Winner screenshot" },
//     ],
//     description:
//       "This project was built during a System Analysis and Design course, and Breadwinner is an e-commerce platform designed to bridge the gap between old-world baking traditions and modern digital convenience. Instead of just being a static site, Breadwinner serves as a fully functional online storefront for a family-owned bakery that prides itself on the ancient art of sourdough and long-fermentation techniques. The project focuses on creating a seamless user experience where customers can learn about the heritage of the brand—from their use of natural levains to locally sourced stone-ground flours—and then directly purchase their daily baked goods. By applying rigorous systems analysis, the site balances a warm, rustic aesthetic with a structured, reliable checkout process for the community.",
//   },
//   {
//     id: 3,
//     title: "Castra Flores",
//     imageSrc: "/img/castraFlores.png",
//     tag: "Featured Project",
//     role: "Front-End Developer",
//     deployment: "Local",
//     technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
//     images: [
//       { src: "/img/castraFlores.png", alt: "Castra Flores screenshot" },
//       { src: "/img/castraFlores2.png", alt: "Castra Flores screenshot" },
//       { src: "/img/castraFlores3.png", alt: "Castra Flores screenshot" },
//     ],
//     description:
//       "This project was built during a Web Systems course, and Castra Flores is an e-commerce website designed to digitize the experience of a boutique flower shop. Rather than a simple gallery, Castra Flores serves as a functional online store where users can browse and purchase a variety of floral arrangements and bouquets. The project emphasizes a clean, elegant user interface that allows customers to explore different floral collections, manage a shopping cart, and navigate a streamlined checkout process. By applying web system principles, the site ensures a responsive and reliable platform that connects local flower enthusiasts with high-quality, curated blooms for every occasion.",
//   },
//   {
//     id: 4,
//     title: "CAS Website",
//     imageSrc: "/img/CASwebsite.png",
//     tag: "Featured Project",
//     role: "Full Stack Developer",
//     deployment: "Vercel",
//     technologies: ["Next.js", "Tailwind", "TypeScript", "Firebase"],
//     images: [
//       { src: "/img/CASpic.png", alt: "CAS Website screenshot" },
//       { src: "/img/CASpic2.png", alt: "CAS Website screenshot" },
//     ],
//     description:
//       "Developed as a personal project in my capacity as a Coordinator, the CAS Website (Commission for Altar Servers) is a dedicated management platform created for the Sto. Niño de Praga Parish. This system was designed to modernize the administration of the altar server community by replacing traditional, manual record-keeping with a centralized digital repository. The platform serves as a secure database that stores comprehensive information for all altar servers, allowing for quick access to server profiles and records. Key functionalities include a digital attendance log to track participation in every mass, an automated scheduling tool to coordinate server assignments for various liturgical services, and a dashboard to easily view and manage server information. This project ensures the Commission remains organized and efficient in supporting the parish’s liturgical needs.",
//   },
//   {
//     id: 5,
//     title: "Flowstate",
//     imageSrc: "/img/Flowstate.png",
//     tag: "Featured Project",
//     role: "Front-End Developer",
//     deployment: "Firebase Hosting",
//     technologies: ["React Native", "Tailwind", "Figma"],
//     images: [
//       { src: "/img/Flowstate.png", alt: "Flowstate screenshot" },
//       { src: "/img/Flowstate2.png", alt: "Flowstate screenshot" },
//       { src: "/img/Flowstate3.png", alt: "Flowstate screenshot" },
//       { src: "/img/Flowstate4.png", alt: "Flowstate screenshot" },
//     ],
//     description:
//       "This project was built during a Mobile Computing course, and Flow State is a productivity application developed using React Native to help users enhance focus and manage their time efficiently. By combining a structured task management system with the Pomodoro Technique, the app allows users to create, edit, and organize tasks by categories, due dates, and priorities. The built-in Pomodoro timer defaults to 25-minute work intervals and 5-minute breaks, though users can customize these durations to suit their personal workflow. To keep users on track, Flow State incorporates push notifications for active tasks and Pomodoro cycles. With its clean, user-friendly interface, it serves as an intuitive tool for students and professionals looking to boost productivity and develop disciplined work habits.",
//   },
//   {
//     id: 6,
//     title: "High Pie",
//     imageSrc: "/img/HighPie.png",
//     tag: "Featured Project",
//     role: "Full Stack Developer",
//     deployment: "Local",
//     technologies: ["Ionic Angular", "Tailwind", "TypeScript", "Firebase"],
//     images: [
//       { src: "/img/HighPie1.png", alt: "High Pie screenshot" },
//       { src: "/img/HighPie.png", alt: "High Pie screenshot" },
//       { src: "/img/HighPie3.png", alt: "High Pie screenshot" },
//       { src: "/img/HighPie4.png", alt: "High Pie screenshot" },
//     ],
//     description:
//       "This project was built during an Integrative Programming and Technologies course and HighPie is an e-commerce platform designed to modernize the traditional pizza shop experience. Developed using Ionic, Angular, and TypeScript, the mobile application provides a streamlined minimal-click ordering process paired with a Firebase Firestore backend for real-time data management. The system features a neat interface for customers to browse, customize, and place orders, while an Admin Module empowers vendors to manage inventory and automate order operations. Ultimately, HighPie bridges the gap between conventional food services and modern digital needs through a responsive and intuitive user experience.",
//   },
// ];

// const ProjectCarousel = ({ images }) => {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const hasMultipleImages = images.length > 1;

//   const next = useCallback(() => {
//     setCurrent((index) => (index === images.length - 1 ? 0 : index + 1));
//   }, [images.length]);

//   const previous = () => {
//     setCurrent((index) => (index === 0 ? images.length - 1 : index - 1));
//   };

//   useEffect(() => {
//     if (paused || !hasMultipleImages) return undefined;
//     const timer = setInterval(next, 4000);
//     return () => clearInterval(timer);
//   }, [hasMultipleImages, next, paused]);

//   return (
//     <div
//       className="relative w-full bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden group flex items-center justify-center"
//       style={{ minHeight: "clamp(160px, 40vw, 480px)" }}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <img
//         key={current}
//         src={images[current].src}
//         alt={images[current].alt}
//         className="block transition-opacity duration-500"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "contain",
//           maxHeight: "clamp(160px, 40vw, 480px)",
//         }}
//       />

//       {hasMultipleImages && (
//         <>
//           <button
//             type="button"
//             onClick={previous}
//             aria-label="Previous project image"
//             className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70"
//           >
//             <HiChevronLeft size={18} />
//           </button>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next project image"
//             className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70"
//           >
//             <HiChevronRight size={18} />
//           </button>

//           <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//             {images.map((image, index) => (
//               <button
//                 key={image.src}
//                 type="button"
//                 onClick={() => setCurrent(index)}
//                 aria-label={`Show project image ${index + 1}`}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   index === current ? "w-6 bg-white" : "w-1.5 bg-white/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const ProjectModal = ({ project, onClose }) => {
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [onClose]);

//   useEffect(() => {
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, []);

//   return (
//     // Mobile: bottom sheet anchored to bottom edge, rounded top corners only.
//     // sm+: centered dialog with full rounded corners, original max-w-3xl.
//     <div
//       className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm px-0 sm:px-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="project-modal-title"
//       onClick={onClose}
//     >
//       <div
//         className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-t-2xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
//         onClick={(event) => event.stopPropagation()}
//       >
//         {/* Drag handle — visible on mobile only */}
//         <div className="flex sm:hidden justify-center -mt-1 mb-0">
//           <div className="w-10 h-1 rounded-full bg-white/20" />
//         </div>

//         {/* Close button */}
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Close project details"
//           className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/40 hover:text-white transition-colors p-1"
//         >
//           <HiX size={20} />
//         </button>

//         {/* Title */}
//         <div className="flex flex-col items-center text-center gap-2 sm:gap-3 mt-1 sm:mt-2">
//           <span className="text-[10px] font-semibold tracking-widest uppercase text-white/40 border border-white/10 rounded-full px-3 py-1">
//             {project.tag}
//           </span>
//           <h2
//             id="project-modal-title"
//             className="font-grotesk font-bold text-base sm:text-lg md:text-2xl text-white leading-snug max-w-2xl"
//           >
//             {project.title}
//           </h2>
//         </div>

//         {/* Meta cards — stacked on mobile, inline wrap on sm+ */}
//         <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3">
//           <div className="backdrop-blur-md bg-white/[0.06] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-auto">
//             <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-1 sm:mb-2">
//               Role
//             </p>
//             <p className="font-grotesk font-semibold text-xs sm:text-sm text-white/90">
//               {project.role}
//             </p>
//           </div>

//           <div className="backdrop-blur-md bg-white/[0.06] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-auto">
//             <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-1 sm:mb-2">
//               Deployment
//             </p>
//             <p className="font-grotesk font-semibold text-xs sm:text-sm text-white/90">
//               {project.deployment}
//             </p>
//           </div>

//           <div className="backdrop-blur-md bg-white/[0.06] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-auto">
//             <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-1 sm:mb-2">
//               Technologies
//             </p>
//             <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
//               {project.technologies.map((technology) => (
//                 <span
//                   key={technology}
//                   className="text-xs font-semibold text-white/70 border border-white/10 bg-white/[0.06] rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5"
//                 >
//                   {technology}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Carousel */}
//         <ProjectCarousel images={project.images} />

//         <div className="w-full h-px bg-white/[0.08]" />

//         {/* Overview */}
//         <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
//           <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35">
//             Overview
//           </p>
//           <p className="font-mono text-xs sm:text-sm text-white/60 leading-relaxed max-w-2xl text-justify">
//             {project.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProjectSection = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const titleLineRef = useRef(null);
//   const triggerRef = useRef(null);
//   const horizontalRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const context = gsap.context(() => {
//       gsap.fromTo(
//         titleRef.current,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       gsap.fromTo(
//         titleLineRef.current,
//         { width: "0%", opacity: 0 },
//         {
//           width: "100%",
//           opacity: 1,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.3,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       gsap.fromTo(
//         triggerRef.current,
//         { y: 100, rotationX: 20, opacity: 0 },
//         {
//           y: 0,
//           rotationX: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           delay: 0.2,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       gsap.fromTo(
//         sectionRef.current,
//         { backgroundPosition: "50% 0%" },
//         {
//           backgroundPosition: "50% 100%",
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         },
//       );

//       const horizontalScroll = gsap.to(".panel", {
//         xPercent: -100 * (projects.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: () => `+=${horizontalRef.current.offsetWidth}`,
//           pin: true,
//           scrub: 1,
//           snap: {
//             snapTo: 1 / (projects.length - 1),
//             duration: { min: 0.2, max: 0.3 },
//             delay: 0.1,
//           },
//           invalidateOnRefresh: true,
//         },
//       });

//       const panels = gsap.utils.toArray(".panel");
//       panels.forEach((panel) => {
//         const image = panel.querySelector(".project-image");
//         const title = panel.querySelector(".project-title");

//         const timeline = gsap.timeline({
//           scrollTrigger: {
//             trigger: panel,
//             containerAnimation: horizontalScroll,
//             start: "left right",
//             end: "right left",
//             scrub: true,
//           },
//         });

//         timeline.fromTo(
//           image,
//           { scale: 0, rotate: -20 },
//           { scale: 1, rotate: 1, duration: 0.5 },
//         );

//         if (title) {
//           timeline.fromTo(
//             title,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.3 },
//             0.2,
//           );
//         }
//       });
//     }, sectionRef);

//     return () => context.revert();
//   }, []);

//   return (
//     <>
//       {selectedProject && (
//         <ProjectModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}

//       <section
//         ref={sectionRef}
//         id="horizontal-section"
//         className="relative py-20 bg-[#fafafa] pt-[400px]"
//       >
//         <div className="container mx-auto px-4 mb-16 relative z-10">
//           <h2
//             ref={titleRef}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
//           >
//             Featured Project
//           </h2>
//           <div
//             ref={titleLineRef}
//             className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
//           />
//         </div>

//         <div ref={triggerRef} className="h-screen overflow-hidden opacity-0">
//           <div
//             ref={horizontalRef}
//             className="horizontal-section flex md:w-[400%] w-[420%]"
//           >
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="panel relative flex items-center justify-center"
//                 style={{ width: "100vw" }}
//               >
//                 <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
//                   <img
//                     className="project-image max-w-full max-h-full rounded-2xl object-cover"
//                     src={project.imageSrc}
//                     alt={`${project.title} project preview`}
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setSelectedProject(project)}
//                     className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
//                   >
//                     {project.title} <SlShareAlt />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProjectSection;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";


const projects = [
  {
    id: 1,
    title: "Kotsek",
    imageSrc: "/img/KotsekPic.png",
    pageKey: "kotsek",           // ← matches the key in App.jsx projectPages
  },
  {
    id: 2,
    title: "Bread Winner",
    imageSrc: "/img/breadWinner.png",
    pageKey: "bread-winner",
  },
  {
    id: 3,
    title: "Castra Flores",
    imageSrc: "/img/castraFlores.png",
    pageKey: "castra-flores",
  },
  {
    id: 4,
    title: "CAS Website",
    imageSrc: "/img/CASwebsite.png",
    pageKey: "cas-website",
  },
  {
    id: 5,
    title: "Flowstate",
    imageSrc: "/img/Flowstate.png",
    pageKey: "flowstate",
  },
  {
    id: 6,
    title: "High Pie",
    imageSrc: "/img/HighPie.png",
    pageKey: "high-pie",
  },
    {
    id: 7,
    title: "Expenses Tracker",
    imageSrc: "/img/expensesTracker2.png",
    pageKey: "expenses-tracker",
  },
];

const ProjectSection = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        titleLineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        triggerRef.current,
        { y: 100, rotationX: 20, opacity: 0 },
        {
          y: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        sectionRef.current,
        { backgroundPosition: "50% 0%" },
        {
          backgroundPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      const horizontalScroll = gsap.to(".panel", {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current.offsetWidth}`,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (projects.length - 1),
            duration: { min: 0.2, max: 0.3 },
            delay: 0.1,
          },
          invalidateOnRefresh: true,
        },
      });

      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel) => {
        const image = panel.querySelector(".project-image");
        const title = panel.querySelector(".project-title");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalScroll,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });

        timeline.fromTo(
          image,
          { scale: 0, rotate: -20 },
          { scale: 1, rotate: 1, duration: 0.5 },
        );

        if (title) {
          timeline.fromTo(
            title,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 },
            0.2,
          );
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#0a0a0a] pt-[200px]"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="font-grotesk  text-4xl md:text-5xl lg:text-6xl font-bold text-[#fafafa] text-center mb-4 opacity-0"
        >
          Featured Project
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>

      <div ref={triggerRef} className="h-screen overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="panel relative flex items-center justify-center"
              style={{ width: "100vw" }}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt={`${project.title} project preview`}
                />

                <button
                  type="button"
                  onClick={() => onNavigate(project.pageKey)}
                  className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-[#fafafa] mt-6 z-50 text-nowrap hover:text-gray-500 transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
                >
                  {project.title} <SlShareAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;