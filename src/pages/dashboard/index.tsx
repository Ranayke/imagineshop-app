import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Main } from "./styles";

import BannerImage from "../../../public/images/BANNER01.png";

export default function Dashboard({ productsApi }: any) {
  return (
      <Main>
        <Banner image={BannerImage} width={1140} height={325} />
        <Products products={productsApi}></Products>
      </Main>
  );
}


