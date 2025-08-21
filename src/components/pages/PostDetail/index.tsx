'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { Post } from '@/types/post'
import { useBlog } from '@/contexts/BlogProvider'
import { BackToPosts, EmptyState, LinkButton, PostPreview } from '@/components/ui'

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { getPostById } = useBlog()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    setPost(id ? getPostById(id) ?? null : null)
  }, [id, getPostById])

  if (!post) {
    return (
      <EmptyState
        title="Post not found"
        description="It may have been removed or never created on this browser."
        action={
          <div className="flex justify-center gap-3">
            <LinkButton href="/" variant="outline">
              Back to Home
            </LinkButton>
            <LinkButton href="/new-post" variant="primary">
              Create a Post
            </LinkButton>
          </div>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <BackToPosts />
      <div className="rounded-3xl border border-brand-100 bg-white p-6 md:p-8 shadow-subtle">
        <PostPreview post={post} />
      </div>
    </div>
  )
}

export default BlogDetail
