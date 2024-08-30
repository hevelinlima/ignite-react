import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { useState } from 'react';

export default {
  title: 'Alerts/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Mostrar Toast</Button>
          
          <Story open={open} setOpen={setOpen} />
        </>
      );
    },
  ],
} as Meta<ToastProps>

export const Succes: StoryObj<ToastProps> = {
  args: {
    title: 'Ação realizada!',
    description: 'Sua operação foi realizada com sucesso',
    variant: 'success'
  }
}


