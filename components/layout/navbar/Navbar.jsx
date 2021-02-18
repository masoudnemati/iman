import React from "react";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <header className="navbar-main ">
      <div className="logo">
        <img
          src="/images/home/nav-logo.png"
          alt="dali topar"
          width="50px"
          height="50px"
        />
      </div>
      <Burger />

      <style jsx>{`
        .navbar-main {
          position: fixed;
          color: white;
          width: 100%;
          height: 105px;
          margin: 0;
          padding: 0 20px;
          background-color: rgba(27, 43, 40, 0.8);
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          transition: all 0.5s linear;
          z-index: 10;
        }

        .navbar-scroll {
          color: black;
          background-color: rgba(255, 255, 255, 0.94);
          padding: 0 20px;
          height: 90px;
        }
        .logo {
          background-color: rgba(255, 255, 255);
          border: 1px 0 solid white;
          border-radius: 0 0 35% 35%;
          padding-top: 10px;
          padding-right: 10px;
          padding-left: 10px;

          margin-bottom: 20px;
          margin-left: 20px;
        }
      `}</style>
    </header>
  );
};

if (typeof window !== "undefined") {
  // browser code
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("navbar-scroll", window.scrollY > 0);
  });
}

export default Navbar;
