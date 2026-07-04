import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'outline', 'error'],
      control: { type: 'radio' },
    },
  },
  args: {
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
}
