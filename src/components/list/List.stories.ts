import type { Meta, StoryObj } from '@storybook/vue3-vite'
import List from './List.vue'
import Icon from '../icon-button/Icon.vue'
import { Star } from '@lucide/vue'
import { House } from '@lucide/vue'
import { ChartLine } from '@lucide/vue'
import { ShoppingCart } from '@lucide/vue'

const meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { List, Icon, Star },
    template: `
      <List>
        <template #start>
          <Icon filled="yellow" :clickable="false" size="small"><Star fill="yellow" class="h-4 w-4" /></Icon>
        </template>
        <template #default>
          <p class="text-sm font-semibold">New Review Received </p>
        </template>
        <template #end>
          <p class="text-gray-500 text-sm font-semibold">2m ago</p>
        </template>
      </List>
    `,
  }),
}

export const Clickable: Story = {
  args: {
    clickable: true,
  },
  render: (args) => ({
    components: { List, Icon, ChartLine, House, ShoppingCart },
    setup() {
      return { args }
    },
    template: `
      <List v-bind="args">
        <template #start>
          <Icon filled="non" :clickable="false" size="small"><House class="h-4 w-4" /></Icon>
        </template>
        <template #default>
          <p class="text-sm font-semibold">Home</p>
        </template>
      </List>

      <List v-bind="args">
        <template #start>
          <Icon filled="non" :clickable="false" size="small"><ChartLine class="h-4 w-4" /></Icon>
        </template>
        <template #default>
          <p class="text-sm font-semibold">Analytics</p>
        </template>
      </List>

      <List v-bind="args">
        <template #start>
          <Icon filled="non" :clickable="false" size="small"><ShoppingCart class="h-4 w-4" /></Icon>
        </template>
        <template #default>
          <p class="text-sm font-semibold">Orders</p>
        </template>
      </List>

    `,
  }),
}

export const Expanded = {
  args: {
    expanded: true,
  },
  render: (args) => ({
    components: { List, Icon, Star },
    setup() {
      return { args }
    },
    template: `
      <List v-bind="args">
        <template #start>
          <Icon filled="yellow" :clickable="false" size="small"><Star fill="yellow" class="h-4 w-4" /></Icon>
        </template>
        <template #default>
          <p class="text-sm font-semibold">Home</p>
          <span class="text-xs text-gray-500">Go to dashboard</span>
        </template>
        <template #end>
          <p >2m ago</p>
        </template>
      </List>
    `,
  }),
}
