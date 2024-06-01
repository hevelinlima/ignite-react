import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import iconLogo from "../../assets/icon-logo.svg"
import * as Dialog from "@radix-ui/react-dialog";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={ iconLogo } alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
       
      </HeaderContent>
    </HeaderContainer>
  )
}