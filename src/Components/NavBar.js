import React from 'react'
import clmedia from '../img/clmedialogo.png'
import { NavLink } from 'react-router-dom'
import { GrLinkedin } from 'react-icons/gr' 
import { FaGithub } from 'react-icons/fa' 
import { ExternalLink } from 'react-external-link/dist/index.cjs'


function NavBar () {

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={clmedia} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeclassname="active">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeclassname="active">
              About 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" activeclassname="active">
              Portfolio 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <div className="icons">
            {/* <ExternalLink href="https://www.facebook.com/profile.php?id=100001114052632">
              <div className="icon">
                <GrFacebook className="fb" />
              </div>
            </ExternalLink> */}
            <ExternalLink href="https://www.linkedin.com/in/camilo-lopez-a686b2b5/">
              <div className="icon">
                <GrLinkedin className="lk" />
              </div>
            </ExternalLink>
            <ExternalLink href="https://github.com/clopezlopez">  
              <div className="icon">
                <FaGithub className="gh" />
              </div>
            </ExternalLink>
          </div>
        </footer>
      </nav>
    </div>
  )
}

export default NavBar