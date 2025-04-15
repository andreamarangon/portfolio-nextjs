import Image from 'next/image'
import React from 'react'
import shoppingCartImg from '../public/assets/projects/reactShoppingCart.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const shoppingCart = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 object-cover'
          fill
          priority
          src={shoppingCartImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Shopping Cart</h2>
          <h3>React.js / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Progetto</p>
          <h2>Descrizione</h2>
          <p>
            In questo progetto ho sviluppato un sistema completo di shopping cart per un'applicazione e-commerce, utilizzando React.js per la costruzione dell’interfaccia e Redux Toolkit per la gestione dello stato globale in modo efficiente e scalabile.
            L'interfaccia utente è stata progettata con Tailwind CSS, per garantire un design moderno, responsive e facilmente personalizzabile.
            La navigazione tra le varie sezioni dell’app è gestita tramite react-router-dom, assicurando un’esperienza utente fluida grazie al routing client-side.
            Il carrello consente di aggiungere, rimuovere e aggiornare i prodotti, calcolare il totale in tempo reale e gestire lo stato persistente durante la navigazione.
          </p>
          <a
            href='https://react-e-commerce-cart.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/andreamarangon/react-shopping-cart'
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
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux Toolkit
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

export default shoppingCart