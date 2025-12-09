


// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// type NavLinksProps = {
//   onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
// };

// const NavLinks = ({ onClick }: NavLinksProps) => {
//   return (
//     <>
//       <a href="#home" onClick={onClick}>Home</a>
//       <a href="#aboutMe" onClick={onClick}>About Me</a>
//       <a href="#showcase" onClick={onClick}>Showcase</a>
//       <a href="#contact" onClick={onClick}>Contact</a>
//     </>
//   );
// };

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleNavbar = () => setIsOpen(!isOpen);

//   const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     const targetId = e.currentTarget.getAttribute("href")?.slice(1);
//     if (!targetId) return;

//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }

//     setIsOpen(false); // close mobile menu
//   };

//   return (
//     <>
//       <nav className="flex w-1/3 justify-end">
//         <div className="hidden w-full md:flex justify-between text-white gap-6">
//           <NavLinks onClick={handleLinkClick} />
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleNavbar}>
//             {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
//           </button>
//         </div>
//       </nav>

//       {isOpen && (
//         <div className="flex flex-col items-center basis-full text-white">
//           <NavLinks onClick={handleLinkClick} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Nav;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavLinksProps = {
  active: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavLinks = ({ onClick, active }: NavLinksProps) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "aboutMe", label: "About Me" },
    { id: "showcase", label: "Showcase" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={onClick}
          className={`
            relative
            text-white
            transition-colors
            after:block
            after:absolute
            after:-bottom-1
            after:left-0
            after:w-0
            after:h-[2px]
            after:bg-white
            after:transition-all
            hover:after:w-full
            ${active === link.id ? "after:w-full" : ""}
            px-1
          `}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId); // mark clicked section as active
    }

    setIsOpen(false); // close mobile menu
  };
 
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "aboutMe", "showcase", "contact"];
      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        {/* Desktop Menu */}
        <div className="hidden w-full md:flex justify-between text-white gap-6">
          <NavLinks onClick={handleLinkClick} active={activeSection} />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center basis-full text-white gap-4 mt-2">
          <NavLinks onClick={handleLinkClick} active={activeSection} />
        </div>
      )}
    </>
  );
};

export default Nav;
