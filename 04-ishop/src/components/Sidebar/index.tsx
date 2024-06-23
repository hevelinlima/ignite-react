import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'

export function SideBar(){
  return(
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <ul>
          <li>Camiseta 1</li>
          <li>Camiseta 2</li>
        </ul>
        <Close>
          <X size={20} />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}