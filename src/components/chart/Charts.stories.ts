import type { ApexAxisChartSeries, ApexOptions } from 'apexcharts'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Charts from './Charts.vue'

const series: ApexAxisChartSeries = [
  {
    name: 'Revenue',
    data: [24, 32, 28, 41, 39, 52, 48],
  },
]

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['purple'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: '#e5e7eb',
    strokeDashArray: 4,
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: '#6b7280',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6b7280',
        fontSize: '12px',
      },
    },
  },
  tooltip: {
    theme: 'light',
  },
}

const meta = {
  title: 'Components/Chart',
  component: Charts,
  tags: ['autodocs'],
  args: {
    type: 'line',
    height: 240,
    options,
    series,
  },
  render: (args) => ({
    components: { Charts },
    setup() {
      return { args }
    },
    template: `
			<div class="max-w-2xl bg-white p-6">
				<Charts v-bind="args" />
			</div>
		`,
  }),
} satisfies Meta<typeof Charts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
