import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import BlogItem from './BlogItem'
/**
 * 使用滚动无限加载的博客列表
 * @param {*} props
 * @returns
 */
export const BlogListScroll = props => {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)

  const hasMore = posts ? page * POSTS_PER_PAGE < posts.length : false
  const postsToShow = posts ? posts.slice(0, POSTS_PER_PAGE * page) : []

  const handleGetMore = useCallback(() => {
    if (!hasMore) return
    updatePage(p => p + 1)
  }, [hasMore])

  const targetRef = useRef(null)

  // 监听滚动自动分页加载
  const scrollTrigger = useMemo(() => {
    return throttle(() => {
      const scrollS = window.scrollY + window.innerHeight
      const clientHeight = targetRef?.current?.clientHeight || 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    }, 500)
  }, [handleGetMore])

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)

    return () => {
      window.removeEventListener('scroll', scrollTrigger)
      scrollTrigger.cancel?.()
    }
  }, [scrollTrigger])

  return (
    <div
      className={`w-full mb-12`}
      ref={targetRef}>

      <ul id='posts-wrapper' className='blog-posts'>
        {postsToShow?.map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </ul>

      <div
        onClick={handleGetMore}
        className='w-full my-4 py-4 text-center cursor-pointer '>
        {' '}
        {hasMore ? locale.COMMON.MORE : `${locale.COMMON.NO_MORE} 😰`}{' '}
      </div>
    </div>
  )
}
