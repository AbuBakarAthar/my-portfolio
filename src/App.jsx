import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import HeroSection from './pages/HeroSection'
import ServicesSection from './pages/Services'
import ProjectsSection from './pages/Projects'
import Contacts from './pages/Contacts'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <HeroSection />
     <ServicesSection />
     <ProjectsSection />
     <Contacts/>
     {/* <Navbar/> */}
    </>
  )
}

export default App

