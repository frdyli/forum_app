// CommentForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface CommentFormProps {
  postId: number;
  onCommentAdded: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onCommentAdded }) => {
  const [comment, setComment] = useState<string>('');

  const handleComment = async () => {
    try {
      await axios.post(`/api/posts/${postId}/comments`, { text: comment });
      console.log('Comment added successfully!');
      setComment('');
      onCommentAdded();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="mb-4">
      <h3>Add a Comment</h3>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea
          className="form-control"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleComment}>
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;

