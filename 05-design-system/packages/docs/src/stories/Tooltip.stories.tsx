import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ignite-ui/react'

export default {
  title: 'Alertas/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Testando o elemento Tooltip.</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args : {
    isAvailable: true,
  },
}


