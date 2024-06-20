import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Product(){
  return(
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuuul, <strong>Hévelin Cristina</strong>, sua <strong>camiseta</strong> já está a caminho de sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}