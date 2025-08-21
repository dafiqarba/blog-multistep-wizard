import React from 'react'

import NewPost from '@/components/pages/NewPost'
import { MultiStepProvider } from '@/contexts/MultiStepProvider'

const NewPostPage = () => {
  return (
    <MultiStepProvider>
      <NewPost />
    </MultiStepProvider>
  )
}

export default NewPostPage
