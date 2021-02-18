import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <p className="rights">
          &copy; {new Date().getFullYear()} iman.vercel.app
          <br />
          <span>All rights reserved.</span>
        </p>
      </footer>

      <style jsx>{`
        footer {
          text-align: center;
          padding: 20px 5vw;
          color: white;
          background-color: black;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
        }

        p {
          margin: 0;
          padding: 10px;
        }

        span {
          font-size: small;
        }
      `}</style>
    </>
  );
};

export default Footer;
