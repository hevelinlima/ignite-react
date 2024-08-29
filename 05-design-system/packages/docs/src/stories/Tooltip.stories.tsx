import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Box } from '@ignite-ui/react'

export default {
  title: 'Alerts/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: 
    <Box
      css={{ display: 'inline-block', color: 'white', margin: '30px' }}
    >
      26
    </Box>,
  },
  argTypes: {
    children: {
      control : {
        disable: true,
      }
    }
  }
} as Meta<TooltipProps>

export const Available: StoryObj<TooltipProps> = {
  args : {
    isAvailable: true,
  },
}

export const Unavailable: StoryObj<TooltipProps> = {
  args : {
    isAvailable: false,
  },
}


