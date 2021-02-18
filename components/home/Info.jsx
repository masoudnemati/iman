import React from "react";

const Info = () => {
  return (
    <>
      <hr />
      <main>
        <h2>درباره من:</h2>
        <div className="sections">
          <div className="section-left">
            <p>
              من ایمان نعمتی هستم. سال ۱۳۷۴ در گرگان متولد شدم و در بندرترکمن
              زندگی میکنم. توی زندگی یه سری قوانین برای خودم دارم که سعی می‌کنم
              همیشه بهشون عمل کنم. علاقه زیادی به بازی‌های کامپیوتری دارم و خودم
              رو یک گیمر می‌دونم.
              <br />
              می‌توانم ساعت‌های طولانی پشت سیستم بشینم و روی مسئله ای تمرکز کنم
              تا بتوانم حلش کنم. سخت‌کوش، متعهد و وقت شناس هستم.
            </p>
          </div>

          <section className="section-right">
            <article className="right">
              <div className="info">
                <p>:نام</p>
                <p>:سال تولد</p>
                <p>:محل سکونت</p>
                <p>:رشته تحصیلی</p>
                <p>:وضعیت تحصیلی</p>
                <p>:نام دانشگاه</p>
              </div>
            </article>
            <article className="left">
              <div className="info">
                <p>ایمان نعمتی</p>
                <p>۱۳۷۴</p>
                <p>بندر ترکمن</p>
                <p>مهندسی کامپیوتر گرایش نرم افزار </p>
                <p>دانشجوی کارشناسی </p>
                <p> دانشگاه آزاد اسلامی کردکوی</p>
              </div>
            </article>
          </section>
        </div>
        <hr />
      </main>

      <style jsx>{`
        main {
          margin: 0;
          color: white;
          background-color: #1a2c29;
          direction: rtl;
          padding-bottom: 10px;
        }

        h2 {
          padding: 20px 5vw;
          margin: 0;
        }

        .sections {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .section-left {
          width: 600px;
          text-align: justify;
          padding: 0 5vw 35px 5vw;
        }

        section {
          width: 360px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          padding-bottom: 20px;
        }

        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 0 8px;
        }

        .right {
          direction: ltr;
          font-size: small;
        }

        .right p {
          padding: 9px;
        }

        p {
          margin: 0;
          padding: 6px;
        }

        hr {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Info;
