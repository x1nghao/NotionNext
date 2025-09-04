'use client'

import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const Header = (props) => {
  const { locale } = useGlobal()

  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" passHref legacyBehavior>
        <a className="font-bold text-lg">{siteConfig('TITLE')}</a>
      </Link>
      <nav>
        {CONFIG.MENU_CATEGORY && (
          <Link href="/category" passHref legacyBehavior>
            <a className="mr-4">{locale.COMMON.CATEGORY}</a>
          </Link>
        )}
        {CONFIG.MENU_TAG && (
          <Link href="/tag" passHref legacyBehavior>
            <a className="mr-4">{locale.COMMON.TAGS}</a>
          </Link>
        )}
        {CONFIG.MENU_ARCHIVE && (
          <Link href="/archive" passHref legacyBehavior>
            <a className="mr-4">{locale.COMMON.ARCHIVE}</a>
          </Link>
        )}
        {CONFIG.MENU_SEARCH && (
          <Link href="/search" passHref legacyBehavior>
            <a>{locale.NAV.SEARCH}</a>
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header