'use client'
import { SelectHTMLAttributes } from 'react'

import { mergeClass } from '@/utils/strings'

const InputSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { className = '', children, ...rest } = props

  return (
    <select
      className={mergeClass(
        'w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-ink-1 shadow-subtle',
        'focus:outline-none focus:ring-2 focus:ring-brand-500/80',
        className
      )}
      {...rest}
    >
      {children}
    </select>
  )
}

export default InputSelect
