import { useState } from 'react'
import './App.css'
import './assets/reset.css'
import './assets/vars.css'
import MainContent from './main-content/MainContent.jsx'
import Sidebar from './sidebar/Sidebar.jsx'
import Footer from './footer/Footer.jsx'
import './assets/media-rules.css'

function App() {
	const [menuState, setMenuState] = useState(false);
	
	let toggleMenu = () => {
		setMenuState(!menuState);
	}
  return (
    <>
      <MainContent menuState={toggleMenu} />
      <Sidebar state={menuState} menuClose={toggleMenu} />
      <Footer />
    </>
  )
}

export default App
