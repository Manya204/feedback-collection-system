import React, { useState, useEffect } from 'react';

export default function ShowQuery() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await fetch('http://localhost:5000/feedback/queryform');
      if (!response.ok) {
        throw new Error('Failed to fetch queries');
      }
      const data = await response.json();
      setQueries(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching queries:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>All Queries</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {queries.map((query, index) => (
            <li key={index}>
              <h2>{query.name}</h2>
              <p>Email: {query.email}</p>
              <p>Phone: {query.countryCode} {query.phone}</p>
              <p>Query: {query.query}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

