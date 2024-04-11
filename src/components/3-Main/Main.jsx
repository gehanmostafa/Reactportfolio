import { useState } from "react";
import "./Main.css";
import { myproject } from "./myproject";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [arr, setArr] = useState(myproject);
  const [active_class, setActive_class] = useState("all");
  const handelClick = (namecategory) => {
       setActive_class(namecategory)
    const newarray = myproject.filter((item) => {
      const child = item.category.find((item) => {
        return item === namecategory;
      });
      return child===namecategory;
    });
    setArr(newarray);
  };

  return (
    <main className="flex">
      <section className="flex left-section ">
        <button
          onClick={() => {
            setActive_class("all");
           setArr(myproject)
          }}
          className={active_class === "all" ? "active" : null}
        >
          all project
        </button>
        <button
          onClick={() => {
         
            handelClick("css");
          }}
          className={active_class === "css" ? "active" : null}
        >
          hTML & CSS
        </button>

        <button
          onClick={() => {
           
            handelClick("bootstrap");
          }}
          className={active_class === "bootstrap" ? "active" : null}
        >
          bootstrap
        </button>
        <button
          onClick={() => {
          
            handelClick("javaScript");
          }}
          className={active_class === "javaScript" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => {
            handelClick("react");
          
          }}
          className={active_class === "react" ? "active" : null}
        >
          react & MUI
        </button>
      </section>
      <AnimatePresence>
      <section className=" right-section flex ">
        {arr.map((item) => {
          return (
            <motion.article
            layout
            initial={{ transform: "scale(0.4)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", damping: 8, stiffness: 50 }}
            key={item.imgpath}>
              <img src={item.imgpath} alt="projectjs" />
              <div className="card">
                <h2 className="title">{item.title}</h2>
                <p className="subtitle">
                  I am Jihan, a fourth-year student at the Engineering College,
                  specializing in front-end development
                </p>
                <div className="links flex">
                  <div className="right-icon flex ">
                    <div className="icon-link"></div>
                  
                      <a   className="icon-github" href="http://github.com/gehanmostafa"
            target="_blank"></a>
                    
                  </div>
                  <div className="left-icon flex">
                    <span>more</span>
                    <div className="icon-arrow-right2"></div>
                  </div>
                </div>
              </div>
            </motion.article>
          
          );
        })}
      </section>
      </AnimatePresence>
    </main>
  );
}
