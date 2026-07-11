import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Bell } from '@lucide/vue'
import { ShoppingCart } from '@lucide/vue'
import { ChartPie } from '@lucide/vue'
import { UsersRound } from '@lucide/vue'
import { CirclePoundSterling } from '@lucide/vue'
import Icon from './Icon.vue'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['medium', 'small'],
      control: { type: 'radio' },
    },
    filled: {
      options: ['blue', 'purple', 'green', 'yellow', 'non'],
      control: { type: 'radio' },
    },
    clickable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Clickable: Story = {
  render: (args) => ({
    components: { Icon, Bell },
    setup() {
      return { args }
    },
    template: '<Icon v-bind="args"><Bell class="h-4 w-4" /></Icon>',
  }),
  args: {
    clickable: true,
    filled: 'non',
    size: 'small',
  },
}

export const FilledBlue: Story = {
  render: (args) => ({
    components: { Icon, ChartPie },
    setup() {
      return { args }
    },
    template: '<Icon v-bind="args"><ChartPie class="h-5 w-5" /></Icon>',
  }),
  args: {
    filled: 'blue',
    clickable: false,
    size: 'medium',
  },
}

export const FilledPurle: Story = {
  render: (args) => ({
    components: { Icon, CirclePoundSterling },
    setup() {
      return { args }
    },
    template: '<Icon v-bind="args"><CirclePoundSterling class="h-5 w-5" /></Icon>',
  }),
  args: {
    filled: 'purple',
    clickable: false,
    size: 'medium',
  },
}

export const FilledGreen: Story = {
  render: (args) => ({
    components: { Icon, ShoppingCart },
    setup() {
      return { args }
    },
    template: '<Icon v-bind="args"><ShoppingCart class="h-5 w-5" /></Icon>',
  }),
  args: {
    filled: 'green',
    clickable: false,
    size: 'medium',
  },
}

export const FilledYellow: Story = {
  render: (args) => ({
    components: { Icon, UsersRound },
    setup() {
      return { args }
    },
    template: '<Icon v-bind="args"><UsersRound class="h-5 w-5" /></Icon>',
  }),
  args: {
    filled: 'yellow',
    clickable: false,
    size: 'medium',
  },
}
