import { Draft } from '@/types/post'

export type FieldErrors = Partial<Record<keyof Draft, string>>

export const validateStep1 = (draft: Draft): FieldErrors => {
  const err: FieldErrors = {}
  if (!draft.title?.trim()) err.title = 'Title is required'
  if (!draft.author?.trim()) err.author = 'Author is required'
  return err
}

export const validateStep2 = (draft: Draft): FieldErrors => {
  const err: FieldErrors = {}
  if (!draft.summary?.trim()) err.summary = 'Summary is required'
  if (!draft.category?.trim()) err.category = 'Pick a category'
  return err
}

export const validateStep3 = (draft: Draft): FieldErrors => {
  const err: FieldErrors = {}
  if (!draft.content?.trim()) err.content = 'Content is required'
  return err
}

export const validateAll = (draft: Draft): FieldErrors => {
  return { ...validateStep1(draft), ...validateStep2(draft), ...validateStep3(draft) }
}
