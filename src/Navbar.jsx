
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className='fas fa-bars'></i> 
          
        </div>
        <h3 className='main-logo'> <span><i className="fa-solid fa-bug fa-beat-fade"></i></span> <span className='bug'>BUG</span>LESS</h3>
      </header>
      
      

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>

            <Link to="/" className='nav-logo'>
                <i className='fas fa-home-alt nav-logo-icon'></i>
                <span className='nav-logo-name'>home</span>
            </Link> 


            <div className='nav-list'>
              <Link to="/dashboard" className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>

              <Link to="/about" className='nav-link'>
              <i class="fa-regular fa-address-card nav-link-icon"></i>
                <span className='nav-link-name'>About</span>
              </Link>

              <Link to="/guide" className='nav-link'>
              <i class="fa-regular fa-compass nav-link-icon"></i>
                <span className='nav-link-name'>Guide</span>
              </Link>

              <Link to="/login/sign-up" className='nav-link active'>
                <i className='fas fa-sign-in-alt fa-fade nav-link-icon'></i>
                <span className='nav-link-name'>Login/ Sign Up</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default Navbar;



/* import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={'header ${show ? 'space-toggle' : null }'}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className='fas fa-bars'></i>
        </div>
      </header>

      <aside className={'sidebar ${show ? 'show' : null }'}>
        <nav className='nav'>
          <div>
            <Link to="/" className='nav-logo'>
              <i className='fas fa-home-alt nav-logo-icon'></i>
              <span className='nav-logo-name'>home</span>
            </Link>

            <div className='nav-list'>
              <Link to="/" className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>dashboard</span>
              </Link>

              <Link to="/" className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>hotel</span>
              </Link>

              <Link to="/" className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Gallery</span>
              </Link>

              <Link to="/" className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </Link>
            </div>
          </div>

          <Link to="/" className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  )
  
}

export default Navbar
 */