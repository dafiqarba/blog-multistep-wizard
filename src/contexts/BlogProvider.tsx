'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { Post } from '@/types/post'
import { getPosts, savePosts } from '@/utils/localStorage'

interface BlogCtx {
  posts: Post[]
  addPost: (p: Omit<Post, 'id' | 'date'>) => string
  getPostById: (id: string) => Post | undefined
}

const Ctx = createContext<BlogCtx | null>(null)

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setPosts(getPosts())
  }, [])

  useEffect(() => {
    savePosts(posts)
  }, [posts])

  const value = useMemo<BlogCtx>(
    () => ({
      posts,
      addPost: (post) => {
        const id = `${Date.now()}`
        const newPost: Post = { id, date: new Date().toISOString(), ...post }

        setPosts((prev) => [newPost, ...prev])
        return id
      },
      getPostById: (id) => posts.find((post) => post.id === id),
    }),
    [posts]
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useBlog() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useBlog must be used within BlogProvider')
  return ctx
}
