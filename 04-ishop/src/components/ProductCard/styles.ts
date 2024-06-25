import { styled } from "@stitches/react";

export const CardContainer = styled('div', {
  width: '100%',
  height: '5.75rem',
  gap: '1.25rem',

  display: 'flex',
  img: {
    objectFit: 'cover',
  }
});

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  fontSize: '$md',

  p: {
    color: '$gray300',
  },
  span: {
    color: '$gray100',
    fontWeight: 'bold'
  },
  button: {
    marginTop: '3px',
    border: 0,
    background: 'transparent',
    color: '$green500',
    fontWeight: 'bold',
    maxWidth: '4rem',
    textAlign: 'left',

    '&:hover': {
      color: '$green300',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out'
    }
  }
})
