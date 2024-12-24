import React from 'react';

export default async function CommentsPage({ params }: any) {
  const postId = params.id; // Access the dynamic `id` parameter
  const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  // Fetch comments for the specific post
  const response = await fetch(commentsUrl);
  const comments = await response.json();

  return (
    <div className='m-8'>
      <h1>Comments for Post {postId}</h1>
      <ul>
        {comments.map((comment: any) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
