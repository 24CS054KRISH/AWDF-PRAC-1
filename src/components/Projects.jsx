import React, { useState, useEffect } from 'react';

// Import Spinner and ErrorMessage components
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

function Projects() {
  // useState hooks for storing repositories, loading, and error states
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubUsername = "24CS054KRISH";

  // useEffect hook to fetch user repositories from GitHub API
  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch repositories from GitHub API.');
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
  }, []);

  return (
    <div>
      <div className="card">
        <h2>My GitHub Repositories</h2>
        <p>
          Fetching live repositories for user: <strong>{githubUsername}</strong>
        </p>
      </div>

      {/* Render Spinner component while loading */}
      {loading && <Spinner />}

      {/* Render ErrorMessage component if API call fails */}
      {error && <ErrorMessage message={error} />}

      {/* Render repository list after loading completes without error */}
      {!loading && !error && (
        <div>
          {repos.length === 0 ? (
            <div className="card">
              <p>No public repositories found for this account.</p>
            </div>
          ) : (
            repos.map((repo) => (
              <div key={repo.id} className="card">
                {/* Repository Name */}
                <h3 style={{ color: '#1e3a8a', marginBottom: '8px', fontSize: '18px' }}>
                  {repo.name}
                </h3>
                
                {/* Repository Description */}
                <p style={{ marginBottom: '12px', fontSize: '14px', color: '#555555' }}>
                  {repo.description || 'No description available for this repository.'}
                </p>

                {/* Repository Link & Stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}
                  >
                    View Repository on GitHub &rarr;
                  </a>
                  <span className="skill-item">⭐ Stars: {repo.stargazers_count}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
