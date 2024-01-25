// Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/types'; 
const Home: React.FC = () => {
  const [forumThreads, setForumThreads] = useState<Post[]>([]);

  useEffect(() => {
      const dummyForumThreads: Post[] = [
      { id: '1', title: 'Discussion 1', content: 'Lorem ipsum...' },
      { id: '2', title: 'Discussion 2', content: 'Lorem ipsum...' },
    ];

    setForumThreads(dummyForumThreads);
  }, []); 

  return (
    <div>
      <h1>Forum Threads</h1>
      <ul>
        {forumThreads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/forum/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
