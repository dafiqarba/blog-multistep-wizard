'use client'

import { BlogProvider } from '@/contexts/BlogProvider'
import { MultiStepProvider } from '@/contexts/MultiStepProvider'

export const BlogProviders = ({ children }: { children: React.ReactNode }) => {
  return <BlogProvider>{children}</BlogProvider>
}

export const MultiStepProviders = ({ children }: { children: React.ReactNode }) => {
  return <MultiStepProvider>{children}</MultiStepProvider>
}
