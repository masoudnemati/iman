import React from "react";

const Info = () => {
  return (
    <>
      <main>
        <h2>درباره من:</h2>

        <section>
          <article className="right">
            <div>
              <p>:نام</p>
              <p>:سال تولد</p>
              <p>:محل سکونت</p>
              <p>:رشته تحصیلی</p>
              <p>:وضعیت تحصیلی</p>
              <p>:نام دانشگاه</p>
            </div>
          </article>
          <article className="left">
            <div>
              <p>ایمان نعمتی</p>
              <p>۱۳۷۴</p>
              <p>بندر ترکمن</p>
              <p>مهندسی کامپیوتر گرایش نرم افزار </p>
              <p>دانشجوی کارشناسی ارشد </p>
              <p>فلان دانشگاه</p>
            </div>
          </article>
        </section>
      </main>

      <style jsx>{`
        main {
          margin: 0;
          color: white;
          background-color: #1a2c29;
          direction: rtl;
          padding-bottom: 100px;
        }

        h2 {
          padding: 20px 5vw;
          margin: 0;
        }

        section {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
        }

        div {
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
      `}</style>
    </>
  );
};

export default Info;
