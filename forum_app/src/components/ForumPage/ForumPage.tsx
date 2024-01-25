// ForumPage.tsx

import React, { useState, useEffect } from 'react';
import { Post, Comment } from '../../types/types';

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newPost, setNewPost] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');

  useEffect(() => {
    // Fetch posts
    fetch('http://localhost:5000/api/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }
        return response.json() as Promise<Post[]>;
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error(error.message));

    // Fetch comments
    fetch('http://localhost:5000/api/comments')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch comments: ${response.statusText}`);
        }
        return response.json() as Promise<Comment[]>;
      })
      .then((data) => setComments(data))
      .catch((error) => console.error(error.message));
  }, []);

  const handleAddPost = () => {
    // Validate and sanitize newPost here if needed

    // Implement logic to send a request to your backend API to add a new post
    fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newPost }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to add post: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setPosts([...posts, data]))
      .catch((error) => console.error(error.message));

    setNewPost('');
  };

  const handleAddComment = (postId: string) => {
    // Validate and sanitize newComment here if needed

    // Implement logic to send a request to your backend API to add a new comment
    fetch(`http://localhost:5000/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newComment }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to add comment: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setComments([...comments, data]))
      .catch((error) => console.error(error.message));

    setNewComment('');
  };

  return (
    <div>
      {/* Add new post */}
      <div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your post..."
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      {/* Display existing posts */}
      <div>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            {/* Display comments for each post */}
            <div>
              <h3>Comments</h3>
              {comments
                .filter((comment) => comment.postId === post.id)
                .map((comment) => (
                  <p key={comment.id}>{comment.content}</p>
                ))}
              {/* Add new comment for the post */}
              <div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment..."
                />
                <button onClick={() => handleAddComment(post.id)}>Add Comment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
