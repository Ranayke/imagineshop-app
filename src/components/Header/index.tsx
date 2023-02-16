import Image from "next/image";
import Link from "next/link";

import Logo from "../../assets/logo.png";
import ShoppingCartLogo from "../../assets/carrinho.png";

import { MenuItem, MenuList, NavBar, StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <NavBar>
        <Image src={Logo} alt="Logo da ImagineShop" width={200} height={100} />
        <MenuList>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">Sobre</Link>
          </MenuItem>
          <MenuItem>
            <Link legacyBehavior href="/shopping-cart">
              <a>
                <Image
                  src={ShoppingCartLogo}
                  alt="Carrinho de compras"
                  width={52}
                  height={52}
                />
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
