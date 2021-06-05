import './App.scss'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import {Switch, Route} from 'react-router-dom'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
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
  )
}

export default App
