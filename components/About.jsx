import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#9D1D38]'>
            Info
          </p>
          <h2 className='py-4'>Chi sono</h2>
          <p className='py-2 text-gray-600'>
            La mia passione per la tecnologia mi ha portato a specializzarmi nello sviluppo web front-end, un ambito che ho scelto per l’equilibrio perfetto tra creatività, logica e impatto concreto. Utilizzo principalmente React.js per creare interfacce moderne, responsive e focalizzate sull’esperienza utente.
          </p>
          <p className='py-2 text-gray-600'>
            Mi piace dar vita a progetti curati nei minimi dettagli, esplorando costantemente nuove tecnologie e approcci per migliorarmi. Ho un forte senso pratico, sono meticoloso nel codice e ho una mentalità orientata al problem solving.
          </p>
          <p className='py-2 text-gray-600'>
            La mia esperienza nel commercio mi ha insegnato l'importanza dell’ascolto del cliente, della comunicazione e della capacità di adattarmi rapidamente a contesti diversi — soft skill che oggi porto anche nel mio lavoro come developer.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Dai un'occhiata ad alcuni dei miei lavori qui.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div >
  )
}

export default About