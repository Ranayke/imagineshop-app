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
  _id: string;
  name: string;
  image: string;
  price: number;
  formattedPrice: string;
  splitPrice: string;
}

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductContainer>
      <Title>
        <span>Des</span>taques
      </Title>

      <ProductList>
        {products &&
          products.map((product) => (

            <Link href="/">
              <ProductItem key={product._id}>
                <Image
                  src={product.image}
                  alt="Product image"
                  width={230}
                  height={230}
                />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formattedPrice}</ProductPrice>
                <ProductSplitPrice>
                  10x de {product.splitPrice} sem juros
                </ProductSplitPrice>
              </ProductItem>
            </Link>
            
          ))}
      </ProductList>
    </ProductContainer>
  );
};

export default Products;
