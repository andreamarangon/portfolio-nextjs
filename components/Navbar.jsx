import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import NavLogo from '../public/assets/am-logo.png'
import { useRouter } from 'next/router'
import ThemeToggle from "../theme/theme-toggle";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('navBgColor')
  const [linkColor, setLinkColor] = useState('navLinkColor')

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/photo' ||
      router.asPath === '/weather' ||
      router.asPath === '/boolgram' ||
      router.asPath === '/shoppingCart' ||
      router.asPath === '/quiz' ||
      router.asPath === '/spotify'
    ) {
      setNavBg('transparent');
      setLinkColor('text-white');
    } else {
      setNavBg('navBgColor');
      setLinkColor('navLinkColor');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])


  return (
    <div
      //style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? `${navBg} fixed w-full h-20 shadow-xl z-100 ease-in-out duration-300`
          : `${navBg} fixed w-full h-20 z-100`
      }>
      <div className='flex justify-between items-center w-full h-full px-5 2xl:px-16'>
        <Link href='/#home'>
          <Image src={NavLogo} alt="/" width="60" height="60" className='cursor-pointer' />
        </Link>
        <div className={linkColor}>
          <ul className='hidden md:flex items-center'>
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href='/#about'>
              <li className="ml-10 text-sm uppercase hover:border-b">Info</li>
            </Link>
            <Link href='/#skills'>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className="ml-10 text-sm uppercase hover:border-b">Progetti</li>
            </Link>
            <Link href='/#contact'>
              <li className="mx-10 text-sm uppercase hover:border-b">Contatti</li>
            </Link>
            <ThemeToggle />
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-800 p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={NavLogo} width='45' height='45' alt='/' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Lavoriamo insieme</p>
            </div>
          </div>
          <div className='py-4 flex flex-col h-[calc(100%-141px)] justify-between'>
            <ul className='uppercase'>
              <Link href='/#home'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Info</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Progetti</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contatti</li>
              </Link>
            </ul>
            <div>
              <p className='uppercase tracking-widest text-[#9D1D38]'>Contatti</p>
              <div className='flex items-center justify-around my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/marangon-andrea'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/andreamarangon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                {/*                 <a
                  href='mailto:andreamarangon84@outlook.it'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
 */}                <a
                  href='/cv-andrea-marangon.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
              <div className='flex justify-center pt-4'>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar