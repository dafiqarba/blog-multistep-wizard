import Badge from '../Badge'
import { Post } from '@/types/post'
import { mergeClass } from '@/utils/strings'

interface PostPreviewProps {
  post: Post
  isPreview?: boolean
}

export default function PostPreview(props: PostPreviewProps) {
  const { post, isPreview = false } = props

  return (
    <article
      className={mergeClass({
        'max-w-none mt-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-subtle':
          isPreview,
      })}
    >
      <div className="flex items-center gap-3 mb-3">
        <Badge>{post.category}</Badge>
        <time dateTime={post.date} className="text-xs text-ink-3">
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">
        {post.title}
      </h1>
      <p className="text-sm text-ink-3 mb-6">By {post.author}</p>
      <p className="text-base text-ink-2 mb-6">{post.summary}</p>
      <hr className="my-6 border-brand-200" />
      <div className="prose prose-neutral max-w-none whitespace-pre-wrap leading-relaxed">
        {post.content}
      </div>
    </article>
  )
}
