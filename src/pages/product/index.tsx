import { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Product: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Página de produto</h1>
      <Link href="/">Voltar</Link>
    </main>
  );
};

export default Product;
