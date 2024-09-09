// App.jsx
import React from 'react';
import useFetch from './hooks/useFetch'; 


export default function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts"); // Use the hook

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data && data.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
