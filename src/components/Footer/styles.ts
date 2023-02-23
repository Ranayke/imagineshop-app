import { Container } from "@/styles/utils";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 12.5rem;
  background-color: #f4f4f4;
`;

export const FooterContainer = styled.div`
    ${Container}
`

export const Contact = styled.p`
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.secondary}
    margin: 0;
    text-align: center;
`

export const SocialNetworksList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem;
`