import Image from "next/image";
import Link from "next/link";
import {
  ProductContainer,
  ProductItem,
  ProductList,
  ProductName,
  ProductPrice,
  ProductSplitPrice,
  Title,
} from "./styles";

interface Product {
  name: string;
}

interface ProductsProps {
  products: any[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductContainer>
      <Title>
        <span>Des</span>taques
      </Title>

      <ProductList>

        <ProductItem>
          <Link href="/">
            <Image src="" alt="Product image" width={230} height={230}/>
            <ProductName>Nome</ProductName>
            <ProductPrice>Preço</ProductPrice>
            <ProductSplitPrice>Parcela</ProductSplitPrice>
          </Link>
        </ProductItem>

      </ProductList>
    </ProductContainer>
  );
};

export default Products;
