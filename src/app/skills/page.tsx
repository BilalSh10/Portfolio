import React from 'react'
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Footer from '../components/footer';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
      <Navbar/>
      <Skills/>
      <Footer />
    </div>
  )
}

export default page