import { HTMLAttributes } from 'react'

import { mergeClass } from '@/utils/strings'
import { CATEGORY_BADGE } from '@/constants/categories'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  category?: string
}

const Badge = (props: BadgeProps) => {
  const { category, className = '', children, ...rest } = props

  const label = category ?? (typeof children === 'string' ? children : undefined) ?? ''
  const tone = CATEGORY_BADGE[label]

  return (
    <span
      className={mergeClass(
        'text-[10px] uppercase tracking-wider px-2 py-1 rounded ring-1',
        tone,
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}

export default Badge
