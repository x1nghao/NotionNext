import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { MenuList } from './MenuList'

/**
 * 网站顶部
 * LOGO 和 菜单
 * @returns
 */
export const Header = props => {
  return (
    <header className='mt-2 mb-6'>
      <SmartLink
        href='/'
        className='title text-2xl font-bold text-black dark:text-white no-underline'>
        <h1>{siteConfig('TITLE')}</h1>
      </SmartLink>
      
      <MenuList {...props} />
    </header>
  )
}
