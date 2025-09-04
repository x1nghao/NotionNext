// a minimalist theme for NotionNext
export default {
  // an array of menu items
  MENU_CATEGORY: true, // show categories in menu
  MENU_TAG: true, // show tags in menu
  MENU_ARCHIVE: true, // show archive in menu
  MENU_SEARCH: true, // show search in menu

  // blogroll
  FRIEND_LINK: [
    {
      title: 'NotionNext',
      link: 'https://notionnext.com/'
    }
  ],

  // appearance
  APPEARANCE: 'auto', // auto, light, dark
  FONT_SANS: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  FONT_SERIF: ['Georgia', 'Times New Roman', 'serif'],
  FONT_SIZE_BASE: '16px',
  BACKGROUND_COLOR_LIGHT: '#f9fafb',
  BACKGROUND_COLOR_DARK: '#18181b',
  TEXT_COLOR_LIGHT: '#1f2937',
  TEXT_COLOR_DARK: '#a1a1aa',
  ACCENT_COLOR_LIGHT: '#3b82f6',
  ACCENT_COLOR_DARK: '#3b82f6',

  // layout
  POST_LIST_STYLE: 'list', // list, grid
  POST_LIST_COVER: false, // show post cover image
  POST_DETAIL_COVER: false, // show post cover image

  // social
  CONTACT_EMAIL: 'example@example.com',
  CONTACT_GITHUB: 'https://github.com/example',
  CONTACT_TWITTER: 'https://twitter.com/example',
  CONTACT_TELEGRAM: 'https://t.me/example',

  // analytics
  ANALYTICS_ACKEE_TRACKER: '',
  ANALYTICS_GOOGLE_ID: '',

  // misc
  DEFAULT_POST_COVER: '',
  DEFAULT_PAGE_COVER: ''
}