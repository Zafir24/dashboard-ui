import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

export const tableWrapperVariants = cva([
  'w-full',
  'overflow-hidden',
  'rounded-xl',
  'border',
  'border-gray-200',
  'bg-white',
  'shadow-sm',
])

export const tableVariants = cva([
  'w-full',
  'border-collapse',
  'text-left',
  'text-sm',
  'text-gray-700',
])

export const tableHeaderCellVariants = cva([
  'bg-gray-50',
  'px-4',
  'py-3',
  'text-xs',
  'font-semibold',
  'uppercase',
  'tracking-wide',
  'text-gray-500',
])

export const tableRowVariants = cva([
  'border-t',
  'border-gray-100',
  'transition-colors',
  'hover:bg-gray-50',
])

export const tableCellVariants = cva(['px-4', 'py-3', 'align-middle'])

export type TableWrapperProps = VariantProps<typeof tableWrapperVariants>
export type TableProps = VariantProps<typeof tableVariants>
