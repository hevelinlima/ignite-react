import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  } as ButtonProps,
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  } as ButtonProps,
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximos passos
        <ArrowRight weight="bold" />
      </>
    ),
  } as ButtonProps,
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  } as ButtonProps,
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  } as ButtonProps,
}
