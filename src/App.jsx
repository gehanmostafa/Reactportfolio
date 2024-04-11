import { useEffect, useState } from "react";
import Navbar from "./components/1-Header/Navbar";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";

const App = () => {
  const [showbtn, setShowbtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowbtn(true);
      }
      else{
        setShowbtn(false);

      }
    });
  }, []);

  return (
    <>
      <a style={{opacity:showbtn? 1 : 0, transition:".9s"}} href="#home">
        <button className="icon-circle-up"></button>
      </a>  
      <div className="container" id="home">
        <Navbar />
        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </div>
    </>
  );
};

export default App;
