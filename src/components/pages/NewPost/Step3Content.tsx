'use client'

import { Draft } from '@/types/post'
import { InputField, InputTextArea } from '@/components/ui'

interface Step3ContentProps {
  draft: Draft
  errors: Partial<Record<keyof Draft, string>>
  onChange: (patch: Partial<Draft>) => void
}

const Step3Content = (props: Step3ContentProps) => {
  const { draft, errors, onChange } = props

  return (
    <div className="grid gap-5">
      <InputField
        id="content"
        label="Blog Content"
        error={errors.content}
        hint="Write your post content"
      >
        <InputTextArea
          rows={12}
          id="content"
          value={draft.content}
          placeholder={'Start writing...'}
          onChange={(e) => onChange({ content: e.currentTarget.value })}
        />
      </InputField>
    </div>
  )
}

export default Step3Content
