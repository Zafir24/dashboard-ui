import Card from './Card.vue'
import Icon from '../icon-button/Icon.vue'
import { ShoppingCart } from '@lucide/vue'
import Chart from '../chart/Charts.vue'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    leading: { control: 'text' },
  },
}

const Template = (args) => ({
  components: { Card, Icon, ShoppingCart, Chart },
  setup() {
    return { args }
  },
  template: `
    <Card v-bind="args">
      <template #icon>
        <Icon filled="green" :clickable="false" size="medium">
        <ShoppingCart class="h-5 w-5" />
        </Icon>
      </template>
      <template #chart>
      <Chart :data="[5, 10, 8, 12]" />
      </template>
    </Card>
  `,
})

export const Default = Template.bind({})
Default.args = {
  title: 'Revenue',
  value: '£12,000',
  leading: 'This month',
}
