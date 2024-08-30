import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root)

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export const Content = styled(Tooltip.Content, {
  color: '$white',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  fontFamily: '$default',
  borderRadius: '5px'
})