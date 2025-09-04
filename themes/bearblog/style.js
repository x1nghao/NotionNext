/* eslint-disable react/no-unknown-property */
/**
 * This style is only effective for the current theme
 * This place does not support tailwindCSS's @apply syntax
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // background color
      body {
        background-color: #f9fafb;
      }
      .dark body {
        background-color: #18181b;
      }
    `}</style>
  )
}

export { Style }