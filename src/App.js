import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import SiteHeader from './components/SiteHeader/index'
import HomePage from './portfolio'
import Resume from './portfolio/resume'
import Blog from './blog/Posts'
import SinglePost from './blog/SinglePost'
import Contact from './portfolio/contact'

function App() {
  return (
    
      <Fragment>
        <BrowserRouter>
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SinglePost />} />
          </Routes>
        </main>
        </BrowserRouter>

      </Fragment>
  );
}

export default App;