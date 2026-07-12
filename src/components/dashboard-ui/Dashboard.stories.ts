import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Dashboard from './Dashboard.vue'

const meta = {
  title: 'Components/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dashboard },
    template: `
        <Dashboard />
    `,
  }),
}
