import { twMerge } from 'tailwind-merge'
import clsx, { type ClassValue } from 'clsx'

export const mergeClass = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export const formatShortDate = (date: string) => {
  try {
    const newDate = new Date(date)
    return newDate.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
  } catch {
    return date
  }
}
