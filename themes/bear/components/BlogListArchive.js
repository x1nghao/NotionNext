import SmartLink from '@/components/SmartLink'

/**
 * 博客归档列表；仅归档页面使用
 * 按照日期将文章分组
 * @param {*} param0
 * @returns
 */
export default function BlogListArchive({ archiveTitle, archivePosts }) {
  return (
    <div key={archiveTitle}>
      <div id={archiveTitle} className='pt-16 pb-4 text-2xl font-bold'>
        {archiveTitle}
      </div>

      <ul className='blog-posts'>
        {archivePosts[archiveTitle].map(post => {
          return (
            <li key={post.id}>
              <time>{post?.publishDay}</time>
              <SmartLink href={post?.href}>
                {post.title}
              </SmartLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
