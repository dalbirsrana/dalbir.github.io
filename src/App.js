import React, { useEffect, Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.scss'

import SiteHeader from './components/SiteHeader/index'
import HomePage from './portfolio'
import Resume from './portfolio/resume'
import Blog from './blog/Posts'
import SinglePost from './blog/SinglePost'
import Contact from './portfolio/contact'

function App() {

  const location = useLocation();

  useEffect(() => {

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const observer = new IntersectionObserver( (entries) => {
      entries.forEach( (entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
        //  entry.target.classList.remove('show');
        }
      }); 
    }, options );
    const hiddenEls = document.querySelectorAll('.hidden');
    hiddenEls.forEach( function (el) {
      return observer.observe(el);
    } );

  }, [location] );


  return (
      <Fragment>
        <SiteHeader />
        <main>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<SinglePost />} />
          </Routes>
        </main>
      </Fragment>
  );
}

export default App;