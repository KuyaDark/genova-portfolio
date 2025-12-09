import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    title: "Technological Institute of the Philippines",
    location: "Quezon City",
    period: "S.Y. 2022 - 2026",
    description: "Bachelor of Science in Information Technology (BSIT)",
    grade: "College",
  },
  {
    title: "Our Lady of Fatima University",
    location: "Antipolo City",
    period: "S.Y. 2020 - 2022",
    description: "Science, Technology, Engineering, and Mathematics (STEM)",
    grade: "Senior High School",
  },
  {
    title: "Antipolo National High School",
    location: "Antipolo City",
    period: "S.Y. 2016 - 2020",
    grade: "Junior High School",
  },
  {
    title: "Bagong Nayon 1 Elementary School",
    location: "Antipolo City",
    period: "S.Y. 2010 - 2016",
    grade: "Elementary",
  },
];

const EducationalBackground = () => {
  const refs = useRef<HTMLDivElement[]>([]);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visible.includes(index)) {
            setVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-12">
        Educational Background
      </h1>

      <div className="relative w-full max-w-5xl mx-auto py-10 px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

        <div className="flex flex-col gap-20">
          {timeline.map((item, idx) => {
            const isVisible = visible.includes(idx);

            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) refs.current[idx] = el;
                }}
                data-index={idx}
                className="
                  relative flex flex-col md:flex-row items-center
                "
              >
                {/* Dot */}
                <div className="absolute left-1/2 w-5 h-5 rounded-full bg-black border-4 border-white -translate-x-1/2 z-10"></div>

                {/* Card */}
                <div
                  className={`
    bg-[#05081C] backdrop-blur-md border border-white/70 p-6 rounded-lg shadow-lg w-full md:w-5/12
    ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
    text-center md:text-left

    transition-all duration-700
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}

    hover:scale-[1.05] hover:-translate-y-1 hover:shadow-xl
  `}
                >
                  <h2 className="text-xl font-bold text-white-800">
                    {item.title}
                  </h2>

                  {item.location && (
                    <p className="text-white-600">{item.location}</p>
                  )}
                  {item.period && (
                    <small className="text-white-500">{item.period}</small>
                  )}
                  {item.description && (
                    <p className="mt-2 text-white-700">{item.description}</p>
                  )}
                  {item.grade && (
                    <p className="mt-2 text-white-200">{item.grade}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationalBackground;
