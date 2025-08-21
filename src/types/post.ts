export type Post = {
  id: string
  title: string
  author: string
  summary: string
  category: string
  content: string
  date: string // ISO
}

export type Draft = Omit<Post, 'id' | 'date'>
