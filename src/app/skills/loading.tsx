'use client';
import React from 'react'
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animation_lkzc5ec0.json';

const loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Lottie className='w-1/3 h-auto' animationData={loadingAnimation}/>
    </div>
  )
}

export default loading