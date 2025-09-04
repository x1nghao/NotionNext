'use client'

import BlogPostCard from './BlogPostCard'

const BlogListPage = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div className="text-center">No posts found.</div>
  }

  return (
    <div className="w-full px-4">
      {posts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogListPage