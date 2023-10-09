import React from 'react'
import reactWeatherApp from '../public/assets/projects/reactWeatherApp.png'
import nextjsPhoto from '../public/assets/projects/nextjsPhoto.png'
import boolgram from '../public/assets/projects/boolgram.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#9D1D38]'>
          Progetti
        </p>
        <h2 className='py-4'>Dai un'occhiata ad alcuni dei miei lavori qui</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Weather App'
            backgroundImg={reactWeatherApp}
            projectUrl='/weather'
            tech='React JS'
          />
          <ProjectItem
            title='Photo Site'
            backgroundImg={nextjsPhoto}
            projectUrl='/photo'
            tech='Next JS'
          />
          <ProjectItem
            title='Boolgram (Instagram Clone)'
            backgroundImg={boolgram}
            projectUrl='/boolgram'
            tech='Vue JS'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects