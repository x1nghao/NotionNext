'use client'

import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react'
import ArticleDetail from './components/ArticleDetail'
import BlogListPage from './components/BlogListPage'
import Header from './components/Header'
import SearchPage from './components/SearchPage'
import ArchivePage from './components/ArchivePage'
import NotFoundPage from './components/NotFoundPage'
import CategoryList from './components/CategoryList'
import TagList from './components/TagList'
import { Style } from './style'
import CONFIG from './config'

// Theme global status
const ThemeGlobalBear = createContext()
export const useBearGlobal = () => useContext(ThemeGlobalBear)

/**
 * Basic layout
 * @param children
 * @param layout
 * @param tags
 * @param meta
 * @param post
 * @param currentSearch
 * @param currentCategory
 * @param currentTag
 * @param categories
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children } = props
  const { onLoading, fullWidth } = useGlobal()

  return (
    <ThemeGlobalBear.Provider value={{}}>
      <div id='theme-bearblog' className={`${siteConfig('FONT_STYLE')} scroll-smooth`}>
        <Style />
        <Header {...props} />
        <main id='wrapper' className='relative flex w-full py-8 justify-center'>
          <div id='container-inner' className={`${fullWidth ? '' : '2xl:max-w-3xl'} w-full relative z-10`}>
            <Transition
              show={!onLoading}
              appear={true}
              className='w-full'
              enter='transition ease-in-out duration-700 transform order-first'
              enterFrom='opacity-0 translate-y-16'
              enterTo='opacity-100'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-16'
              unmount={false}
            >
              {children}
            </Transition>
          </div>
        </main>
      </div>
    </ThemeGlobalBear.Provider>
  )
}

/**
 * Home page
 * @param {*} props notion data
 * @returns Home page is a blog list
 */
const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

/**
 * Blog list
 * @param {*} props
 */
const LayoutPostList = props => {
  return <BlogListPage {...props} />
}

/**
 * Article details
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  useEffect(() => {
    // 404
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector('#article-wrapper #notion-article')
          if (!article) {
            router.push('/404').then(() => {
              console.warn('Page not found', router.asPath)
            })
          }
        }
      }, siteConfig('POST_WAITING_TIME_FOR_404') * 1000)
    }
  }, [post])
  return (
    <>
      {lock ? <div>Article Lock</div> : <ArticleDetail {...props} />}
    </>
  )
}

/**
 * Search page
 */
const LayoutSearch = props => {
  return <SearchPage {...props} />
}

/**
 * Archive page
 */
const LayoutArchive = props => {
  return <ArchivePage {...props} />
}

/**
 * 404
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  return <NotFoundPage {...props} />
}

/**
 * Category list
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = props => {
  return <CategoryList {...props} />
}

/**
 * Tag list
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = props => {
  return <TagList {...props} />
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}