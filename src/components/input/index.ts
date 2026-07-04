import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

export const inputVariants = cva([
  'inline-flex',
  'w-fit',
  'items-center',
  'gap-2',
  'h-10',
  'px-3',
  'py-2',
  'border',
  'border-gray-300',
  'hover:border-blue-400',
  'focus-within:border-blue-600',
  'rounded-md',
])

export const fieldVariants = cva([
  'bg-transparent',
  'outline-none',
  'text-sm',
  'text-gray-700',
  'caret-gray-900',
  'placeholder:text-sm',
  'placeholder:text-gray-400',
])

export type InputProps = VariantProps<typeof inputVariants>
export type FieldProps = VariantProps<typeof fieldVariants>
