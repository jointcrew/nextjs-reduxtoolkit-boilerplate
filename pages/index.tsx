import React from 'react'
import Link from 'next/link'

const TopPage: React.FC = () => {
  return (
    <div>
      <h1>Top Page</h1>
      <br />
      <nav>
        <Link href="/google-books">
          <a>{'Navigate to "/google-book"'}</a>
        </Link>
      </nav>
    </div>
  )
}
export default TopPage
