import { useContext, useEffect, useState } from "react";
import Head from "next/head";

import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { IProduct } from "@/types";
import {
  Button,
  ButtonContainer,
  InputGroup,
  LoginTitle,
  Main,
  PaymentShipping,
  PaymentTitle,
  PaymentTotal,
  PaymentValue,
  Product,
  ProductName,
  ProductPrice,
  Separator,
  ShoppingCartContainer,
  ShoppingCartPayment,
  ShoppingCartProducts,
  SubTitle,
  Title,
} from "./styles";
import Image from "next/image";

export default function ShoppingCart() {
  const {
    getProducts,
    deleteProduct,
    getTotalValue,
    getTotalProducts,
    getShippingValue,
  } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
  }, [refresh]);

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setRefresh((oldValue) => oldValue + 1);
  };

  function pluralOrSingular(number: number) {
    return number > 1 ? "Produtos" : "Produto";
  }

  return products && products.length > 0 ? (
    <>
      <Head>
        <title>Imagineshop - Shopping Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Meu Carrinho</Title>
        <SubTitle>Produtos</SubTitle>
        <ShoppingCartContainer>
          <ShoppingCartProducts>
            <Separator />
            {products &&
              products.map((product) => (
                <div key={product._id}>
                  <ButtonContainer>
                    <button onClick={() => handleDeleteProduct(product._id)}>
                      X
                    </button>
                  </ButtonContainer>
                  <Product>
                    <div>
                      <Image
                        src={product.image}
                        width={180}
                        height={180}
                        alt="Imagem do produto"
                      />
                    </div>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                  </Product>
                  <Separator />
                </div>
              ))}
          </ShoppingCartProducts>

          <section>
            <ShoppingCartPayment>
              <PaymentTitle>1. Resumo do pedido</PaymentTitle>
              <PaymentValue>
                <span>
                  {products.length} {pluralOrSingular(products.length)}{" "}
                </span>{" "}
                <span>{getTotalProducts()}</span>
              </PaymentValue>
              <PaymentShipping>
                <span>Frete </span> <span>{getShippingValue()}</span>
              </PaymentShipping>
              <PaymentTotal>
                <span>Total </span> <span>{getTotalValue()}</span>
              </PaymentTotal>
              <Separator />
              <LoginTitle>2. Login</LoginTitle>
              <InputGroup>
                <span>E-MAIL:</span>
                <input type="text" />
              </InputGroup>
              <InputGroup>
                <span>SENHA:</span>
                <input type="password" />
              </InputGroup>
              <Button>Continuar</Button>
            </ShoppingCartPayment>
          </section>
        </ShoppingCartContainer>
      </Main>
    </>
  ) : (
    <>
      <Head>
        <title>Imagineshop - Shopping Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Sem produto</h1>
    </>
  );
}
