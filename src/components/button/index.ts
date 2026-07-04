import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'cursor-pointer',
    'inline-flex',
    'h-10',
    'items-center',
    'justify-center',
    'rounded-md',
    '',
    'px-4',
    'text-sm',
    'font-medium',
    '',
    '',
    '',
    '',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-blue-500',
    'focus-visible:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        primary: ['text-white', 'bg-blue-600', 'hover:bg-blue-700', 'active:bg-blue-800'],
        outline: [
          'bg-transparent',
          'border',
          'border-blue-600',
          'text-blue-600',
          'hover:bg-blue-700/10',
          'active:bg-blue-700/20',
        ],
        error: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export type ButtonProps = VariantProps<typeof buttonVariants>
