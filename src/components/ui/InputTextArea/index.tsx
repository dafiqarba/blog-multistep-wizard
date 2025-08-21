'use client'
import { TextareaHTMLAttributes } from 'react'

import { mergeClass } from '@/utils/strings'

const InputTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { className = '', rows = 6, ...rest } = props

  return (
    <textarea
      rows={rows}
      className={mergeClass(
        'w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-ink-1 shadow-subtle',
        'placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-brand-500/80',
        className
      )}
      {...rest}
    />
  )
}

export default InputTextArea
