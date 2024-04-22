import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import AvatarSelector from "./scenes/Skills";
import Love from "./scenes/Love";
import Contact from "./scenes/Contact";
import DotGroup from "./scenes/DotGroup";
import Footer from "./scenes/Footer";
import Projects from "./scenes/Projects";
import { useState, useEffect } from "react";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <About />
      </div>
      <LineGradient />
      <div>
        <AvatarSelector />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Love />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
