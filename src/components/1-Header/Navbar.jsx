import { useEffect, useState } from "react";
import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const [showmodel, setShowmodel] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("activemode") ?? "dark"
  );
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);
  return (
    <header className="flex">
      <button
        className="icon-menu"
        onClick={() => {
          setShowmodel(true);
        }}
      ></button>
      <div></div>

      <nav>
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Artical</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "activemode",
            mode === "dark" ? "light" : "dark"
          );
          setMode(localStorage.getItem("activemode"));
        }}
        className="mode"
      >
        {mode === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showmodel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-cross"
                onClick={() => {
                  setShowmodel(false);
                }}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Artical</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
