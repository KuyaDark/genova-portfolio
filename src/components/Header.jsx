// import "boxicons/css/boxicons.min.css";

// const Header = () => {
//   //Function for toggling the mobile menu
//   const toggleMobileMenu = () => {
//     //Get the mobile menu elements
//     const mobileMenu = document.getElementById("mobileMenu");

//     //if it has the 'hidden' class, remove it, otherwise, add it.
//     if (mobileMenu.classList.contains("hidden")) {
//       mobileMenu.classList.remove("hidden");
//     } else {
//       mobileMenu.classList.add("hidden");
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 lg:px-20">
//       <h1
//         data-aos="fade-down"
//         data-aos-easing="linear"
//         data-aos-duration="1500"
//         className="text-xl md:text-2xl lg:text-3xl font-grotesk m-0 font-semibold"
//       >
//         RENAN
//       </h1>

//       {/*Desktop Nav*/}

//       <nav className="hidden md:flex items-center gap-12">
//         <a
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="1000"
//           className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//           href="#"
//         >
//           Home
//         </a>
//         <a
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//           className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//           href="#"
//         >
//           About Me
//         </a>
//         <a
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="2000"
//           className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//           href="#"
//         >
//           Projects
//         </a>
//         <a
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="2500"
//           className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//           href="#"
//         >
//           Experience
//         </a>
//         <a
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="3000"
//           className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//           href="#"
//         >
//           Contact
//         </a>
//       </nav>

//       {/* <button className="hidden md:flex bg-[#a7a7a7] text-black px-8 py-3 rounded-full border-none font-meduim transition-all duration-500 hover:bg-white cursor-pointer z-50">
//         SIGNUP
//       </button> */}

//       {/*Mobile Menu Button - Visible only on Mobile*/}

//       <button
//         onClick={toggleMobileMenu}
//         className="md:hidden text-3xl p-2 z-50"
//       >
//         <i className="bx bx-menu" />
//       </button>

//       {/*Mobile Menu - hidden by default */}

//       <div
//         id="mobileMenu"
//         className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
//       >
//         <nav className="flex flex-col gap-6 items-center">
//           <a
//             className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//             href="#"
//           >
//             Home
//           </a>
//           <a
//             className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//             href="#"
//           >
//             About Me
//           </a>
//           <a
//             className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//             href="#"
//           >
//             Projects
//           </a>
//           <a
//             className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//             href="#"
//           >
//              Experience
//           </a>
//           <a
//             className="text-base tracking-wider trasition-colors hover:text-gray-300 z-50 font-grotesk"
//             href="#"
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const NAV_LINKS = [
  { label: "Home",       href: "#home"       },
  { label: "About Me",   href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

const Header = ({ visible = true }) => {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("#home");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [fading,    setFading]    = useState(false);
  const fadeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const ids = NAV_LINKS.map(({ href }) => href.slice(1));
    let observers = [];

    const attach = () => {
      observers = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
          { rootMargin: "-10% 0px -75% 0px", threshold: 0 }
        );
        obs.observe(el);
        return obs;
      });
    };

    const timer = setTimeout(attach, 200);
    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [visible]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive(href);

    const target = document.querySelector(href);
    if (!target) return;

    const headerHeight = document.querySelector("header")?.offsetHeight ?? 64;

    // 1. Fade out the page
    setFading(true);

    // 2. After fade-out completes, jump + fade back in
    clearTimeout(fadeRef.current);
    fadeRef.current = setTimeout(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "instant" });
      setFading(false);
    }, 300); // matches fade-out duration
  };

  // Cleanup timeout on unmount
  useEffect(() => () => clearTimeout(fadeRef.current), []);

  const fadeDown = {
    hidden: { opacity: 0, y: -16 },
    show:   { opacity: 1, y: 0   },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { duration: 0.25 } },
    exit:   { opacity: 0, transition: { duration: 0.2  } },
  };

  const mobileNavContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  };

  const mobileNavItem = {
    hidden: { opacity: 0, x: 40 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit:   { opacity: 0, x: 40, transition: { duration: 0.2,  ease: "easeIn" } },
  };

  return (
    <>
      {/* ── Full-page fade overlay ── */}
      <AnimatePresence>
        {fading && (
          <Motion.div
            key="page-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          flex justify-between items-center
          px-5 sm:px-8 lg:px-20 py-4
          transition-all duration-300
          ${!visible ? "pointer-events-none opacity-0" : "opacity-100"}
          ${scrolled
            ? "bg-[#0a0a0a] border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[#0a0a0a]"
          }
        `}
      >
        {/* Logo */}
        <Motion.h1
          variants={fadeDown}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl font-grotesk m-0 font-semibold tracking-tight"
        >
          RENAN
        </Motion.h1>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(({ label, href }, i) => {
            const isActive = active === href;
            return (
              <Motion.a
                key={href}
                href={href}
                variants={fadeDown}
                initial="hidden"
                animate={visible ? "show" : "hidden"}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.15 }}
                onClick={(e) => handleNavClick(e, href)}
                className={`
                  relative text-base tracking-wider font-grotesk z-50
                  transition-colors duration-200
                  ${isActive ? "text-white" : "text-white/50 hover:text-white/80"}
                `}
              >
                {label}
                <span className={`
                  absolute -bottom-1 left-0 h-[1.5px] bg-white rounded-full
                  transition-all duration-300 ease-out
                  ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                `} />
              </Motion.a>
            );
          })}
        </nav>

        {/* ── Hamburger Button ── */}
        <Motion.button
          variants={fadeDown}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg"
          aria-label="Toggle menu"
        >
          <Motion.span
            animate={menuOpen ? { rotate: 45, y: 7, width: "22px" } : { rotate: 0, y: 0, width: "22px" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[1.5px] bg-white rounded-full origin-center"
          />
          <Motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[1.5px] w-[22px] bg-white rounded-full"
          />
          <Motion.span
            animate={menuOpen ? { rotate: -45, y: -7, width: "22px" } : { rotate: 0, y: 0, width: "22px" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[1.5px] bg-white rounded-full origin-center"
          />
        </Motion.button>

        {/* ── Mobile Menu Overlay ── */}
        <AnimatePresence>
          {menuOpen && (
            <Motion.div
              key="mobile-menu"
              variants={overlayVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed inset-0 top-0 z-40 md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl"
            >
              <div className="h-16" />
              <div className="mx-5 sm:mx-8 h-px bg-white/[0.06]" />

              <Motion.nav
                variants={mobileNavContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col px-5 sm:px-8 pt-6 pb-10 gap-1"
              >
                {NAV_LINKS.map(({ label, href }, i) => {
                  const isActive = active === href;
                  return (
                    <Motion.a
                      key={href}
                      href={href}
                      variants={mobileNavItem}
                      onClick={(e) => handleNavClick(e, href)}
                      className={`
                        group flex items-center justify-between
                        py-4 border-b border-white/[0.05]
                        font-grotesk text-2xl font-medium tracking-tight
                        transition-colors duration-200
                        ${isActive ? "text-white" : "text-white/40 hover:text-white/70"}
                      `}
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[11px] text-white/20 tracking-widest w-5">
                          0{i + 1}
                        </span>
                        {label}
                      </span>
                      {isActive
                        ? <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        : <span className="text-white/20 text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
                      }
                    </Motion.a>
                  );
                })}
              </Motion.nav>
            </Motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;