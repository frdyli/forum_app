// ForumPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from '../PostForm';
import CommentForm from '../CommentForm';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostCreated = () => {
    fetchPosts();
  };

  const handleCommentAdded = () => {
    fetchPosts();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Forum Page</h1>
      <PostForm onPostCreated={handlePostCreated} />

      <div className="mt-4">
        <h2>Posts</h2>
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              <h3 className="mb-2">{post.title}</h3>
              <p className="mb-0">{post.content}</p>
              <div>
                <strong>Tags:</strong> {post.tags.join(', ')}
              </div>
              <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForumPage;
