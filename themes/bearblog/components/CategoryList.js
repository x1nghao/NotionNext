import React from 'react'
import Link from 'next/link'

/**
 * Category list page component for bearblog theme
 * @param {*} props 
 * @returns 
 */
export default function CategoryList(props) {
  const { categoryOptions } = props

  return (
    <div className="category-container">
      <h1 className="category-title">Categories</h1>
      
      {categoryOptions && categoryOptions.length > 0 ? (
        <ul className="category-list">
          {categoryOptions.map(category => (
            <li key={category.name} className="category-item">
              <Link href={`/category/${category.name}`}>
                <span className="category-name">{category.name}</span>
                <span className="category-count">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-categories">No categories found</div>
      )}
    </div>
  )
}