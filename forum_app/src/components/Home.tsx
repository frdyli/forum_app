// Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/types'; // Update the path to match your project structure

const Home: React.FC = () => {
  // Replace this with your actual state and API call logic
  const [forumThreads, setForumThreads] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch forum threads or set them from your state
    // Example API call:
    // fetch('your-api-endpoint')
    //   .then(response => response.json())
    //   .then(data => setForumThreads(data));

    // For demonstration purposes, using a static array
    const dummyForumThreads: Post[] = [
      { id: '1', title: 'Discussion 1', content: 'Lorem ipsum...' },
      { id: '2', title: 'Discussion 2', content: 'Lorem ipsum...' },
      // Add more threads as needed
    ];

    setForumThreads(dummyForumThreads);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Forum Threads</h1>
      <ul>
        {forumThreads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/forum/${thread.id}`}>{thread.title}</Link>
            {/* Add other details like author, date, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
