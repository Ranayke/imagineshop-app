import Image from "next/image";
import { Contact, FooterContainer, SocialNetworksList, StyledFooter } from "./styles";

import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Image src={Logo} width={130} height={60} alt="Logo da ImagineShop" />
        <Contact>
          Imagine Shop - +55 (48) 3771 - 1703 / 3771 - 1823 -
          imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros -
          Florianópolis/SC
        </Contact>
        <SocialNetworksList>
            
        </SocialNetworksList>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;