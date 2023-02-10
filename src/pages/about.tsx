import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <>
    <main className={styles.main}>
      <Head>
        <title>About</title>
      </Head>
      <h1>Imagine school</h1>

      <Link href="/">Voltar</Link>
    </main>
    </>
  );
};

export default About;
