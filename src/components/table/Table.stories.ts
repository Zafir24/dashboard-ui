import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Icon from '../icon-button/Icon.vue'
import { Headphones } from '@lucide/vue'
import { Watch } from '@lucide/vue';
import Table from './Table.vue'
import { Backpack } from '@lucide/vue';
import { Speaker } from '@lucide/vue';
import { MoveUp } from '@lucide/vue';
import { MoveDown } from '@lucide/vue';

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    caption: 'Top Products',
    headers: ['Product', 'Sold', 'Revenue', 'Change'],
    rows: [
      ['Wireless Headphones', '412', '$8,240', '12.5%'],
      ['Smart Watch', '324', '$6,120', '8.3%'],
      ['BackPack', '280', '$4,980', '-3.2%'],
      ['Bluetooth Speaker', '210', '$3,450', '6.7%'],
    ],
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithProductIcons: Story = {
  args: {
    caption: 'Top Products',
    headers: ['Product', 'Sold', 'Revenue', 'Change'],
    rows: [
      ['Wireless Headphones', '412', '$8,240', '12.5%'],
      ['Smart Watch', '324', '$6,120', '8.3%'],
      ['BackPack', '280', '$4,980', '-3.2%'],
      ['Bluetooth Speaker', '210', '$3,450', '6.7%'],
    ],
  },
  render: (args) => ({
    components: { Icon, Table, Headphones, Watch, Backpack, Speaker, MoveUp, MoveDown },
    setup: () => ({ args }),
    template: `
      <Table v-bind="args">
          <template #cell="{ value, cellIndex, rowIndex }">
            <span v-if="cellIndex === 0" class="inline-flex items-center gap-2">
              <Icon v-if="rowIndex === 0" size="small" filled="blue">
                <span aria-hidden="true"><Headphones /></span>
              </Icon>
              <Icon v-else-if="rowIndex === 1" size="small" filled="blue">
                <span aria-hidden="true"><Watch /></span>
              </Icon>
              <Icon v-else-if="rowIndex === 2" size="small" filled="blue">
                <span aria-hidden="true"><Backpack /></span>
              </Icon>
              <Icon v-else-if="rowIndex === 3" size="small" filled="blue">
                <span aria-hidden="true"><Speaker /></span>
              </Icon>
              {{ value }}
            </span>

            <span v-else-if="cellIndex === 3" class="inline-flex items-center gap-2">
              <Icon v-if="rowIndex === 0" size="small" filled="non">
                <span aria-hidden="true"><MoveUp class="text-green-500"/></span>
              </Icon>
              <Icon v-else-if="rowIndex === 1" size="small" filled="non">
                <span aria-hidden="true"><MoveUp class="text-green-500"/></span>
              </Icon>
              <Icon v-else-if="rowIndex === 2" size="small" filled="non">
                <span aria-hidden="true"><MoveDown class="text-red-500"/></span>
              </Icon>
              <Icon v-else-if="rowIndex === 3" size="small" filled="non">
                <span aria-hidden="true"><MoveUp class="text-green-500"/></span>
              </Icon>
              {{ value }}
            </span>
            <span v-else>
              {{ value }}
            </span>
        </template>
      </Table>
    `,
  }),
}

export const WithStatusIcons: Story = {
  args: {
    caption: 'Users',
    headers: ['Name', 'Email', 'Status'],
    rows: [
      ['Aarav Shah', 'aarav@example.com', 'active'],
      ['Maya Patel', 'maya@example.com', 'inactive'],
      ['Liam Brown', 'liam@example.com', 'active'],
    ],
  },
  render: (args) => ({
    components: { Icon, Table },
    setup: () => ({ args }),
    template: `
      <Table v-bind="args">
        <template #cell="{ value, cellIndex }">
          <span v-if="cellIndex === 2" class="inline-flex items-center gap-2 capitalize">
            <Icon :filled="value === 'active' ? 'green' : 'yellow'" size="small">
              <span
                class="block h-2 w-2 rounded-full"
                :class="value === 'active' ? 'bg-green-700' : 'bg-yellow-700'"
              />
            </Icon>
            {{ value }}
          </span>
          <span v-else>{{ value }}</span>
        </template>
      </Table>
    `,
  }),
}

export const WithCustomRowActions: Story = {
  args: {
    caption: 'Team Members',
    headers: ['Name', 'Role', 'Actions'],
    rows: [
      ['Aarav Shah', 'Designer', ''],
      ['Maya Patel', 'Engineer', ''],
      ['Liam Brown', 'Manager', ''],
    ],
  },
  render: (args) => ({
    components: { Icon, Table },
    setup: () => ({ args }),
    template: `
      <Table v-bind="args">
        <template #row="{ row, rowIndex }">
          <td class="px-4 py-3 align-middle">{{ row[0] }}</td>
          <td class="px-4 py-3 align-middle text-gray-600">{{ row[1] }}</td>
          <td class="px-4 py-3 align-middle">
            <div class="flex gap-2">
              <button
                type="button"
                class="rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
              >
                View
              </button>
              <button
                type="button"
                class="rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
              >
                Remove #{{ rowIndex + 1 }}
              </button>
            </div>
          </td>
        </template>
      </Table>
    `,
  }),
}
