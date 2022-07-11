import React from 'react'
import avatar from '../img/avatar.jpg'
import { Link } from 'react-router-dom'



function HomePage () {
  return (
    <div className="HomePage">
      <section className="home-section">
        <h1 className="home-title title-intro">
          Hi, I am <span>Camilo Lopez</span>
        </h1>
        <h2 className="home-subtitle subtitle-intro">WEB DEVELOPER</h2>
        {/* <h3 className="home-subheader subheader-intro">Front End Developer / Aspiring Full Stack Developer</h3> */}
        <img src={avatar} alt="" className="home-img"/>
      </section>
      <div className="center-btn">
        <Link to="/portfolio">
          <button className="btn">Portfolio</button>
        </Link>
      </div>
    </div>
    
  )
}

export default HomePage