import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { BuyButton, CardsContainer, CheckoutInfo, Close, Content, Overlay, Title } from './styles'
import { ProductCard } from '../ProductCard'
import { useCart } from "@/src/hooks/useCart";

export function SideBar(){
  const { cartItems } = useCart();

  const cartTotal = cartItems.length;

  const valueToPay = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0).toFixed(2);
  

  return(
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>

        <CardsContainer>
          {cartItems.map((cartItem) => (
            <ProductCard
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))}
        </CardsContainer>

        <CheckoutInfo>
          <div>
            <span>Quantidade</span>
            <span>
              { cartTotal } {cartTotal == 1 ? 'item' : 'itens' } 
            </span>
          </div>
          <div>
            <p>Valor Total</p>
            <p>R$ { valueToPay }</p>
          </div>
        </CheckoutInfo>

        <BuyButton>
          Finalizar compra
        </BuyButton>

        <Close>
          <X size={20} weight='bold' />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}