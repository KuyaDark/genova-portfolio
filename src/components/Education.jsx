import React from "react";

const Education = () => {
  const details = [
    {
      school: "Technological Institute of the Philippines",
      year: "S.Y. 2022 - 2026",
      level: "College - BSIT",
    },
    {
      school: "Our Lady of Fatima University",
      year: "S.Y. 2020 - 2022",
      level: "SHS - STEM",
    },
    {
      school: "Antipolo National High School",
      year: "S.Y. 2016 - 2020",
      level: "JHS",
    },
    {
      school: "Bagong Nayon 1 Elementary School",
      year: "S.Y. 2010 - 2016",
      level: "Elementary",
    },
  ];

  return (
    <div className="">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Education</h2>

      <div className="relative flex flex-col gap-12 ">
        <div className="absolute left-[5.5px] top-2 bottom-0 w-[1px] bg-gray-500" />
        {details.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="mt-1.5 z-10 w-3 h-3 rounded-full bg-gray-100 shrink-0" />
            <div>
              <h3 className="text-base font-semibold leading-snug">
                {item.school}
              </h3>
              <p className="text-sm text-gray-400 mt-0.5">
                {item.year} &nbsp; {item.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

// <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Education</h2>

//       {/* Timeline container */}
//       <div className="relative flex flex-col gap-6">

//         {/* Vertical line */}
//         <div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-gray-500" />

//         {details.map((item, index) => (
//           <div key={index} className="flex gap-4 items-start">

//             {/* Dot */}
//             <div className="mt-1.5 z-10 w-3 h-3 rounded-full bg-gray-400 shrink-0" />

//             {/* Content */}
//             <div>
//               <h3 className="text-base font-semibold leading-snug">
//                 {item.school}
//               </h3>
//               <p className="text-sm text-gray-400 mt-0.5">
//                 {item.year} &nbsp; {item.level}
//               </p>
//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
