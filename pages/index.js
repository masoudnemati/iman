import Head from "next/head";
import Hero from "../components/home/Hero";
import Layout from "../components/layout/Layout";

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
        </main>
      </Layout>
    </>
  );
}
