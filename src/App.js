import React from 'react'
import "./App.css"
import Header from './components/Header'
import TopFold from './components/TopFold'
import BrandsIntegration from './components/BrandsIntegration'
import TrendingNfts from './components/TrendingNfts'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='max-width'>
      <Header/>
      <TopFold/>
      <BrandsIntegration/>
      <TrendingNfts/>
    
      <InfoSection/>
      <Footer/>
      
    </div>
  )
}

export default App
