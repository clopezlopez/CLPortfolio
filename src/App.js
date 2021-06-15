import './App.scss'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import {Switch, Route} from 'react-router-dom'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {BrowserRouter} from 'react-router-dom'
import {Helmet} from 'react-helmet'


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <BrowserRouter>
      <Helmet>
          <title>CL Media</title>
          <meta 
            name="description"
            content="Freelancer on Upwork, specializing in modern HTML, CSS, Bootstrap 4, JavaScript, and React JS"
          />
          <meta name="keywords" content="Freelancer, Website, Web, Developer, Front-end, small, business, portfolio" />
      </Helmet>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`} onClick={navClick}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <GiHamburgerMenu size={60} className="ham-media"/>
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/portfolio' component={PortfolioPage} />
              <Route path='/contact' component={ContactPage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
