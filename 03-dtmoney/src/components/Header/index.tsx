import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import iconLogo from "../../assets/icon-logo.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={ iconLogo } alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
       
      </HeaderContent>
    </HeaderContainer>
  )
}