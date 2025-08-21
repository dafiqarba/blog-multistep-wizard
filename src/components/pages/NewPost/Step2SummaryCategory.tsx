'use client'

import { Draft } from '@/types/post'
import { CATEGORIES } from '@/constants/categories'
import { InputField, InputSelect, InputText } from '@/components/ui'

interface Step2SummaryCategoryProps {
  draft: Draft
  errors: Partial<Record<keyof Draft, string>>
  onChange: (patch: Partial<Draft>) => void
}

const Step2SummaryCategory = (props: Step2SummaryCategoryProps) => {
  const { draft, errors, onChange } = props

  return (
    <div className="grid gap-5">
      <InputField
        id="summary"
        label="Blog Summary"
        error={errors.summary}
        hint="A brief intro or excerpt."
      >
        <InputText
          id="summary"
          value={draft.summary}
          placeholder="Summary with one or two sentences"
          onChange={(e) => onChange({ summary: e.currentTarget.value })}
        />
      </InputField>
      <InputField id="category" label="Category" error={errors.category}>
        <InputSelect
          id="category"
          value={draft.category}
          onChange={(e) => onChange({ category: e.currentTarget.value })}
        >
          <option value="" disabled>
            Pick a category
          </option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </InputSelect>
      </InputField>
    </div>
  )
}

export default Step2SummaryCategory
