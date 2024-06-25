import Image from "next/image";
import { CardContainer, CardContent } from "./styles";
import iconLogo from "../../../public/icon.svg"

export function ProductCard(){
  return(
    <CardContainer>
      <Image src={iconLogo} alt="Logo" />
      <CardContent>
        <p>Camiseta Beyond the Limits</p>
        <span>R$ 79,90</span>
        <button>Remover</button>
      </CardContent>
    </CardContainer>
  )
}