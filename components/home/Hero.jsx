import React from "react";

const Hero = () => {
  return (
    <>
      <main>
        <section>
          <h1>
            وب‌سایت شخصی <span> ایمان نعمتی</span>
          </h1>
          <h3> دانشجوی کارشناسی ارشد مهندسی کامپیوتر گرایش نرم افزار </h3>
        </section>
      </main>

      <style jsx>{`
        main {
          color: white;
          direction: rtl;
          text-align: right;
          height: 95vh;
          background-image: url("/images/home/hero-bg.jpg");
          background-repeat: no-repeat;
          background-size: 700px;
          background-position: left;
          background-color: #192b28;
          padding-top: 60px;
        }

        section {
          display: inline-block;
          background-color: rgba(26, 44, 41, 0.7);
          padding: 30px 5vw;
          margin-top: 50px;
          text-align: right;
        }

        span {
          color: lightblue;
        }

        h1,
        h3 {
          margin: 0;
        }

        h1 {
          padding-bottom: 10px;
        }

        h3 {
          color: lightgray;
        }

        @media only screen and (max-width: 600px) {
          main {
            background-size: contain;

            background-position: bottom;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
