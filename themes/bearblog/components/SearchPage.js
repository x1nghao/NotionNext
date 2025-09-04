import React from 'react'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { formatDateFmt } from '@/lib/utils/formatDate'

/**
 * Search page component for bearblog theme
 * @param {*} props 
 * @returns 
 */
export default function SearchPage(props) {
  const { keyword, posts } = props
  const router = useRouter()
  const { locale } = useGlobal()

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault()
    const searchKey = e.target.search.value
    if (searchKey && searchKey !== '') {
      router.push({ pathname: '/search', query: { s: searchKey } })
    }
  }

  return (
    <div className="search-container">
      <div className="search-form">
        <form className="flex" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder={locale.SEARCH.PLACEHOLDER}
            className="search-input"
            defaultValue={keyword || ''}
          />
          <button type="submit" className="search-button">
            {locale.SEARCH.BUTTON}
          </button>
        </form>
      </div>

      <div className="search-results">
        {keyword && (
          <div className="search-info">
            {posts?.length > 0 ? (
              <div>
                {locale.SEARCH.FOUND_RESULTS.replace('[result_count]', posts.length).replace('[keyword]', keyword)}
              </div>
            ) : (
              <div>
                {locale.SEARCH.NO_RESULTS.replace('[keyword]', keyword)}
              </div>
            )}
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="post-list">
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                <h2 className="post-title">
                  <Link href={`/${post.slug}`}>
                    <span>{post.title}</span>
                  </Link>
                </h2>
                <div className="post-date">
                  {formatDateFmt(post.publishDate, siteConfig('DATE_FORMAT'))}
                </div>
                {post.summary && (
                  <div className="post-summary">
                    {post.summary}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}