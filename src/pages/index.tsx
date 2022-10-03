import * as React from 'react'
import type { HeadFC } from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Chat app</h1>
      <p style={paragraphStyles}>...</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Chat app</title>
