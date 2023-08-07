'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import logoImage from './../assets/1.png';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  
  const pathname = usePathname();
  const [inPage, setInPage] = useState('border-b-2 border-black');

  return (
    <nav className='flex flex-row justify-around w-full mr-28 p-6'>
        <div className='flex flex-row gap-12 items-center'>
            <Link className={pathname === '/' ? inPage : ''} href='/'>Home</Link>
            <Link className={pathname === '/about' ? inPage : ''} href='/about'>About</Link>
            <Link className={pathname === '/projects' ? inPage : ''} href='/projects'>Projects</Link>
            <Link className={pathname === '/skills' ? inPage : ''} href='/skills'>Skills</Link>
        </div>

        <Link href='/'>
            <Image className='h-10 w-40' src={logoImage} alt='picLogo'/>
        </Link>

        <div className='flex flex-row gap-14 items-center'>
            <a className='hover:text-blue-700 transition-all duration-100' target="_blank" href='https://www.linkedin.com/in/bilal-shweike-40b907213/'>
              <BsLinkedin size={20}/>
            </a>
            <a className='hover:text-neutral-800 transition-all duration-100' target="_blank" href='https://github.com/BilalSh10'>
              <BsGithub size={20}/>
            </a>
            <a className='hover:text-red-500 transition-all duration-100' target="_blank" href='https://www.instagram.com/iambilalshweike/'>
              <BsInstagram size={20}/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar