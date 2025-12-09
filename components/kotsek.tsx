import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

function Kotsek() {
  const navigate = useNavigate();
  return (
    <div className="bg-black w-screen h-screen overflow-x-hidden overflow-y-auto text-white px-4 sm:px-8 lg:px-16 py-6 sm:py-8">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center justify-center gap-2 border-2 border-white rounded-lg w-[108px] px-4 py-2 hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaArrowLeft className="group-hover:text-blue-800" />
          <span className="text-white group-hover:text-blue-800 font-medium text-sm sm:text-base">
            Back
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mt-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-12 min-w-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/300 wrap-break-word">
            Kotsek: Integrating YOLO v8 and OCR Technology for Real-Time Vehicle
            Detection in Parking Monitoring
          </h1>

          <p className="sans-serif text-justify text-white/120 text-sm sm:text-base md:text-lg lg:text-xl wrap-break-word">
            Kotsek is a smart parking monitoring system that uses YOLOv8 for
            real-time vehicle detection and OCR for license plate recognition.
            It automates entry–exit tracking through existing CCTV cameras,
            providing accurate occupancy analytics, vehicle classification, and
            security insights without additional hardware. Tested in a real
            environment, Kotsek delivers reliable, scalable, and cost-effective
            smart parking management.
          </p>

          <a
            href="https://not-found-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="group flex items-center justify-center gap-2 border-2 border-gray-300 rounded-lg w-[200px] px-4 py-2 hover:border-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer">
              <FaLink className="text-gray-300 group-hover:text-blue-800" />
              <span className="text-gray-300 group-hover:text-blue-800 font-medium text-sm sm:text-base">
                Visit the Website
              </span>
            </button>
          </a>

          <h2 className="flex items-center gap-2 text-md sm:text-md md:text-lg lg:text-xl font-bold text-white/300 mt-6">
            <HiOutlineCodeBracket className="text-base" />
            <span>Technologies used</span>
          </h2>

          <div className="flex flex-wrap gap-4 mt-2">
            {[
              { icon: <BsBox className="text-xl" />, label: "NextJS" },
              { icon: <BsBox className="text-base" />, label: "Tailwind" },
              { icon: <BsBox className="text-base" />, label: "Supabase" },
              {
                icon: <HiOutlineCodeBracket className="text-base" />,
                label: "Python",
              },
              { icon: <BsBox className="text-base" />, label: "Docker" },
              { icon: <BsBox className="text-base" />, label: "Visual Studio" },
              {
                icon: <BsBox className="text-base" />,
                label: "Figma",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="relative flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white text-base overflow-hidden cursor-pointer
                 transition-all duration-300 transform hover:scale-105"
              >
                {tech.icon}
                <span className="text-white text-base font-medium">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full md:w-auto min-w-0">
          <div className="w-full border-white border p-4 rounded-2xl text-white flex flex-col items-center gap-2">
            <video
              className="w-full h-auto rounded-lg object-cover max-w-full"
              controls
              autoPlay
              muted
              loop
            >
              <source src="./KotsekVideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mt-6 flex flex-col gap-3 px-4 py-4 rounded-lg border border-white/30 bg-[#0A0D36]/50 backdrop-blur-sm text-white">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400 text-xl" />
              <h3 className="text-lg font-semibold">Key Features</h3>
            </div>

            <ul className="list-disc list-inside text-white/90 text-sm sm:text-base space-y-1 ml-1">
              <li>Real-time vehicle detection using YOLOv8</li>
              <li>License plate recognition through OCR</li>
              <li>Automated entry and exit tracking via existing CCTV</li>
              <li>Vehicle type classification (car, motorcycle, bicycle)</li>
              <li>Guest vs. registered vehicle identification</li>
              <li>Incident reporting module</li>
              <li>Dashboard with real-time occupancy and traffic analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kotsek;
