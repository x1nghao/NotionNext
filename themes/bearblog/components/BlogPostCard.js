'use client'

import Link from 'next/link'
import { formatDateFmt } from '@/lib/utils/formatDate'

const BlogPostCard = ({ post }) => {
  return (
    <article className="mb-8">
      <header>
        <h2 className="text-xl font-bold mb-2">
          <Link href={`/${post.slug}`} passHref legacyBehavior>
            <a className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              {post.title}
            </a>
          </Link>
        </h2>
        <small className="text-gray-500 dark:text-gray-400">
          {formatDateFmt(post?.publishDate, 'yyyy-MM-dd')}
        </small>
      </header>
      {post.summary && (
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {post.summary}
        </p>
      )}
    </article>
  )
}

export default BlogPostCard