'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  validateAll,
  FieldErrors,
  validateStep1,
  validateStep2,
  validateStep3,
} from '@/utils/validation'
import StepHeading from './StepHeading'
import Step4Review from './Step4Review'
import StepProgress from './StepProgress'
import Step3Content from './Step3Content'
import Step1Metadata from './Step1Metadata'
import { BackToPosts } from '@/components/ui'
import { useBlog } from '@/contexts/BlogProvider'
import MultiStepNavButton from './MultiStepNavButton'
import Step2SummaryCategory from './Step2SummaryCategory'
import { useMultiStep } from '@/contexts/MultiStepProvider'

const NewPost = () => {
  const router = useRouter()
  const { addPost } = useBlog()
  const { step, total, draft, update, next, back, reset } = useMultiStep()

  const [errors, setErrors] = useState<FieldErrors>({})

  const canNext = useMemo(() => {
    if (step === 0) return Object.keys(validateStep1(draft)).length === 0
    if (step === 1) return Object.keys(validateStep2(draft)).length === 0
    if (step === 2) return Object.keys(validateStep3(draft)).length === 0
    return true
  }, [step, draft])

  const handleNext = () => {
    if (step === 0) setErrors(validateStep1(draft))
    if (step === 1) setErrors(validateStep2(draft))
    if (step === 2) setErrors(validateStep3(draft))
    if (canNext) next()
  }

  const handleSubmit = () => {
    const all = validateAll(draft)
    setErrors(all)

    if (Object.keys(all).length > 0) return

    addPost(draft)
    alert('Post created successfully!')

    router.replace('/') 
    setTimeout(() => reset(), 0)
  }

  return (
    <div className="space-y-8">
      <BackToPosts />
      <StepProgress current={step} total={total} />

      {step === 0 && (
        <StepHeading title="Blog Metadata" description="Start with the basics.">
          <Step1Metadata draft={draft} errors={errors} onChange={update} />
        </StepHeading>
      )}

      {step === 1 && (
        <StepHeading
          title="Summary & Category"
          description="Add a short summary and pick a category."
        >
          <Step2SummaryCategory draft={draft} errors={errors} onChange={update} />
        </StepHeading>
      )}

      {step === 2 && (
        <StepHeading title="Content" description="Write your post.">
          <Step3Content draft={draft} errors={errors} onChange={update} />
        </StepHeading>
      )}

      {step === 3 && (
        <StepHeading
          title="Review & Submit"
          description="Double-check everything before publishing."
        >
          <Step4Review draft={draft} />
        </StepHeading>
      )}

      <MultiStepNavButton
        canNext
        canBack={step > 0}
        isFirst={step === 0}
        isLast={step === total - 1}
        onBack={() => {
          setErrors({})
          back()
        }}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default NewPost
