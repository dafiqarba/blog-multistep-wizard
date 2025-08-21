import { ReactNode } from 'react'

interface InputFieldProps {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
}
const InputField = (props: InputFieldProps) => {
  const { id, label, hint, error, children } = props

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-1">
        {label}
      </label>
      {hint && <p className="text-xs text-ink-3">{hint}</p>}
      {children}
      {error && <p className="text-xs text-red-600 pt-1">{error}</p>}
    </div>
  )
}

export default InputField
