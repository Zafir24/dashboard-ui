import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MenuRoot from './MenuRoot.vue'
import MenuTrigger from './MenuTrigger.vue'
import MenuPortal from './MenuPortal.vue'
import MenuContent from './MenuContent.vue'
import MenuItem from './MenuItem.vue'
import Avatar from '../avatar/Avatar.vue'

const meta = {
  title: 'Components/Menu',
  component: MenuRoot,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      MenuRoot,
      MenuTrigger,
      MenuPortal,
      MenuContent,
      MenuItem,
      Avatar,
    },
    template: `
      <MenuRoot>
        <MenuTrigger>
          <Avatar color="purple"/>
        </MenuTrigger>

        <MenuPortal>
          <MenuContent>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuContent>
        </MenuPortal>
      </MenuRoot>
    `,
  }),
}
