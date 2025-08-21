'use client'

import { Draft } from '@/types/post'
import { Button, PostPreview } from '@/components/ui'
import { useMultiStep } from '@/contexts/MultiStepProvider'

interface SectionProps {
  onEdit: () => void
  title: string
  children: React.ReactNode
}
const Section = (props: SectionProps) => {
  const { title, onEdit, children } = props

  return (
    <div className="rounded-xl2 border border-brand-100 bg-white/60 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-ink-1">{title}</h4>
        <Button onClick={onEdit} size="sm" variant="outline">
          Edit
        </Button>
      </div>
      <div className="grid gap-2">{children}</div>
    </div>
  )
}

interface RowProps {
  label: string
  value?: string
}

const Row = (props: RowProps) => {
  const { label, value } = props

  return (
    <div className="grid grid-cols-12 gap-3 items-start">
      <div className="col-span-12 md:col-span-3 text-sm text-ink-3">{label}</div>
      <div className="col-span-12 md:col-span-9 text-sm text-ink-1">
        : {value || <span className="text-ink-3">—</span>}
      </div>
    </div>
  )
}

interface Step4ReviewProps {
  draft: Draft
}

const Step4Review = (props: Step4ReviewProps) => {
  const { draft } = props
  const { go } = useMultiStep()

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl bg-white  shadow-subtle">
        <div className="grid gap-4">
          <Section title="Metadata" onEdit={() => go(0)}>
            <Row label="Title" value={draft.title} />
            <Row label="Author" value={draft.author} />
          </Section>

          <Section title="Summary & Category" onEdit={() => go(1)}>
            <Row label="Summary" value={draft.summary} />
            <Row label="Category" value={draft.category} />
          </Section>

          <Section title="Content" onEdit={() => go(2)}>
            <pre className="whitespace-pre-wrap text-sm text-ink-2 bg-brand-50 border border-brand-100 rounded-lg p-3 max-h-64 overflow-auto">
              {draft.content}
            </pre>
          </Section>
        </div>
      </div>

      <details open>
        <summary className="cursor-pointer select-none text-sm text-ink-3">
          Preview
        </summary>
        <PostPreview
          isPreview
          post={{ id: 'preview', date: new Date().toISOString(), ...draft }}
        />
      </details>
    </div>
  )
}

export default Step4Review
