import React from 'react'

import '../styles/home.css';
import bgbook from '../assets/bgbook.jpg';

 function Home() {
  

  return (
    <section className="home-hero" style={{ backgroundImage: `url(${bgbook})` }}>
      <div className="home-content">
        <h1>Welcome to Rayalaseema University</h1>
        <h2>College Development Cell</h2>
      </div>
    </section>
  )
}

export default Home;