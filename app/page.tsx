import React from 'react'
import CustomNavbar from './components/shared/Navbar'
import Presentation from './components/Presentation'
import Portfolio from './components/Portfolio'
import { Divider } from '@nextui-org/react'
import Business from './components/Business'
import Footer from './components/shared/Footer'


const Page = () => {
  return (
    <>
      <Presentation />
      <Divider />
      <Portfolio />
      <Divider />
      <Business />
      <Divider />

    </>
  )
}

export default Page