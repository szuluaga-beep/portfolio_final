import React from 'react'

import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Business from '../components/Business'
import Skills from '../components/Skills'

const AboutPage = () => {
  return (
    <>
      <About />
      
      <Expertise/>
      
      <Business/>
      <Skills/>

      {/* <Portfolio /> */}
    </>
  )
}

export default AboutPage