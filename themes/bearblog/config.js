// BearBlog theme for NotionNext - inspired by Hugo-BearBlog
// A minimalist, no-nonsense, super-fast blogging theme
export default {
  // navigation
  MENU_CATEGORY: true, // show categories in menu
  MENU_TAG: true, // show tags in menu
  MENU_ARCHIVE: true, // show archive in menu
  MENU_SEARCH: true, // show search in menu

  // blogroll - keep minimal for speed
  FRIEND_LINK: [
    {
      title: 'NotionNext',
      link: 'https://notionnext.com/'
    }
  ],

  // appearance - simple and clean
  APPEARANCE: 'auto', // auto, light, dark
  FONT_SANS: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
  FONT_SERIF: ['Georgia', 'Times New Roman', 'serif'],
  FONT_SIZE_BASE: '16px',
  BACKGROUND_COLOR_LIGHT: '#ffffff',
  BACKGROUND_COLOR_DARK: '#111111',
  TEXT_COLOR_LIGHT: '#333333',
  TEXT_COLOR_DARK: '#eeeeee',
  ACCENT_COLOR_LIGHT: '#0366d6',
  ACCENT_COLOR_DARK: '#58a6ff',

  // layout - simple list view by default
  POST_LIST_STYLE: 'list', // list only for BearBlog style
  POST_LIST_COVER: false, // no cover images for minimalism
  POST_DETAIL_COVER: false, // no cover images for minimalism
  
  // content display
  EXCERPT_LENGTH: 300, // longer excerpts for better context
  SHOW_SUMMARY: true, // show post summaries on list pages

  // social - minimal but useful
  CONTACT_EMAIL: 'example@example.com',
  CONTACT_GITHUB: 'https://github.com/example',
  CONTACT_TWITTER: 'https://twitter.com/example',
  
  // no analytics by default - for privacy and speed
  ANALYTICS_ACKEE_TRACKER: '',
  ANALYTICS_GOOGLE_ID: '',

  // misc
  DEFAULT_POST_COVER: '',
  DEFAULT_PAGE_COVER: '',
  
  // theme specific
  THEME_DESCRIPTION: 'Free, no-nonsense, super-fast blogging.'
}