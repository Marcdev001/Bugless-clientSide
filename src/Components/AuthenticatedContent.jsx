import React from 'react';
import { Link } from 'react-router-dom'

const AuthenticatedContent = () => {
  return (
    <div>
      <h3 className='userAuthenticated'>User authenticated!</h3>
      {/* Add any content or features that should be displayed to authenticated users */}
      <main className='section-2'>
        <Link to='/dashboard'><h2>Get Started</h2><i className="fa-solid fa-angles-right fa-beat icon-1"></i></Link>
      </main>
    </div>
  );
};

export default AuthenticatedContent;
 