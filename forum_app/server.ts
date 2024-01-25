// server.ts
import express from 'express';
import cors from 'cors';

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Comment {
  id: string;
  postId: string;
  content: string;
}

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy data for demonstration purposes
const posts: Post[] = [
  { id: '1', title: 'Post 1', content: 'Lorem ipsum...' },
  { id: '2', title: 'Post 2', content: 'Lorem ipsum...' },
  // Add more posts as needed
];

const comments: Comment[] = [
  { id: '1', postId: '1', content: 'Comment 1 for Post 1' },
  { id: '2', postId: '1', content: 'Comment 2 for Post 1' },
  // Add more comments as needed
];

// Endpoint to get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Endpoint to get all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

