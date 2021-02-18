import React from "react";

const ContactMe = () => {
  return (
    <>
      <main>
        <h3>جهت تماس با من می توانید از طریق راه های زیر اقدام کنید:</h3>
        <article>
          <ul>
            <li>
              <a href="https://t.me/n1_iman">Telegram: @N1_iMAN</a>
            </li>
            <li>
              <a href="https://www.instagram.com/iman1995n1/">
                Instagram: @iman1995n1
              </a>
            </li>
            <li>
              <a href="">Email:</a>
            </li>
          </ul>
        </article>
      </main>

      <style jsx>{`
        main {
          direction: rtl;
          padding: 160px 5vw 180px 5vw;
          color: white;
          background-color: #1b374a;
          justify-content: center;
        }

        article {
          padding-top: 20px;
          direction: ltr;
        }

        h3 {
          margin: 0;
        }

        ul {
          display: flex;
          justify-content: center;
          flex-direction: column;
          flex-wrap: wrap;
        }

        li {
          width: 250px;
          padding: 10px 15px;
          margin: 10px;
          list-style: none;
          border: 1px solid black;
          background-color: #103147;
          border-radius: 10px;
        }

        li:hover {
          color: black;
          background-color: white;
        }
      `}</style>
    </>
  );
};

export default ContactMe;
