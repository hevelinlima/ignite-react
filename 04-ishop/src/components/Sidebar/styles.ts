import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const Overlay = styled(Dialog.Content, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.25)'
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '20rem',
  padding: '4.5rem 3rem 3rem',
  overflowY: 'auto',

  backgroundColor: '$gray800',
  boxShadow:' -4px 0px 30px 0px rgba(0, 0, 0, 0.8)',
});

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  color: '$gray100',

  right: '1.75rem',
  top: '1.75rem',

  '&:hover': {
    color: '$white',
  }
})