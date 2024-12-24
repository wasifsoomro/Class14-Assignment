import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-8 text-5xl'>
     <Link href="/posts">
     <p><strong>
        View Posts
        </strong></p>
     </Link>
    </div>
  )
}
