// ForumPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm, {PostFormValues} from '../PostForm'

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<PostFormValues []>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<PostFormValues []>('http://localhost:3001/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostCreated = (newPost: PostFormValues ) => {
    console.log('New post created:', newPost);
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="container mt-5">
      <h1>Forum Page</h1>
      <PostForm onPostCreated={handlePostCreated} />
      <div>
        <h2>Posts</h2>
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.tags && (
                <p>
                  <strong>Tags:</strong> {post.tags}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForumPage;
