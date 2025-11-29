import SmartLink from '@/components/SmartLink'

/**
 * 博客列表的单个卡片 - Bear Blog 风格 (Minimal)
 * @param {*} param0
 * @returns
 */
const BlogItem = ({ post }) => {
  return (
    <li>
      <time>{post.date?.start_date || post.createdTime}</time>
      <SmartLink href={post?.href}>
        {post?.title}
      </SmartLink>
    </li>
  )
}

export default BlogItem
