import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'

/**
 * 文章详情的元信息
 * 标题、作者、分类、标签、创建日期等等。
 */
export const PostMeta = props => {
  const { post } = props
  const { locale } = useGlobal()

  if (post?.type === 'Page') {
    return null
  }

  return (
    <section className='flex-wrap flex mt-2 mb-8 text-sm opacity-70'>
      <div>
        <SmartLink
          href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
          passHref
          className='mr-4'>
          {post?.publishDay}
        </SmartLink>
        
        {post?.category && (
          <SmartLink
            href={`/category/${post?.category}`}
            passHref
            className='mr-4'>
            #{post?.category}
          </SmartLink>
        )}
        
        {post?.tags && post?.tags.length > 0 && post?.tags.map(tag => (
             <SmartLink
               key={tag}
               href={`/tag/${tag}`}
               passHref
               className='mr-4'>
               #{tag}
             </SmartLink>
        ))}
      </div>
    </section>
  )
}
