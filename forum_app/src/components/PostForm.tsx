// PostForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

export interface PostFormValues  {
  id: number;
  title: string;
  content: string;
  tags: string; 
}

interface PostFormProps {
  onPostCreated: (newPost: PostFormValues ) => void;
}



const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  const handlePost = async () => {
    try {
      const response = await axios.post<PostFormValues >('http://localhost:3001/posts', {
        title,
        content,
        tags,
      });
      const newPost: PostFormValues  = response.data;
      console.log('Post created successfully:', newPost);
      setTitle('');
      setContent('');
      setTags('');
      onPostCreated(newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="mb-4">
      <h2>Create a Post</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags (comma-separated):</label>
        <input
          type="text"
          className="form-control"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handlePost}>
        Create Post
      </button>
    </div>
  );
};

export default PostForm;

