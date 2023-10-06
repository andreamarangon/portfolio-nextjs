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
            La mia passione per la tecnologia, unita alla voglia di rimettermi in gioco,
            mi hanno spinto ad approcciare il mondo della programmazione web,
            che in breve tempo è diventata la mia passione.
          </p>
          <p className='py-2 text-gray-600'>
            Trovo entusiasmante poter dar vita a nuovi progetti, mettendo in pratica le mie competenze
            e acquisendone di nuove. Mi ritengo una persona meticolosa, attenta al dettaglio e in grado
            di focalizzarsi efficacemente sugli obiettivi da raggiungere, inoltre la mia esperienza nel mondo
            del commercio mi ha formato dal punto di vista dell'attenzione al cliente e alle sue esigenze.
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
    </div>
  )
}

export default About