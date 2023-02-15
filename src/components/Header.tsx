import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logo.png";
import ShoppingCartLogo from "../assets/carrinho.png";
import { Container } from "@/styles/utils";

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

const StyledHeader = styled.header`
  width: 100vw;
  margin: 1.75rem 0 3.125rem 0;
`;

const NavBar = styled.nav`
  ${Container};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;
