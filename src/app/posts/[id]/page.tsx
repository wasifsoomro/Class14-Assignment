import React from 'react'
import Link from 'next/link'

export default async function DynamicPost(props: any) {
  const postId = props.params.id
  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const post = await url.json()
  console.log(post)
  
  return (
    <div>
      <div className='m-8'>
        <h1 >
          <strong>User ID:</strong> {post.userId} <br /> <br />
          <strong>Post:</strong> {post.id} <br /> <br />
          <strong>Title:</strong> {post.title} <br /> <br />
          <strong>Body:</strong> {post.body} <br /> <br />
        </h1>
      <p><Link href={`/posts/${postId}/comments`}><button>View Comments</button></Link></p>
      </div>
    </div>
  )
}
