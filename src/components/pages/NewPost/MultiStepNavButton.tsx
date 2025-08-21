'use client'

import { Button } from '@/components/ui'
import { mergeClass } from '@/utils/strings'

interface MultiStepNavButtonProps {
  canBack: boolean
  canNext: boolean
  isFirst: boolean
  isLast: boolean
  onBack: () => void
  onNext: () => void
  onSubmit: () => void
}

const MultiStepNavButton = (props: MultiStepNavButtonProps) => {
  const { canBack, canNext, isFirst, isLast, onBack, onNext, onSubmit } = props

  return (
    <div className="flex items-center justify-between pt-2">
      <Button
        onClick={onBack}
        variant="outline"
        disabled={!canBack}
        className={mergeClass({
          invisible: isFirst,
          'text-ink-1 border border-brand-200 hover:bg-brand-100':
            !isFirst,
        })}
      >
        Back
      </Button>

      {isLast ? (
        <Button
          variant="primary"
          onClick={onSubmit}
          className="bg-brand-500 hover:bg-brand-600"
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={onNext}
          variant="primary"
          disabled={!canNext}
          className="bg-brand-500 hover:bg-brand-600"
        >
          Next
        </Button>
      )}
    </div>
  )
}

export default MultiStepNavButton
