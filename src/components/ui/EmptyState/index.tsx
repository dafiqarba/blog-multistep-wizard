import { ReactNode } from 'react'
export default function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="rounded-xl2 border-2 border-dashed border-brand-200  p-10 text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {description && <p className="text-ink-3 mb-4">{description}</p>}
      {action}
    </div>
  )
}
