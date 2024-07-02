import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    lineHeight: 1.6,  
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',

    marginTop: '0.5rem'
  },

  a: {
    display: 'block',
    marginTop: '3rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',
    
    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageContainer = styled('div',  {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: '1rem',
  boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.8)', 

  img: {
    objectFit: 'cover',
  }
});

export const ImagesGroup = styled('div', {
  display: 'flex',

  div: {
    marginLeft: '-3.5rem',
  }
})