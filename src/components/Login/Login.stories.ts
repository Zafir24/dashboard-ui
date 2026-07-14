import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Login from './Login.vue'

const meta = {
  title: 'Components/Login',
  component: Login,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="min-height: 100vh; background: #f3f4f6;"><story /></div>',
    }),
  ],
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Login },
    template: '<Login />',
  }),
}

export const Mobile: Story = {
  render: () => ({
    components: { Login },
    template: '<Login />',
  }),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  render: () => ({
    components: { Login },
    template: '<Login />',
  }),
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
