import styles from "../styles/Home.module.css";
import Head from "next/head";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Gener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <Link href="about">Sobre</Link>
          </li>
          <li>
            <Link href="product">Produto</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
