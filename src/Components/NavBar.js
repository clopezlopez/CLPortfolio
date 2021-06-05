import React from 'react'
import dev_logo from '../img/dev_logo.png'
import { Link } from 'react-router-dom'
import { GrFacebook, GrLinkedin } from 'react-icons/gr' 
import { FaGithub } from 'react-icons/fa' 
import { ExternalLink } from 'react-external-link/dist/index.cjs'



function NavBar () {


  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={dev_logo} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" activeclassname="active">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" activeclassname="active">
              About 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" activeclassname="active">
              Portfolio 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" activeclassname="active">
              Contact
            </Link>
          </li>
        </ul>
        <footer className="footer">
          <div className="icons">
            <ExternalLink href="https://www.facebook.com/profile.php?id=100001114052632">
              <div className="icon">
                <GrFacebook className="fb" />
              </div>
            </ExternalLink>
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