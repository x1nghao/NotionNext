import React from 'react'
import Link from 'next/link'

/**
 * Tag list page component for bearblog theme
 * @param {*} props 
 * @returns 
 */
export default function TagList(props) {
  const { tagOptions } = props

  return (
    <div className="tag-container">
      <h1 className="tag-title">Tags</h1>
      
      {tagOptions && tagOptions.length > 0 ? (
        <div className="tag-list">
          {tagOptions.map(tag => (
            <Link key={tag.name} href={`/tag/${tag.name}`}>
              <span className="tag-item">
                <span className="tag-name">{tag.name}</span>
                <span className="tag-count">({tag.count})</span>
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-tags">No tags found</div>
      )}
    </div>
  )
}