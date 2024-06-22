import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg"
import Image from "next/image";
import { CartContainer, Container, Header } from "../styles/pages/app";
import { Handbag } from "@phosphor-icons/react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Image src={ logoImg } alt="Logo do ignite" />
        <CartContainer>
          <Handbag size={32} weight="bold" />
        </CartContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
