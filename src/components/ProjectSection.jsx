import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlArrowDown, SlShareAlt } from "react-icons/sl";

const projects = [
  {
    id: 1,
    title: "Kotsek",
    imageSrc: "/img/KotsekPic.png",
    pageKey: "kotsek",
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

      <div ref={triggerRef} className="relative h-screen overflow-hidden opacity-0">
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

        <div className=" pointer-events-none absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500">
          <SlArrowDown className="animate-bounce text-sm"  aria-hidden="true" />
          <p className="font-sans text-[0.68rem] sm:text-sm text-slate-500 uppercase ">
            scroll down to Explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
