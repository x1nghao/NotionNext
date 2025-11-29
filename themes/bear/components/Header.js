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
    <header className='md:flex justify-between items-center mt-2 mb-6'>
      <div className='flex-shrink-0 mr-4'>
        <SmartLink
          href='/'
          className='text-2xl font-bold text-black dark:text-white no-underline'>
          {siteConfig('TITLE')}
        </SmartLink>
      </div>
      
      <div className='flex-grow'>
         <MenuList {...props} />
      </div>
    </header>
  )
}
