import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Dashboard.css";
/* good to go */
export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setError(null);
    setAnalysisResults([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null);
    setAnalysisResults([]);

    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    try {
      const response = await axios.post('https://bugless-server.onrender.com/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      setAnalysisResults(response.data.analysisResults);
    } catch (error) {
      console.error('Error uploading files:', error);
      setError('An error occurred while uploading files. Please check your network connection and try again.');
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Code Analysis Dashboard</h1>
          <div className="user-profile">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </div>
        </div>
        
        <div className="upload-section">
          <h2>Upload Files for Analysis</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="file-input-container">
              <label htmlFor="file-upload">Choose files</label>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".html,.css,.js,.jsx,.ts,.tsx,.py"
                className="file-input"
              />
            </div>
            <button
              type="submit"
              disabled={uploading || files.length === 0}
              className="submit-button"
            >
              {uploading ? 'Analyzing...' : 'Analyze'}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="analysis-results">
          <h2>Analysis Results</h2>
          {analysisResults.length === 0 ? (
            <p className="no-results">No analysis results available. Upload files to start analysis.</p>
          ) : (
            analysisResults.map((result, index) => (
              <div key={index} className="result-card">
                <h3>{result.fileName}</h3>
                <div className="result-grid">
                  <div className="result-section">
                    <h4>Issues Found: {result.issuesFound.length}</h4>
                    <ul>
                      {result.issuesFound.map((issue, issueIndex) => (
                        <li key={issueIndex}>
                          {issue.message} <span className="location">(Line: {issue.line}, Column: {issue.column})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="result-section">
                    <h4>Code Smells: {result.codeSmells.length}</h4>
                    <ul>
                      {result.codeSmells.map((smell, smellIndex) => (
                        <li key={smellIndex}>
                          <span className="smell-type">{smell.type}:</span> {smell.message} <span className="location">(Line: {smell.line})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="result-section">
                  <h4>Suggestions:</h4>
                  <ul>
                    {result.suggestions && result.suggestions.map((suggestion, suggestionIndex) => (
                      <li key={suggestionIndex}>
                        <p>{suggestion.message} <span className="location">(Line: {suggestion.line}, Column: {suggestion.column})</span></p>
                        <p className="suggestion">Suggestion: {suggestion.suggestion}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="result-section">
                  <h4>Metrics:</h4>
                  <p>Complexity: {result.metrics.complexity}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Bugless solution</h4>
            <div className='knowledgebase'>
              <Link to="/knowledgebase" className="footer-link ">Knowledge Base</Link>
            </div>
            <div className='feedback'>
              <Link to="/feedback" className="footer-link ">Feedback</Link>
            </div>
            <div className='terms'>
              <Link to="/terms" className="footer-link ">Terms and Conditions</Link>
            </div>
            <div className='privacy'>
              <Link to="/privacy" className="footer-link ">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className='knowledgebase'>
              <Link to="/contact" className="footer-link ">Contact Us</Link>
            </div>
            <div className='feedback'>
              <Link to="/about" className="footer-link ">About Us</Link>
            </div>
            <div className='terms'>
              <Link to="/testimonials" className="footer-link ">User Testimonials</Link>
            </div>
          </div>
          <div>
            <h4>Media</h4>
            <div><i className="fa-brands fa-twitter media-icon"></i></div>
            <div><i className="fa-brands fa-facebook media-icon"></i></div>
          </div>
        </div>
        <div className='copyright'>&copy; 2024 BUGLESS. All Right Reserved.</div>
      </footer>
    </div>
  );
}





/* import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Dashboard.css";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setError(null);
    setAnalysisResults([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null);
    setAnalysisResults([]);

    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    try {
      const response = await axios.post('https://bugless-server.onrender.com/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setAnalysisResults(response.data.analysisResults);
    } catch (error) {
      console.error('Error uploading files:', error);
      setError('An error occurred while uploading files. Please check your network connection and try again.');
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Code Analysis Dashboard</h1>
          <div className="user-profile">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </div>
        </div>
        
        <div className="upload-section">
          <h2>Upload Files for Analysis</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="file-input-container">
              <label htmlFor="file-upload">Choose files</label>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".html,.css,.js,.jsx,.ts,.tsx,.py"
                className="file-input"
              />
            </div>
            <button
              type="submit"
              disabled={uploading || files.length === 0}
              className="submit-button"
            >
              {uploading ? 'Analyzing...' : 'Analyze'}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="analysis-results">
          <h2>Analysis Results</h2>
          {analysisResults.length === 0 ? (
            <p className="no-results">No analysis results available. Upload files to start analysis.</p>
          ) : (
            analysisResults.map((result, index) => (
              <div key={index} className="result-card">
                <h3>{result.fileName}</h3>
                <div className="result-grid">
                  <div className="result-section">
                    <h4>Issues Found: {result.issuesFound.length}</h4>
                    <ul>
                      {result.issuesFound.map((issue, issueIndex) => (
                        <li key={issueIndex}>
                          {issue.message} <span className="location">(Line: {issue.line}, Column: {issue.column})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="result-section">
                    <h4>Code Smells: {result.codeSmells.length}</h4>
                    <ul>
                      {result.codeSmells.map((smell, smellIndex) => (
                        <li key={smellIndex}>
                          <span className="smell-type">{smell.type}:</span> {smell.message} <span className="location">(Line: {smell.line})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="result-section">
                  <h4>Suggestions:</h4>
                  <ul>
                    {result.suggestions && result.suggestions.map((suggestion, suggestionIndex) => (
                      <li key={suggestionIndex}>
                        <p>{suggestion.message} <span className="location">(Line: {suggestion.line}, Column: {suggestion.column})</span></p>
                        <p className="suggestion">Suggestion: {suggestion.suggestion}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="result-section">
                  <h4>Metrics:</h4>
                  <p>Complexity: {result.metrics.complexity}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Bugless solution</h4>
            <div className='knowledgebase'>
              <Link to="/knowledgebase" className="footer-link ">Knowledge Base</Link>
            </div>
            <div className='feedback'>
              <Link to="/feedback" className="footer-link ">Feedback</Link>
            </div>
            <div className='terms'>
              <Link to="/terms" className="footer-link ">Terms and Conditions</Link>
            </div>
            <div className='privacy'>
              <Link to="/privacy" className="footer-link ">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className='knowledgebase'>
              <Link to="/contact" className="footer-link ">Contact Us</Link>
            </div>
            <div className='feedback'>
              <Link to="/about" className="footer-link ">About Us</Link>
            </div>
            <div className='terms'>
              <Link to="/testimonials" className="footer-link ">User Testimonials</Link>
            </div>
          </div>
          <div>
            <h4>Media</h4>
            <div><i className="fa-brands fa-twitter media-icon"></i></div>
            <div><i className="fa-brands fa-facebook media-icon"></i></div>
          </div>
        </div>
        <div className='copyright'>&copy; 2024 BUGLESS. All Right Reserved.</div>
      </footer>
    </div>
  );
}




 */