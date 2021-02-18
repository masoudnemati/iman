import React from "react";

const AboutMe = () => {
  return (
    <>
      <main>
        <h3>تحصیلات من:</h3>
        <ol>
          <li>دیپلم ریاضی فیزیک از دبیرستان نمونه دولتی بشارتی بندرگز</li>
          <li>کاردانی مهندسی برق مخابرات از دانشگاه صنعتی نوشیروانی بابل</li>
          <li>
            دانشجوی کارشناسی مهندسی کامپیوتر نرم افزار در دانشگاه آزاد اسلامی
            کردکوی
          </li>
        </ol>
      </main>

      <style jsx>{`
        main {
          direction: rtl;
          padding: 20px 5vw;
          color: white;
          background-color: #1a2c29;
        }

        li {
          padding-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default AboutMe;
