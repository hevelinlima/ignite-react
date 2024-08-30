import { ToastAction, ToastProvider } from "@radix-ui/react-toast";
import { Description, Root, Title, Viewport } from "./styles";
import { X } from "phosphor-react";

export interface ToastProps {
  title: string
  description?: string
  open: boolean
  setOpen: (open: boolean) => void
  variant: 'success' | 'failure'
}

export function Toast({open, setOpen, title, description, variant }: ToastProps) {
  return(
    <ToastProvider>
      <Root open={open} onOpenChange={setOpen} variant={variant}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ToastAction altText="Close" asChild onClick={() => setOpen(false)}>
          <X />
        </ToastAction>
      </Root>
      <Viewport />
    </ToastProvider>
  )
}