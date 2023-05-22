import React from 'react'
import '../App.css'

import Navigation from './../component/section/Navigation'
import LandingPage from './../component/LandingPage'
import Footer from './../component/section/Footer'

function Home () {
  return (
      <div>
        <Navigation />
        <LandingPage />
        <Footer />

      </div>
  )
}

export default Home
