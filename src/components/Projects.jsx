import React, { useState, useEffect } from 'react';

// Projects Page Component fetching GitHub repositories via API
function Projects() {
  // Required useState variables
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GitHub username variable
  const githubUsername = "24CS054KRISH";

  // useEffect hook to fetch repositories when component mounts
  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch repositories from GitHub API');
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures effect runs once on mount

  return (
    <div>
      <div className="card">
        <h2>My GitHub Repositories</h2>
        <p>
          Live repositories fetched from GitHub user: <strong>{githubUsername}</strong>
        </p>
      </div>

      {/* Loading state display */}
      {loading && (
        <div className="card">
          <p>Loading GitHub repositories...</p>
        </div>
      )}

      {/* Error state display */}
      {error && (
        <div className="card" style={{ borderColor: '#f87171' }}>
          <p style={{ color: '#dc2626' }}><strong>Error:</strong> {error}</p>
        </div>
      )}

      {/* Displaying fetched repositories */}
      {!loading && !error && (
        <div>
          {repos.length === 0 ? (
            <div className="card">
              <p>No public repositories found.</p>
            </div>
          ) : (
            repos.map((repo) => (
              <div key={repo.id} className="card">
                <h3 style={{ color: '#1e3a8a', marginBottom: '8px', fontSize: '18px' }}>
                  {repo.name}
                </h3>
                <p style={{ marginBottom: '10px', fontSize: '14px', color: '#555555' }}>
                  {repo.description || 'No description available for this repository.'}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}
                >
                  View Repository on GitHub &rarr;
                </a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
