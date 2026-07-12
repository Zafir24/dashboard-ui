import Card from './Card.vue'
import Icon from '../icon-button/Icon.vue'
import Chart from '../chart/Charts.vue'
import { ShoppingCart } from '@lucide/vue'

const series = [
  {
    name: 'Orders',
    data: [15, 22, 18, 29, 25, 34, 31],
  },
]

const options = {
  chart: {
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 95, 100],
    },
  },
  colors: ['#22c55e'],
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    theme: 'light',
    x: {
      show: false,
    },
  },
}

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    leading: { control: 'text' },
  },
}

const Template = (args: any) => ({
  components: { Card, Icon, ShoppingCart, Chart },
  setup() {
    return { args, series, options }
  },
  template: `
    <Card v-bind="args">
      <template #icon>
        <Icon filled="green" :clickable="false" size="medium">
        <ShoppingCart />
        </Icon>
      </template>
      <template #chart>
        <Chart :series="series" :options="options" :height="100" type="area" />
      </template>
    </Card>
  `,
})

export const Default = Template.bind({}) as any
Default.args = {
  title: 'Revenue',
  value: '£12,000',
  up: '5%',
  leading: 'This month',
}
