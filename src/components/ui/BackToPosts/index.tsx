import React from 'react'
import Link from 'next/link'

const BackToPosts = () => {
  return (
    <nav className="text-sm ">
      <Link href="/" className="text-ink-3 hover:underline">
        ← Back to posts
      </Link>
    </nav>
  )
}

export default BackToPosts
