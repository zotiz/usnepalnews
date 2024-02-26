import Bichar from '@/components/subcomponents/Bichar'
import Hero from '@/components/subcomponents/Hero'
import TrendingNews from '@/components/subcomponents/TrendingNews'
import WeatherApp from '@/components/subcomponents/WeatherApp'
import React from 'react'

const page = () => {
  return (
    <div className="my-5">
      <Hero/>
      <br />
      
      <TrendingNews/>
      <br />
      <Bichar/>
    </div>
  )
}

export default page
