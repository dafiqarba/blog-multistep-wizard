import { Post } from '@/types/post'

const KEY = 'myposts'
const isBrowser = typeof window !== 'undefined'

export const getPosts = (): Post[] => {
  if (!isBrowser) return []

  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Post[]) : []
  } catch {
    return []
  }
}

export const savePosts = (posts: Post[]) => {
  if (!isBrowser) return
  try {
    localStorage.setItem(KEY, JSON.stringify(posts))
  } catch {}
}

export const getPostById = (id: string): Post | undefined => {
  return getPosts().find((p) => p.id === id)
}
