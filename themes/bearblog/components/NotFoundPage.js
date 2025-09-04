import React from 'react'
import Link from 'next/link'

/**
 * 404 Not Found page component for bearblog theme
 * @returns 
 */
export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page not found</p>
      <p className="not-found-description">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="not-found-action">
        <Link href="/">
          <span className="home-link">Return to home</span>
        </Link>
      </div>
    </div>
  )
}