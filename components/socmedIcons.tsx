import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

function SocialButtons() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.instagram.com/renan_genova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group border-2 border-white cursor-pointer w-10 h-10 flex items-center justify-center 
                           hover:border-blue-800 hover:scale-110 transition-all duration-300">
          <FaInstagram className="text-white group-hover:text-blue-800 text-2xl transition-colors duration-300" />
        </button>
      </a>

      <a
        href="https://www.linkedin.com/in/renan-jayson-genova-66909b372/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group border-2 border-white cursor-pointer w-10 h-10 flex items-center justify-center 
                           hover:border-blue-800 hover:scale-110 transition-all duration-300">
          <FaLinkedin className="text-white group-hover:text-blue-800 text-2xl transition-colors duration-300" />
        </button>
      </a>

      <a
        href="https://www.facebook.com/renanjayson.genova"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group border-2 border-white cursor-pointer w-10 h-10 flex items-center justify-center 
                           hover:border-blue-800 hover:scale-110 transition-all duration-300">
          <FaFacebook className="text-white group-hover:text-blue-800 text-2xl transition-colors duration-300" />
        </button>
      </a>

      <a href="mailto:genovarenanjayson@gmail.com">
        <button className="group border-2 border-white cursor-pointer w-10 h-10 flex items-center justify-center 
                           hover:border-blue-800 hover:scale-110 transition-all duration-300">
          <FaEnvelope className="text-white group-hover:text-blue-800 text-2xl transition-colors duration-300" />
        </button>
      </a>
    </div>
  );
}

export default SocialButtons;
