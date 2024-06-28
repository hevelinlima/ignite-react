import Image from "next/image";
import { CardContainer, CardContent } from "./styles";
import { IProduct } from "@/src/contexts/CartContext";
import { useCart } from "@/src/hooks/useCart";

interface ItemProps{
  cartItem: IProduct;
}

export function ProductCard({cartItem}: ItemProps){
  const { removeFromCart } = useCart()

  function handleRemoveItem(){
    removeFromCart(cartItem.id)
  }
  return(
    <CardContainer>
      <Image width={52} height={52} src={cartItem.imageURL} alt={cartItem.name} />
      <CardContent>
        <p> {cartItem.name} </p>
        <span> {cartItem.price} </span>
        <button onClick={handleRemoveItem} >Remover</button>
      </CardContent>
    </CardContainer>
  )
}