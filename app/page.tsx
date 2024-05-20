import React from 'react'
import CustomNavbar from './components/Navbar'
import Presentation from './components/Presentation'
import Portfolio from './components/Portfolio'
import { Divider } from '@nextui-org/react'
import Business from './components/Business'


const Page = () => {
  return (
    <>
      <Presentation />
      <Divider />
      <Portfolio />
      <Divider />
      <Business/>
     
    </>
  )
}

export default Page