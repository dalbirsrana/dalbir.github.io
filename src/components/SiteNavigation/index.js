import React from 'react';

import { Link } from 'react-router-dom';

const SiteNav = ({toggleButton}) => (
    
    <nav className="site-main-nav">

        <div className="nav-wrapper">
            <ul>
                <li>
                    <Link to="/" onClick={ toggleButton }><i className="fas fa-home"></i> Home</Link>
                </li>

                <li>
                    <Link to="/resume" onClick={toggleButton}><i className="fas fa-file"></i> Resume</Link>
                </li>
                
                <li>
                    <Link to="/contact" onClick={toggleButton}><i className="fas fa-address-card"></i> Contact</Link>
                </li>

                <li>
                    <Link to="/blog" onClick={toggleButton}><i className="fas fa-blog"></i> Blog</Link>
                </li>

            </ul>
        </div>
        
    </nav>

);

export default SiteNav;