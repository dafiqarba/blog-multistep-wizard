'use client'

import Hero from './Hero'
import { useBlog } from '@/contexts/BlogProvider'
import { BlogCard, EmptyState, LinkButton } from '@/components/ui'

const Home = () => {
  const { posts } = useBlog()

  return (
    <div className="space-y-10">
      <Hero />

      <section id="posts" className="space-y-4">
        {posts.length > 0 && (
          <h2 className="text-xl font-semibold tracking-tight">Latest posts</h2>
        )}

        {posts.length === 0 ? (
          <EmptyState
            title="No posts yet"
            description="Create your first post to get started! Your posts are saved locally on this browser."
            action={
              <LinkButton href="/new-post" size="sm">
                Create Post
              </LinkButton>
            }
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.id} {...p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
