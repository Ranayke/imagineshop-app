import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
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
    clearAll,
  } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

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

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const api = "https://imagineshopapi.fly.dev";
    const token = await getTokenLogin(api, email, password);
    if (!token) {
      console.log("login invalido");
      return;
    }
    const productIds: string[] = [];
    products.map((product) => productIds.push(product._id));
    const sell = await sellProducts(api, token, productIds);
    console.log(token);
    if (!token) {
      console.log("compra invalida");
      return;
    }
    console.log("comprado com sucesso");
    clearAll();
    router.push("/success");
  };

  const getTokenLogin = async (
    api: string,
    email: string,
    password: string
  ): Promise<string | null> => {
    const result = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    if (result.status !== 200) {
      return null;
    }
    const { token } = await result.json();
    return token;
  };

  const sellProducts = async (
    api: string,
    token: string,
    products: string[]
  ): Promise<string | null> => {
    const result = await fetch(`${api}/products/sell`, {
      method: "POST",
      body: JSON.stringify({ products }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.status !== 200) {
      return null;
    }
    return "Sucess";
  };

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
                <input
                  type="text"
                  value={email || ""}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </InputGroup>
              <InputGroup>
                <span>SENHA:</span>
                <input
                  type="password"
                  value={password || ""}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </InputGroup>
              <Button type="submit" onClick={handleSubmit}>
                Continuar
              </Button>
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
