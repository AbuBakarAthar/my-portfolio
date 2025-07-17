import './App.css'
import Header from './pages/Header'
import HeroSection from './pages/HeroSection'
import ServicesSection from './pages/Services'
import ProjectsSection from './pages/Projects'
import AboutMe from './pages/Abouts'
import SkillsExperience from './pages/Skill'
import Testimonials from './pages/Testimonials'
import Footer from './pages/Footer'

function App() {

  return (
    <>
     {/* <Header /> */}
     <Header />
     <HeroSection />
     <AboutMe />
     <SkillsExperience />
     <ServicesSection />
     <ProjectsSection />
     <Testimonials />
     {/* <Contacts/> */}
     <Footer />
     {/* <Navbar/> */}
    </>
  )
}

export default App

