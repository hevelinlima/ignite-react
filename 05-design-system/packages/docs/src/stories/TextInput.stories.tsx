import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type here',
  } as TextInputProps,
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  } as TextInputProps,
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'calc.com/',
  },
}
