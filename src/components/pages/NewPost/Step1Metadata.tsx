'use client'

import { Draft } from '@/types/post'
import { InputField, InputText } from '@/components/ui'

interface Step1MetadataProps {
  draft: Draft
  errors: Partial<Record<keyof Draft, string>>
  onChange: (patch: Partial<Draft>) => void
}

const Step1Metadata = (props: Step1MetadataProps) => {
  const { draft, errors, onChange } = props

  return (
    <div className="grid gap-5">
      <InputField id="title" label="Blog Title" error={errors.title}>
        <InputText
          id="title"
          value={draft.title}
          placeholder="example: My First Blog Post"
          onChange={(e) => onChange({ title: e.currentTarget.value })}
        />
      </InputField>
      <InputField id="author" label="Author Name" error={errors.author}>
        <InputText
          id="author"
          value={draft.author}
          placeholder="Your name"
          onChange={(e) => onChange({ author: e.currentTarget.value })}
        />
      </InputField>
    </div>
  )
}

export default Step1Metadata
