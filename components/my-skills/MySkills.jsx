import React from "react";

const MySkills = () => {
  return (
    <>
      <main>
        <h3>مهارت‌های من:</h3>
        <ul>
          <li>آشنا با سیستم عامل ویندوز</li>
          <li>آشنا با نرم افزار های کاربردی ویندوز</li>
          <li>آشنا با سخت‌ افزارهای کامپیوتر</li>
          <li> آشنا به نرم افزار Microsoft Word </li>
          <li>آشنا به نرم افزار Adobe Photoshop</li>
          <li>آشنا به زبان‌های برنامه‌نویسی C و C++</li>
        </ul>
        <br />
        <h3>زبان‌های گفتاری:</h3>
        <ul>
          <li>تسلط کامل به زبان ترکمنی (زبان مادری)</li>
          <li>تسلط کامل به زبان فارسی</li>
          <li>تسلط کامل به زبان انگلیسی</li>
          <li>آشنایی با زبان عربی</li>
        </ul>
        <br />
        <h3>علاقه‌های شخصی:</h3>
        <ul>
          <li>کار با کامپیوتر</li>
          <li>برنامه نویسی</li>
          <li>گوش دادن به آهنگ</li>
          <li>شطرنج</li>
          <li>بازی های کامپیوتری</li>
          <li>ورزش‌های تنیس روی میز و والیبال</li>
        </ul>
      </main>

      <style jsx>{`
        main {
          direction: rtl;
          padding: 160px 5vw 80px 5vw;
          color: white;
          background-color: #1b374a;
        }

        h3 {
          margin: 0;
        }

        li {
          padding: 5px;
        }
      `}</style>
    </>
  );
};

export default MySkills;
