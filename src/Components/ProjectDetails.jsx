import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

function ProjectDetails() {
  const { id } = useParams();
  const location = useLocation();
  const fileIndex = new URLSearchParams(location.search).get('file');
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching project:', error);
        setError(error.response?.data?.error || 'An error occurred while fetching the project');
      }
    };

    fetchProject();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  const fileResult = project.analysisResults[fileIndex];

  return (
    <div>
      <h2>{fileResult.fileName}</h2>
      <h3>Errors</h3>
      <ul>
        {fileResult.errors.map((error, index) => (
          <li key={index}>
            {error.message} (Line: {error.line}, Column: {error.column})
          </li>
        ))}
      </ul>
      <h3>Code Smells</h3>
      <ul>
        {fileResult.codeSmells.map((smell, index) => (
          <li key={index}>
            {smell.type}: {smell.message} (Line: {smell.line})
          </li>
        ))}
      </ul>
      <h3>Security Vulnerabilities</h3>
      <ul>
        {fileResult.securityVulnerabilities.map((vulnerability, index) => (
          <li key={index}>
            {vulnerability.name} (Severity: {vulnerability.severity})
            <p>{vulnerability.description}</p>
          </li>
        ))}
      </ul>
      <h3>Metrics</h3>
      <p>Complexity: {fileResult.metrics.complexity}</p>
    </div>
  );
}

export default ProjectDetails;