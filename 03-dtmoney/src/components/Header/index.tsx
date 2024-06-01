import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import iconLogo from "../../assets/icon-logo.svg"

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={ iconLogo } alt="" />
        <NewTransactionButton>
          Nova Transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}