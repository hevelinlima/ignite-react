import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const Overlay = styled(Dialog.Content, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.25)'
});

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '22rem',
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
});

export const CardsContainer = styled('div', {
  marginTop: '2rem',
  overflow: 'auto',  
  maxHeight: '20rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '&::-webkit-scrollbar': {
    width: 8,
    height: 12,
  },

  '&::-webkit-scrollbar-track' : {
    background: '$gray900',
  },

  '&::-webkit-scrollbar-thumb' : {
    background: '$green300', 
    borderRadius: 4, 
  },


  '&::-webkit-scrollbar-thumb:hover' : {
    background: '$green500',
  }
});

export const CheckoutInfo = styled('div', {
  width: '100%',
  maxHeight: '5rem',
  marginTop: '2rem',
  paddingBottom: '3.125rem',

  display: 'flex',
  flexDirection: 'column',  
  gap: '0.5rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    
    p: {
      fontSize: '$lg',
      fontWeight: 'bold',
    },

    span: {
      display: 'flex',
      gap: '0.25rem',
      fontSize: '$md',
    }
  }
});

export const BuyButton = styled('button', {
  border: 0,
  color: '$white',
  backgroundColor: '$green500',
  width: '100%',
  borderRadius: 8,
  padding: '1.125rem 0',

  fontSize: '$md',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: '$green300',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer'
  }
});

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  color: '$gray300',
})