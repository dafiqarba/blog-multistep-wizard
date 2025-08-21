import { ReactNode } from 'react'

interface StepHeadingProps {
  title: string
  children: ReactNode
  description?: string
}

const StepHeading = (props: StepHeadingProps) => {
  const { title, description, children } = props

  return (
    <section className="rounded-3xl border border-brand-100 bg-white p-6 md:p-8 shadow-subtle">
      <header className="space-y-2 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="text-sm text-ink-2">{description}</p>}
      </header>
      <div className="grid gap-5">{children}</div>
    </section>
  )
}

export default StepHeading
