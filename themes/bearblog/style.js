/* eslint-disable react/no-unknown-property */
/**
 * This style is only effective for the current theme
 * This place does not support tailwindCSS's @apply syntax
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* Bear Blog inspired styles */
      
      /* Base styles */
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        line-height: 1.6;
        background-color: #fff;
        color: #333;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
        text-rendering: optimizeLegibility;
      }
      
      /* Dark mode */
      .dark body {
        background-color: #01242e;
        color: #ddd;
      }
      
      /* Typography */
      h1, h2, h3, h4, h5, h6 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.25;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1.5rem;
      }
      
      h3 {
        font-size: 1.25rem;
      }
      
      p, ul, ol {
        margin-bottom: 1.5rem;
      }
      
      /* Links */
      a {
        color: #0366d6;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
      
      .dark a {
        color: #58a6ff;
      }
      
      /* Code blocks */
      pre, code {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        font-size: 0.9em;
        background-color: #f6f8fa;
        border-radius: 3px;
      }
      
      .dark pre, .dark code {
        background-color: #1e1e1e;
      }
      
      pre {
        padding: 1rem;
        overflow-x: auto;
        margin-bottom: 1.5rem;
      }
      
      code {
        padding: 0.2em 0.4em;
      }
      
      /* Blockquotes */
      blockquote {
        border-left: 4px solid #ddd;
        padding-left: 1rem;
        margin-left: 0;
        color: #666;
      }
      
      .dark blockquote {
        border-left-color: #444;
        color: #aaa;
      }
      
      /* Tables */
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1.5rem;
      }
      
      th, td {
        padding: 0.5rem;
        border: 1px solid #ddd;
      }
      
      .dark th, .dark td {
        border-color: #444;
      }
      
      /* Header and navigation */
      #theme-bearblog header {
        margin-bottom: 2rem;
      }
      
      #theme-bearblog nav {
        margin-bottom: 2rem;
      }
      
      #theme-bearblog nav a {
        margin-right: 1rem;
      }
      
      /* Blog post list */
      #theme-bearblog .blog-post-card {
        margin-bottom: 2rem;
      }
      
      #theme-bearblog .blog-post-card h2 {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      
      #theme-bearblog .blog-post-date {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      .dark #theme-bearblog .blog-post-date {
        color: #aaa;
      }
      
      /* Article detail */
      #theme-bearblog .article-header {
        margin-bottom: 2rem;
      }
      
      #theme-bearblog .article-title {
        margin-bottom: 0.5rem;
      }
      
      #theme-bearblog .article-date {
        color: #666;
        font-size: 0.9rem;
      }
      
      .dark #theme-bearblog .article-date {
        color: #aaa;
      }
      
      /* Responsive adjustments */
      @media (max-width: 768px) {
        body {
          padding: 1rem;
        }
      }
    `}</style>
  )
}

export { Style }