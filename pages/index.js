import Head from "next/head";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import AboutMe from "../components/home/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>ایمان نعمتی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <Info />
          <AboutMe />
        </main>
      </Layout>
    </>
  );
}
