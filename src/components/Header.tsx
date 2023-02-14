import styled from "styled-components";
import Image from "next/image";

import Logo from "../assets/logo.png"
import { Container } from "@/styles/utils";

const Header = () => {
  return (
    <StyledHeader>
      <NavBar>
        <Image src={Logo} alt="logo" width={200} height={100}/>
        <MenuList>
            <li>Home</li>
            <li>Sobre</li>
            <li>Carrinho</li>
        </MenuList>
      </NavBar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
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
`

export default Header;
