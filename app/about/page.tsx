import React from 'react'

import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Business from '../components/Business'
import Skills from '../components/Skills'
import Education from '../components/Education'

const AboutPage = () => {
  return (
    <>
      <About />
      
      <Expertise/>
      
      <Business/>
      <Skills/>
      <Education/>

      {/* <Portfolio /> */}
    </>
  )
}

export default AboutPage