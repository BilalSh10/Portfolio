import React from 'react'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/footer';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
      <Navbar />
      <ProjectsSection/>
      <Footer/>
    </div>
  )
}

export default page