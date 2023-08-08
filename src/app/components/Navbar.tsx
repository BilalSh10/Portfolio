'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import logoImage from './../assets/1.png';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  
  const pathname = usePathname();
  const [inPage, setInPage] = useState('border-b-2 border-black w-fit phone:border-white');
  const [menuClicked, setMenuClicked] = useState(false);

  let menuClickedFunction = () => {
    setMenuClicked(!menuClicked);
  }

  return (
    <nav className='flex flex-row justify-around w-full mr-28 p-6 phone:justify-between phone:mr-0 phone:items-center phone:p-8'>
        <div className={menuClicked? 'flex flex-col gap-8 p-8 bg-black fixed top-0 right-0 w-full h-screen z-10 text-white opacity-90': 'flex flex-row gap-12 items-center phone:hidden'}>
            <div className={menuClicked? 'inline-block w-fit' : 'hidden'} onClick={menuClickedFunction}>
              <AiOutlineClose size={25}/>
            </div>
            <Link className={pathname === '/' ? inPage : 'w-fit'} href='/'>Home</Link>
            <Link className={pathname === '/about' ? inPage : 'w-fit'} href='/about'>About</Link>
            <Link className={pathname === '/projects' ? inPage : 'w-fit'} href='/projects'>Projects</Link>
            <Link className={pathname === '/skills' ? inPage : 'w-fit'} href='/skills'>Skills</Link>
        </div>

        <Link href='/'>
            <Image className='h-10 w-40 phone:h-9 phone:w-36' src={logoImage} alt='picLogo'/>
        </Link>

        <div className={menuClicked? 'flex flex-col gap-8 p-8 bg-black absolute top-0 right-0 z-10 text-white opacity-90': 'flex flex-row gap-14 items-center phone:hidden'}>
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
        <div className='phone:inline-block hidden' onClick={menuClickedFunction}>
          <HiOutlineMenuAlt3 size={28}/>
        </div>
    </nav>
  )
}

export default Navbar