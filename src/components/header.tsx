import React from 'react'
import Link from 'gatsby-link'
import Button from './Button'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <Button onClick={(ev) => { console.log('Hello', ev); }}>This is a button</Button>
      </h1>
    </div>
  </div>
)

export default Header
