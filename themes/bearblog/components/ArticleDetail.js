'use client'

import NotionPage from '@/components/NotionPage'
import { formatDateFmt } from '@/lib/utils/formatDate'

export default function ArticleDetail(props) {
  const { post } = props

  if (!post) {
    return <></>
  }

  return (
    <div id="container" className="max-w-5xl overflow-x-auto flex-grow mx-auto w-screen md:w-full">
      <article itemScope itemType="https://schema.org/Article" className="subpixel-antialiased overflow-y-hidden py-10 px-5 lg:pt-24 md:px-32">
        <header>
          <div className="font-bold text-4xl text-black dark:text-white">
            {post.title}
          </div>
          {post?.type !== 'Page' && (
            <div className="text-gray-400 dark:text-gray-400 font-light leading-8">
              {formatDateFmt(post?.publishDate, 'yyyy-MM-dd')}
            </div>
          )}
        </header>
        <section id="article-wrapper">
          {post && <NotionPage post={post} />}
        </section>
      </article>
    </div>
  )
}