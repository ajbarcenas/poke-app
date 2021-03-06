import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import PokeInfo from "../components/PokeInfo/PokeInfo";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Poke App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PokeInfo />
        <Footer />
      </Layout>
    </>
  );
}
