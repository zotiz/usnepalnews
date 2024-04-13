import Bichar from '@/components/subcomponents/Bichar'
import Bussiness from '@/components/subcomponents/Bussiness'
import Hero from '@/components/subcomponents/Hero'
import InterviewAndLiterature from '@/components/subcomponents/InterviewAndLiterature'
import TrendingNews from '@/components/subcomponents/TrendingNews'
import WeatherApp from '@/components/subcomponents/WeatherApp'
import React from 'react'

const page = () => {
  return (
    <div className="my-5">
      <Hero />
      <br />

      <TrendingNews />
      <br />
      <Bichar />
      <br />
      <InterviewAndLiterature />
      <br />
      <Bussiness />
    </div>
  )
}

export default page
