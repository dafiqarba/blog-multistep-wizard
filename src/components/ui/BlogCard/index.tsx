'use client'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

import Badge from '../Badge'
import { LinkButton } from '../Button'
import { formatShortDate, mergeClass } from '@/utils/strings'

export type BlogCardProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  title: string
  author: string
  summary: string
  category: string
  date: string // date ISO
}

const BlogCard = (props: BlogCardProps) => {
  const { id, title, author, summary, category, date, className, ...rest } = props

  return (
    <article
      className={mergeClass(
        'group rounded-xl2 bg-white shadow-subtle hover:shadow-card transition-shadow border border-brand-100',
        'p-5 flex flex-col gap-4',
        className
      )}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <Badge>{category}</Badge>
        <time dateTime={date} className="text-xs text-ink-3">
          {formatShortDate(date)}
        </time>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-ink-1">
        <Link
          href={`/blog/${id}`}
          className="decoration-0 hover:underline underline-offset-4"
        >
          {title}
        </Link>
      </h3>

      <p className="text-sm text-ink-2 leading-relaxed line-clamp-3 text-ellipsis">{summary}</p>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-sm text-ink-3">By {author}</span>
        <LinkButton href={`/blog/${id}`} size="sm" aria-label={`Read ${title}`}>
          Read
        </LinkButton>
      </div>
    </article>
  )
}

export default BlogCard
