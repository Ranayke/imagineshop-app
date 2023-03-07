import { GetServerSideProps } from "next";
import {
  Button,
  ImageContainer,
  ProductContainer,
  ProductDescription,
  ProductDetail,
  ProductName,
  ProductPrice,
  ProductSplitPrice,
  Summary,
  SummaryTitle,
} from "./styles";

import Banner from "@/components/Banner";
import BannerImage from "../../../public/images/banner2.png";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  formattedPrice: string;
  splitPrice: string;
  fileName: string;
  description: string;
  summary: string;
}

interface ProductsProps {
  product: Product;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;
  const api = "https://imagineshopapi.fly.dev";
  const result = await fetch(`${api}/products/${productId}`);
  const product: Product = await result.json();

  product.image = `${api}/uploads/${product.fileName}`;
  product.formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);
  product.splitPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price / 10);
  return {
    props: {
      product,
    },
  };
};

export default function ProductId({ product }: ProductsProps) {
  return (
    <>
      <ProductContainer>
        <Banner image={BannerImage} width={1140} height={145} />

        <ProductDetail>
          <ImageContainer>
            <Image
              alt="Product Image"
              src={product.image}
              width={200}
              height={200}
            ></Image>
          </ImageContainer>

          <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
            <ProductSplitPrice>
              10x de {product.splitPrice} sem juros
            </ProductSplitPrice>
            <Button>Adicionar ao carrinho</Button>
            <ProductDescription>{product.description}</ProductDescription>
          </div>
        </ProductDetail>
        <SummaryTitle>
          <span>Inf</span>ormações do produto
        </SummaryTitle>
        <Summary>{product.summary}</Summary>
      </ProductContainer>
    </>
  );
}