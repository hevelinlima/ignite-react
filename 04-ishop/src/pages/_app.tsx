import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg"
import Image from "next/image";
import { CartContainer, Container, Header } from "../styles/pages/app";
import { Handbag } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog'
import { SideBar } from "../components/Sidebar";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Image src={ logoImg } alt="Logo do ignite" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartContainer>
              <Handbag size={32} weight="bold" />
            </CartContainer>
          </Dialog.Trigger>
          <SideBar />
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
