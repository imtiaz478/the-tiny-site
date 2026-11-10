import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShortenerCard from './components/ShortenerCard'
import Stats from './components/Stats'
import PopularLinks from './components/PopularLinks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <ShortenerCard></ShortenerCard>
      <Stats></Stats>
      <PopularLinks></PopularLinks>
      <Features></Features>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <WhyChoose></WhyChoose>
      <Footer></Footer>
    </div>
  )
}

export default App