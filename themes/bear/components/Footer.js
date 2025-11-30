import { siteConfig } from '@/lib/config'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='mt-12 py-6 text-center text-sm opacity-60'>
      <div className='mb-2'>
        <span>
          © {copyrightDate} {siteConfig('AUTHOR')}
        </span>
      </div>
      <div>
         Made with <a href='https://github.com/tangly1024/NotionNext' className='underline'>NotionNext</a> & <a href='https://bearblog.dev/' className='underline'>Bear Blog</a> Style
      </div>
    </footer>
  )
}
