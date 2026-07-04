import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

export const avatarVariants = cva(
  [
    'inline-flex',
    'select-none',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'rounded-full',
    'align-middle',
    'border',
  ],
  {
    variants: {
      color: {
        blue: 'border-blue-500',
        purple: 'border-purple-500',
      },
      size: {
        small: 'h-8 w-8',
        medium: 'h-10 w-10',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'medium',
    },
  },
)

export const avatarFallbackVariants = cva(
  [
    'leading-1',
    'cursor-pointer',
    'flex',
    'h-full',
    'w-full',
    'items-center',
    'justify-center',
    'font-medium',
  ],
  {
    variants: {
      color: {
        blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-250',
        purple: 'bg-purple-100 text-purple-700',
      },
      size: {
        small: 'text-xs',
        medium: 'text-sm',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'medium',
    },
  },
)

export type AvatarProps = VariantProps<typeof avatarVariants>
export type AvatarFallbackProps = VariantProps<typeof avatarFallbackVariants>
