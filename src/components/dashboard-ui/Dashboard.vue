<script setup lang="ts">
import List from '../list/List.vue'
import Icon from '../icon-button/Icon.vue'
import Input from '../input/Input.vue'
import Avatar from '../avatar/Avatar.vue'
import Button from '../button/Button.vue'
import MenuRoot from '../menu/MenuRoot.vue'
import MenuTrigger from '../menu/MenuTrigger.vue'
import MenuPortal from '../menu/MenuPortal.vue'
import MenuContent from '../menu/MenuContent.vue'
import MenuItem from '../menu/MenuItem.vue'
import Card from '../card/Card.vue'
import Table from '../table/Table.vue'
import Charts from '../chart/Charts.vue'
import { House } from '@lucide/vue'
import { ShoppingCart } from '@lucide/vue'
import { ChartLine } from '@lucide/vue'
import { Users } from '@lucide/vue'
import { Tag } from '@lucide/vue'
import { FileText } from '@lucide/vue'
import { Settings } from '@lucide/vue'
import { Bell } from '@lucide/vue';
import { BadgePoundSterling } from '@lucide/vue';
import { ChartPie } from '@lucide/vue';
import { Headphones } from '@lucide/vue';
import { Watch } from '@lucide/vue';
import { Backpack } from '@lucide/vue';
import { Speaker } from '@lucide/vue';
import { ArrowUp, ArrowDown } from '@lucide/vue'
import { UserRound } from '@lucide/vue';
import { PackagePlus } from '@lucide/vue';
import { Star } from '@lucide/vue';
import { Undo2 } from '@lucide/vue';
import projectLogo from '../../../vue-dash.png'
const revenueSeries = [
  {
    name: 'Revenue',
    data: [15, 22, 18, 29, 25, 34, 31],
  },
]

const ordersSeries = [
  {
    name: 'Orders',
    data: [8, 12, 14, 18, 17, 21, 24],
  },
]

const customersSeries = [
  {
    name: 'Customers',
    data: [40, 38, 35, 37, 34, 33, 31],
  },
]

const productsSeries = [
  {
    name: 'Products',
    data: [10, 11, 13, 12, 15, 16, 18],
  },
]

function makeChartOptions(color: string) {
  return {
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth' as const,
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
    colors: [color],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: 'light' as const,
      x: {
        show: false,
      },
    },
  }
}

const revenueOptions = makeChartOptions('#AD46FF')
const ordersOptions = makeChartOptions('#00C950')
const customersOptions = makeChartOptions('#F0B100')
const productsOptions = makeChartOptions('#2B7FFF')

const weeklyRevenueData = ['£10k', '£4k', '£33k', '£14k', '£22k', '£27k', '£30k']

const weeklyRevenueSeries = [
  {
    name: 'Revenue',
    data: weeklyRevenueData.map((value) => Number(value.replace('£', '').replace('k', '')) * 1000),
  },
]

const weeklyRevenueOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'smooth' as const,
    width: 3,
  },
  colors: ['#7c3aed'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: '#e5e7eb',
    strokeDashArray: 4,
  },
  xaxis: {
    categories: ['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16', 'Sat 17', 'Sun 18  '],
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
      formatter: (value: number) => `£${Math.round(value / 1000)}k`,
      style: {
        colors: '#6b7280',
        fontSize: '12px',
      },
    },
  },
  tooltip: {
    theme: 'light' as const,
    y: {
      formatter: (value: number) => `£${Math.round(value / 1000)}k`,
    },
  },
}

const userStatusHeaders = ['Product', 'Sold', 'Revenue', 'Change']
const userStatusRows = [
  ['Wireless Headphones', '412', '$8,240', '12.5%'],
  ['Smart Watch', '324', '$6,120', '8.3%'],
  ['BackPack', '280', '$4,980', '-3.2%'],
  ['Bluetooth Speaker', '210', '$3,450', '6.7%'],
]

const teamHeaders = ['Customer', 'Email', 'Spent']
const teamRows = [
  ['Micheal Johnson', 'micheal@example.com', '£1,200'],
  ['Sarah Williams', 'sarah@example.com', '£800'],
  ['David Brown', 'david@example.com', '£1,500'],
  ['Emily Davis', 'emily@example.com', '£1,000'],
]

</script>

<template>
  <div class="bg-white">
    <div class="flex min-h-screen gap-4">
      <div class="sticky top-0 z-20 flex h-screen w-60 shrink-0 flex-col gap-4 overflow-y-auto border-r border-gray-300 bg-white pt-5 shadow-lg">
        <div class="px-4 pb-3">
          <img :src="projectLogo" alt="Vue Dash logo" class="mx-auto w-full h-auto object-contain" />
        </div>
        <List :clickable="true" :active="true">
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><House class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Dashboard</p>
            </template>
          </List>

          <List :clickable="true">
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><ChartLine class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Analytics</p>
            </template>
          </List>

          <List :clickable="true">
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><ShoppingCart class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Orders</p>
            </template>
          </List>

          <List :clickable="true" >
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><Users class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Customers</p>
            </template>
          </List>

          <List :clickable="true">
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><Tag class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Products</p>
            </template>
          </List>

          <List :clickable="true" >
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><FileText class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Reports</p>
            </template>
          </List>

          <List :clickable="true">
            <template #start>
              <Icon filled="non" :clickable="false" size="small"><Settings class="h-4 w-4" /></Icon>
            </template>
            <template #default>
              <p class="text-sm font-semibold">Settings</p>
            </template>
          </List>
      </div>

      <div class="flex min-w-0 flex-1 flex-col gap-4 p-4 pt-10">
        <div
        data-slot="header text"
        class="flex items-center justify-between gap-3">
          <div class="space-y-1 flex-1">
          <h1 class="block text-3xl font-semibold">Dashboard</h1>
          <p class="block text-xs text-gray-600">Welcome back, User! Here's what's happening today.</p>
          </div>
          <div
          data-slot="header actions"
          class="flex gap-2 items-center align-center">
          <Input placeholder="Search..." size="small" />
          <Icon filled="non" :clickable="true" size="medium"><Bell class="h-4 w-4" /></Icon>
          <MenuRoot>
        <MenuTrigger>
          <Avatar size="small" color="purple"/>
        </MenuTrigger>

        <MenuPortal>
          <MenuContent>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuContent>
        </MenuPortal>
      </MenuRoot>
          </div>
        </div>
        <div
          data-slot="main content"
          class="grid gap-2 pt-2 sm:grid-cols-2 xl:grid-cols-4"
        >
          <Card class="!w-full" title="Revenue" value="£12,000" up="5%" leading="This month">
            <template #icon>
              <Icon filled="purple" :clickable="false" size="medium">
                <BadgePoundSterling />
              </Icon>
            </template>
            <template #chart>
              <Charts :series="revenueSeries" :options="revenueOptions" :height="100" type="area" />
            </template>
          </Card>

          <Card class="!w-full" title="Orders" value="1,248" up="8%" leading="This week">
            <template #icon>
              <Icon filled="green" :clickable="false" size="medium">
                <ShoppingCart />
              </Icon>
            </template>
            <template #chart>
              <Charts :series="ordersSeries" :options="ordersOptions" :height="100" type="area" />
            </template>
          </Card>

          <Card class="!w-full" title="Customers" value="3,402" down="2%" leading="This month">
            <template #icon>
              <Icon filled="yellow" :clickable="false" size="medium">
                <Users />
              </Icon>
            </template>
            <template #chart>
              <Charts :series="customersSeries" :options="customersOptions" :height="100" type="area" />
            </template>
          </Card>

          <Card class="!w-full" title="Products" value="532" up="3%" leading="This month">
            <template #icon>
              <Icon filled="blue" :clickable="false" size="medium">
                <ChartPie />
              </Icon>
            </template>
            <template #chart>
              <Charts :series="productsSeries" :options="productsOptions" :height="100" type="area" />
            </template>
          </Card>
        </div>

        <div
          data-slot="mid content"
          class="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1.2fr]"
        >
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div class="mb-3">
              <h2 class="text-base font-semibold text-gray-800">Revenue Review</h2>
            </div>
            <Charts
              :series="weeklyRevenueSeries"
              :options="weeklyRevenueOptions"
              :height="260"
              type="line"
            />
          </div>

          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div class="mb-3 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:flex">
              <h2 class="flex-1 text-base font-semibold text-gray-800">Recent Activity</h2>
              <Button size="small" label="View All" variant="outline" color="purple"/>
            </div>

            <div class="flex flex-col gap-2">
            <List expanded :clickable="true">
              <template #start>
                <Icon filled="purple" :clickable="false" size="small"><House class="h-4 w-4 text-purple" /></Icon>
              </template>
              <template #default>
                <p class="text-sm font-semibold">New Order #1053</p>
              </template>
              <template #expanded>
                <span>£129.00</span>
              </template>
              <template #end>
                <p>2m ago</p>
              </template>
            </List>

            <List expanded :clickable="true">
              <template #start>
                <Icon filled="green" :clickable="false" size="small"><UserRound class="h-4 w-4 text-purple" /></Icon>
              </template>
              <template #default>
                <p class="text-sm font-semibold">New Customer Registered</p>
              </template>
              <template #expanded>
                <span>Jane Smith</span>
              </template>
              <template #end>
                <p>15m ago</p>
              </template>
            </List>

             <List expanded :clickable="true">
              <template #start>
                <Icon filled="blue" :clickable="false" size="small"><PackagePlus class="h-4 w-4 text-blue" /></Icon>
              </template>
              <template #default>
                <p class="text-sm font-semibold">Product "Wireless Headphones" Updated</p>
              </template>
              <template #end>
                <p>1h ago</p>
              </template>
            </List>

            <List expanded :clickable="true">
              <template #start>
                <Icon filled="yellow" :clickable="false" size="small"><Star class="h-4 w-4 text-yellow-500" /></Icon>
              </template>
              <template #default>
                <p class="text-sm font-semibold">New Review Received</p>
              </template>
              <template #expanded>
                <span>5 stars for "Smartwatch"</span>
              </template>
              <template #end>
                <p>3h ago</p>
              </template>
            </List>

            <List expanded :clickable="true">
              <template #start>
                <Icon filled="purple" :clickable="false" size="small"><Undo2 class="h-4 w-4 text-purple-500" /></Icon>
              </template>
              <template #default>
                <p class="text-sm font-semibold">Refund issued for order #1048</p>
              </template>
              <template #expanded>
                <span>£89.00</span>
              </template>
              <template #end>
                <p>5h ago</p>
              </template>
            </List>
            </div>
          </div>
        </div>

        <div
          data-slot="mid content"
          class="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1.2fr]"
        >
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div class="mb-3 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:flex">
              <h2 class="text-base font-semibold text-gray-800">Top Products</h2>
              <Button size="small" label="View All" variant="outline" color="purple"/>
            </div>
            <Table
              :headers="userStatusHeaders"
              :rows="userStatusRows"
            >
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
                  <Icon v-if="rowIndex === 2" size="small" filled="non">
                    <span aria-hidden="true"><ArrowDown class="text-red-500" /></span>
                  </Icon>
                  <Icon v-else size="small" filled="non">
                    <span aria-hidden="true"><ArrowUp class="text-green-500" /></span>
                  </Icon>
                  {{ value }}
                </span>
                <span v-else>{{ value }}</span>
              </template>
            </Table>
          </div>

          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div class="mb-3 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:flex">
              <h2 class="text-base font-semibold text-gray-800">Team Members</h2>
              <Button size="small" label="View All" variant="outline" color="purple"/>
            </div>
            <Table
              :headers="teamHeaders"
              :rows="teamRows"
            >
              <template #cell="{ value, cellIndex, rowIndex }">
                <span v-if="cellIndex === 0" class="inline-flex items-center gap-2">
                  <Avatar
                    :initial="String(value).split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()"
                    size="small"
                    :color="rowIndex % 2 === 0 ? 'purple' : 'blue'"
                  />
                  {{ value }}
                </span>
                <span v-else>{{ value }}</span>
              </template>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
