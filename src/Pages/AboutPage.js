import React from 'react'
import Title from '../Components/Title'
import react_logo from '../img/react_logo.png'
import nodejs_logo from '../img/nodejs_logo.png'
import sass_logo from '../img/sass_logo.png'
import html5_logo from '../img/html5_logo.png'
import css3_logo from '../img/css3_logo.png'
import javascript_logo from '../img/javascript_logo.png'
import python_logo from '../img/python_logo.png'
import django_logo from '../img/django_logo.png'
import postgresql_logo from '../img/postgresql_logo.png'
import {Helmet} from 'react-helmet'


function AboutPage () {
  return (
    <div className="AboutPage">
      <Helmet>
          <title>CL Media | About Me</title>
          <meta 
            name="description"
            content="Learn about me and what I do"
          />
      </Helmet>
      <Title title={'About Me'} />
      <div className="about-container">
        <div className="about-content">
          <h2>Who I am</h2>
          <p>I am a veteran with a background in Network Administration and a freelance web developer based out of Watertown, NY. In my journey of becoming a front-end developer, I found problem-solving to be my niche, learning has become my hobby, and creating my passion.</p>
          <br />
          <h2>What I do</h2>
          <p>I offer UI/UX design which involves planning and iterating a site's layout and structure. Once the proper architecture is in place, I build the visual and functional components using HTML, CSS, Javascript and React Js. I also have some experience in back-end development with Python, and Django. </p>
        </div>
        <div className="skill-content">
          <h2>Main Skills</h2>
          <img src={react_logo} alt="My skills"/>
          <img src={nodejs_logo} alt="My skills"/>
          <img src={sass_logo} alt="My skills"/>
          <img src={html5_logo} alt="My skills"/>
          <img src={css3_logo} alt="My skills"/>
          <img src={javascript_logo} alt="My skills"/>
        </div>
        <div className="skill-content">
          <h2>Other Skills</h2>
          <img src={python_logo} alt="My skills"/>
          <img src={django_logo} alt="My skills"/>
          <img src={postgresql_logo} alt="My skills"/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage