import { styled } from "@stitches/react";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})

export const CartContainer = styled('div', {
  display: 'flex',
  padding: '1rem',
  borderRadius: 6,
  background: '$gray800',
  color: '$gray400',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  }
})