import React from 'react';
//import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400'>
            LAVORIAMO INSIEME
          </p>
          <h1 className='py-4 text-gray-700 dark:text-white'>
            Ciao, sono <span className='text-[#9D1D38]'> Andrea</span>
          </h1>
          <h1 className='py-2 text-gray-700 dark:text-white'>Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 dark:text-gray-400 sm:max-w-[70%] m-auto'>
            Creo interfacce moderne, responsive e user-friendly utilizzando tecnologie come React.js e Tailwind CSS.
            Mi piace trasformare idee in esperienze web curate nei dettagli e performanti.
          </p>
          <div className='flex items-center justify-around max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/marangon-andrea'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/andreamarangon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            {/*             <a
              href='mailto:andreamarangon84@outlook.it'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
 */}
            <a
              href='/cv-andrea-marangon.pdf'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main