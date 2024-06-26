import Image from "next/image";
import { CardContainer, CardContent } from "./styles";
import { IProduct } from "@/src/contexts/CartContext";

interface ItemProps{
  cartItem: IProduct;
}

export function ProductCard({cartItem}: ItemProps){
  return(
    <CardContainer>
      <Image width={52} height={52} src={cartItem.imageURL} alt={cartItem.name} />
      <CardContent>
        <p> {cartItem.name} </p>
        <span> {cartItem.price} </span>
        <button>Remover</button>
      </CardContent>
    </CardContainer>
  )
}