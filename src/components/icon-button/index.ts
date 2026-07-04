import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

export const iconVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'rounded-md',
    'align-middle',
  ],
  {
    variants: {
      size: {
        medium: 'h-10 w-10',
        small: 'h-8 w-8',
      },
      filled: {
        blue: 'border bg-blue-500/10 border-blue-500 text-blue-500',
        purple: 'border bg-purple-500/10 border-purple-500 text-purple-500',
        green: 'border bg-green-500/10 border-green-500 text-green-500',
        yellow: 'border bg-yellow-500/10 border-yellow-500 text-yellow-500',
        non: '!rounded-full text-gray-600',
      },

      clickable: {
        true: 'cursor-pointer',
        false: 'select-none',
      },
    },
    compoundVariants: [
      {
        filled: 'non',
        clickable: true,
        class: 'hover:bg-blue-500/10 active:bg-blue-500/20',
      },
    ],
  },
)

export type IconProps = VariantProps<typeof iconVariants>
