'use client'

interface StepProgressProps {
  total: number
  current: number
}

const StepProgress = (props: StepProgressProps) => {
  const { current, total } = props

  const percent = Math.round(((current + 1) / total) * 100)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-ink-3">
        <span>
          Step {current + 1} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-brand-100">
        <div
          style={{ width: `${percent}%` }}
          className="h-full bg-brand-500 transition-all"
        />
      </div>
    </div>
  )
}

export default StepProgress