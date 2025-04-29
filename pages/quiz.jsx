import Image from 'next/image'
import React from 'react'
import quizImg from '../public/assets/projects/quiz.png'
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
          src={quizImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Quiz App</h2>
          <h3>React.js / Typescript / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Progetto</p>
          <h2>Descrizione</h2>
          <p>
            In questo progetto ho realizzato una web app responsive a quiz sviluppata con React, con l’obiettivo principale di approfondire l’utilizzo di TypeScript in un progetto reale.
            Ho curato sia la parte funzionale che quella visiva, utilizzando Tailwind per il design e Framer Motion per aggiungere animazioni fluide.
            Il progetto mi ha permesso di consolidare le competenze front-end e migliorare la scrittura di codice tipizzato e manutenibile.
          </p>
          <a
            href='https://reactjs-typescript-quiz-app.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/andreamarangon/react-quiz-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologie</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Framer Motion
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