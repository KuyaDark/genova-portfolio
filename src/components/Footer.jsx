import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa] py-16 px-6 mt-30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-grotesk m-0 font-semibold">
            Renan
          </h2>

          <div>
            <h3 className="text-xl font-mono font-semibold mb-4 text-slate-300">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/KuyaDark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#fafafa] transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/renan-jayson-genova-66909b372/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#fafafa] transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/renanjayson.genova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#fafafa] transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:genovarenanjayson@gmail.com"
                className="text-gray-700 hover:text-[#fafafa] transition-colors"
              >
                <MdOutlineEmail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Renan Jayson Genova. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
