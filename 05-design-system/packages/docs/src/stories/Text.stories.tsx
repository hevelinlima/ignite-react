import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut eos eligendi, molestiae voluptatibus quia quis, recusandae iure, soluta iusto deserunt harum dolorum fugiat repudiandae dolore dignissimos dicta sint incidunt?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Secondary: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}

Text.displayName = 'Text'
