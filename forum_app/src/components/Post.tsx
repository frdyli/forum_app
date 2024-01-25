// Post.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';

interface Comment {
  id: number;
  text: string;
}

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    tags: string[];
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/posts/${post.id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCommentAdded = () => {
    fetchComments();
  };

  return (
    <div className="mb-4">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <strong>Tags:</strong> {post.tags.join(', ')}
      </div>
      <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
      <div>
        <h3>Comments</h3>
        <ul className="list-group">
          {comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
