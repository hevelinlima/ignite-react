import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { BuyButton, CardsContainer, CheckoutInfo, Close, Content, Overlay, Title } from './styles'
import { ProductCard } from '../ProductCard'

export function SideBar(){
  return(
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>

        <CardsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </CardsContainer>

        <CheckoutInfo>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>
          <div>
            <p>Valor Total</p>
            <p>R$ 275,90</p>
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