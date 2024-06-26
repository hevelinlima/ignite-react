import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2 ))',
  marginLeft: 'auto',
  minHeight: 430
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: 696,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});

export const ImageFooter = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
});

export const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },
  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300'
  },
});

export const CartFooter = styled('button', {
  display: 'flex',
  padding: '1rem',
  borderRadius: 6,
  background: '$green500',
  color: '$white',
  border: 0,

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  }
});

export const LoadingComponents = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2 ))',
  marginLeft: 'auto',
  minHeight: 430,

  gap: '48px',
  overflow: 'hidden',
})