'use client'
import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

import { Draft } from '@/types/post'

interface MultiStepContext {
  step: number
  total: number
  draft: Draft
  next: () => void
  back: () => void
  reset: () => void
  go: (n: number) => void
  update: (patch: Partial<Draft>) => void
}

const initialState: Draft = {
  title: '',
  author: '',
  content: '',
  summary: '',
  category: '',
}

const Ctx = createContext<MultiStepContext | null>(null)

export const MultiStepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>(initialState)

  const value = useMemo<MultiStepContext>(
    () => ({
      step,
      total: 4,
      draft,
      update: (patch: Partial<Draft>) => setDraft((prev) => ({ ...prev, ...patch })),
      next: () => setStep((prev) => Math.min(prev + 1, 3)),
      back: () => setStep((prev) => Math.max(prev - 1, 0)),
      go: (n) => setStep(() => Math.max(0, Math.min(n, 3))),
      reset: () => {
        setDraft(initialState)
        setStep(0)
      },
    }),
    [step, draft]
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useMultiStep = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('usePost must be used within a PostProvider')

  return ctx
}
