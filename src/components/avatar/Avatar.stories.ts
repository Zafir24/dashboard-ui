import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Avatar from './Avatar.vue'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['blue', 'purple'],
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'small'],
      control: { type: 'radio' },
    },
  },
  args: {
    initial: 'ZA',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'blue',
    size: 'medium',
  },
}

export const Size: Story = {
  args: {
    color: 'blue',
    size: 'small',
  },
}

export const Color: Story = {
  args: {
    color: 'purple',
  },
}
