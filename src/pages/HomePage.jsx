import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import VeiwAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome = {true}/>
      <VeiwAllJobs />
    </>
  )
}

export default HomePage
