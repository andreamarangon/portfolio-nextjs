import Image from 'next/image'
import React from 'react'
import spotifyImg from '../public/assets/projects/spotify.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const spotify = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 object-cover'
          fill
          priority
          src={spotifyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-5'>
          <h2 className='py-2'>Spotify Clone</h2>
          <h3>React.js / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Progetto</p>
          <h2>Descrizione</h2>
          <p>
            In questo progetto ho realizzato un clone della versione web di Spotify, ricreando un'interfaccia moderna e interattiva utilizzando React.js. L’applicazione consente di riprodurre brani audio in streaming, simulando l’esperienza utente della piattaforma originale.
            L'interfaccia utente è stata sviluppata con Tailwind CSS, per ottenere un design pulito, responsive e facilmente modulabile.
            La gestione della navigazione tra le pagine (home, libreria, player, ecc.) è affidata a react-router-dom, garantendo un routing fluido e dinamico.
            Il progetto include funzionalità come player musicale con controlli di riproduzione, playlist dinamiche, e una struttura modulare dei componenti, pensata per facilitare l’estendibilità dell’applicazione.
          </p>
          <a
            href='https://react-tailwindcss-spotify-clone.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 buttonGradient'>Demo</button>
          </a>
          <a
            href='https://github.com/andreamarangon/spotify-clone'
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
                <RiRadioButtonFill className='pr-1' /> React.js
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

export default spotify