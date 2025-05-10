import Image from 'next/image'
import React from 'react'
import photoImg from '../public/assets/projects/nextjsPhoto.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const photo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 object-cover'
          fill
          priority
          src={photoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-5'>
          <h2 className='py-2'>Photo Website</h2>
          <h3>Next.js / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Progetto</p>
          <h2>Descrizione</h2>
          <p>
            Questo sito web è stato creato utilizzando Next.js incorporando il componente Image che Next.js
            ci fornisce, nonchè il sistema di routing interno. Ciò significa che tutte le foto che utilizzeremo
            sfrutteranno il lazy loading e verrà creato uno slider che carica tutte le immagini,
            il che si traduce in tempi di costruzione più rapidi e maggiore SEO per il sito web.
            Next.js offre un sistema di routing integrato e il componente Link, questo significa che non dovremo utilizzare
            react-router-dom come faremmo normalmente quando gestiamo il routing nelle applicazioni React.js.
          </p>
          <a
            href='https://nextjs-photo.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 buttonGradient'>Demo</button>
          </a>
          <a
            href='https://github.com/andreamarangon/nextjs-photo'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 buttonGradient'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologie</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 dark:text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 dark:text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 dark:text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Indietro</p>
        </Link>
      </div>
    </div>
  )
}

export default photo