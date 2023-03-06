import { GetServerSideProps } from "next";
import { ProductContainer } from "./styles";

import Banner from "@/components/Banner";
import BannerImage from "../../../public/images/banner2.png"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;
  const api = "https://imagineshopapi.fly.dev";
  const result = await fetch(`${api}/products/${productId}`);
  const data = await result.json();

  data.image = `${api}/uploads/${data.fileName}`;
  data.formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.price);
  data.splitPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.price / 10);
  return {
    props: {
      data,
    },
  };
};

export default function ProductId({ data }: any) {
  return (
    <>
    <ProductContainer>
        <Banner image={BannerImage} width={1140} height={145} />
      <h1>{data.name}</h1>
    </ProductContainer>
    </>
  );
}

