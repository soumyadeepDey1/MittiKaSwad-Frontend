import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestProducts from '../components/BestProducts'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/newsLetterBox'

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection />
        <BestProducts />
        <OurPolicy />
        <NewsLetterBox />
    </div>
  )
}

export default Home