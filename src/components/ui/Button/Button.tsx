'use client'

import Link, { LinkProps } from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { mergeClass } from '@/utils/strings'

type Common = {
  size?: Size
  variant?: Variant
  className?: string
}
type Size = 'sm' | 'md'
type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

type LinkButtonProps = Common &
  LinkProps & {
    children: ReactNode
  }
type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement>

const base =
  'inline-flex items-center justify-center rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/80 disabled:opacity-60 disabled:cursor-not-allowed hover:cursor-pointer'

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600',
  ghost: 'bg-transparent text-ink-1 hover:bg-brand-100',
  secondary: 'bg-brand-100 text-ink-1 hover:bg-brand-200',
  outline: 'bg-white text-ink-1 border border-brand-200 hover:bg-brand-100',
}

export const Button = (props: ButtonProps) => {
  const { variant = 'primary', size = 'md', className, ...rest } = props

  const classNames = mergeClass(base, sizes[size], variants[variant], className)

  return <button className={classNames} {...rest} />
}

export const LinkButton = (props: LinkButtonProps) => {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props

  const classNames = mergeClass(base, sizes[size], variants[variant], className)

  return (
    <Link className={classNames} {...rest}>
      {children}
    </Link>
  )
}
