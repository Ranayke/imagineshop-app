import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const ProductDetail: NextPage = () => {
    const router = useRouter();
    const productId = router.query.productId;

  return (
    <main className={styles.main}>
      <h1>Produto {productId}</h1>
      <Link href="/">Voltar</Link>
    </main>
  );
};

export default ProductDetail;
