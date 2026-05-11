

  import { useEffect, useRef, useState } from "react";
  import Header from "./components/Header";
  import Hero from "./components/Hero";
  import CustomeCursor from "./components/CustomeCursor";
  import ProfileSection from "./components/ProfileSection";
  import ProgressBar from "./components/ProgressBar";
  import LoadingScreen from "./components/LoadingScreen";
  import ContactSection from "./components/ContactSection";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import ProjectSection from "./components/ProjectSection";
  import { IoCaretBackSharp } from "react-icons/io5";
  import Kotsek from "./components/FeaturedProject/Kostek";
  import TechStack from "./components/TechStack";
  import Experience from "./components/Experience";
  import Footer from "./components/Footer";

  import BreadWinner from "./components/FeaturedProject/BreadWinner";
  import CastraFlores from "./components/FeaturedProject/CastraFlores";
  import CAS from "./components/FeaturedProject/CAS";
  import Flowstate from "./components/FeaturedProject/FlowState";
  import HighPie from "./components/FeaturedProject/HighPie";
  import ExpensesTracker from "./components/FeaturedProject/ExpensesTracker";

  const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentProject, setCurrentProject] = useState(null);
    const savedScrollY = useRef(0);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      AOS.init({ duration: 1500, once: true });
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, []);

    const handleLoadingComplete = () => {
      setIsLoading(false);
      setTimeout(() => {
        AOS.init({ duration: 1500, once: true });
        ScrollTrigger.refresh();
      }, 100);
    };

    const handleNavigate = (pageKey) => {
      savedScrollY.current = window.scrollY;
      setCurrentProject(pageKey);
      window.scrollTo(0, 0);
    };

    const handleProjectNavigate = (pageKey) => {
      setCurrentProject(pageKey);
      window.scrollTo(0, 0);
    };

    const handleBack = () => {
      setCurrentProject(null);
      setTimeout(() => {
        ScrollTrigger.refresh();
        window.scrollTo(0, savedScrollY.current);
      }, 50);
    };

    const projectPages = {
      kotsek: <Kotsek onNavigate={handleProjectNavigate} />,
      "bread-winner": <BreadWinner onNavigate={handleProjectNavigate} />,
      "castra-flores": <CastraFlores onNavigate={handleProjectNavigate} />,
      "cas-website": <CAS onNavigate={handleProjectNavigate} />,
      flowstate: <Flowstate onNavigate={handleProjectNavigate} />,
      "high-pie": <HighPie onNavigate={handleProjectNavigate} />,
      "expenses-tracker": <ExpensesTracker onNavigate={handleProjectNavigate} />,
    };

    if (currentProject && projectPages[currentProject]) {
      return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] border border-white/10">
          <button
            onClick={handleBack}
            className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 text-sm font-medium backdrop-blur-sm"
          >
            <IoCaretBackSharp size={14} />
            Back
          </button>
          {projectPages[currentProject]}
          <CustomeCursor />
        </div>
      );
    }

    return (
      <>
        {/*
          Header lives OUTSIDE the isLoading conditional so it never
          unmounts/remounts. It's hidden while loading via the `visible`
          prop, then shown once loading completes.
        */}
        <Header visible={!isLoading} />

        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <main className="relative w-full min-h-screen overflow-x-clip bg-[#0a0a0a]">
            <img
              className="absolute top-0 right-0 opacity-60 -z-10 pointer-events-none"
              src="/gradient.png"
              alt="Gradient-img"
            />

            <ProgressBar />
            <CustomeCursor />

            <div className="h-0 w-[18rem] sm:w-[28rem] lg:w-[40rem] absolute top-[20%] right-[-5%] pointer-events-none" />

            <div id="home" className="relative z-0 pt-[72px]">
              <Hero />
            </div>

            <div id="about" className="relative z-0">
              <ProfileSection />
            </div>

            <div id="projects" className="relative z-0">
              <ProjectSection onNavigate={handleNavigate} />
            </div>

            <div className="relative z-0">
              <TechStack />
            </div>

            <div id="experience" className="relative z-0">
              <Experience />
            </div>

            <div id="contact" className="relative z-0">
              <ContactSection />
            </div>

            <Footer />
          </main>
        )}
      </>
    );
  };

  export default App;