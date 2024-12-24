import React from 'react'
import Link from 'next/link'

export default async function Posts() {
  const url = await fetch('https://jsonplaceholder.typicode.com/posts')
  const post = await url.json()

  const commenturl = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments = await commenturl.json()
  console.log(post)
  console.log(comments)
  return (
    <main>
      <div className='m-8'>
        {post.map((Post: any, index:number) => (
          <div key={index}>
        <Link href={`/posts/${Post.id}`}>
            <h1 className="text-3xl ml-6">
              {Post.id} &nbsp; &nbsp;
              {Post.title}
            </h1>
        </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
