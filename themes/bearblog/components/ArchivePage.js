import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'

/**
 * Archive page component for bearblog theme
 * @param {*} props 
 * @returns 
 */
export default function ArchivePage(props) {
  const { archivePosts } = props
  const [postsByYear, setPostsByYear] = useState({})

  // Group posts by year
  useEffect(() => {
    if (archivePosts) {
      const groupedPosts = {}
      archivePosts.forEach(post => {
        const date = new Date(post.publishDate)
        const year = date.getFullYear()
        if (!groupedPosts[year]) {
          groupedPosts[year] = []
        }
        groupedPosts[year].push(post)
      })

      // Sort years in descending order
      const sortedYears = Object.keys(groupedPosts).sort((a, b) => parseInt(b) - parseInt(a))
      const orderedPosts = {}
      sortedYears.forEach(year => {
        orderedPosts[year] = groupedPosts[year]
      })

      setPostsByYear(orderedPosts)
    }
  }, [archivePosts])

  return (
    <div className="archive-container">
      <h1 className="archive-title">Archive</h1>
      
      {Object.keys(postsByYear).length > 0 ? (
        Object.keys(postsByYear).map(year => (
          <div key={year} className="archive-year">
            <h2 className="year-title">{year}</h2>
            <ul className="year-posts">
              {postsByYear[year].map(post => (
                <li key={post.id} className="archive-post">
                  <span className="post-date">
                    {formatDateFmt(post.publishDate, siteConfig('DATE_FORMAT'))}
                  </span>
                  <Link href={`/${post.slug}`}>
                    <span className="post-title">{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="no-posts">No posts found</div>
      )}
    </div>
  )
}