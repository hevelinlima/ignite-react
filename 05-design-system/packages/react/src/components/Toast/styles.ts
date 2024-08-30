import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Root = styled(Toast.Root, {

  variants: {
    variant: {
      success: {
        backgroundColor: '$gray600', 
        color: '$white',
      },
      failure: {
        backgroundColor: '#f44336', 
        color: '$white',
      },
    },
  },
})

export const Title = styled(Toast.Title, {})

export const Description = styled(Toast.Description, {})

export const Viewport = styled(Toast.Viewport, {})