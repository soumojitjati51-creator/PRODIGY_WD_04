import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        {/* Portfolio sections will go here */}
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Achievements/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  )
}

export default App