import React from 'react'
import proj1 from '../portfolio/welcome-page.png'
import proj2 from '../portfolio/SQL.png'
import proj3 from '../portfolio/unnamed.png'

const Portfolio = () => {

    const portfolios = [
        {
         id:1,
         src: proj1
        },
        {
            id:2,
            src: proj2
         },
           {
            id:3,
            src: proj3
        },
    ]

  return (
    <div name ='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Some projects</p>
            </div>

           

            <div className='grid sm: grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    
                <div className='shawdo-md shadow-gray-600 rounded-lg'>

                    <img src={proj1} alt="GhostWriter" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://stormy-plains-32549-a1bc163e95b5.herokuapp.com/">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>

                        <a href="https://github.com/javieb5186/ghostwriter">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>

                    <img src={proj2} alt="GhostWriter" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                         <a href="https://www.youtube.com/watch?v=oyGpi5tLAA0">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/markymark97/EmployeeTacker">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>

                    <img src={proj3} alt="GhostWriter" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                    <a href="https://markymark97.github.io/Movie-Quiz/">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>

                        <a href="https://github.com/markymark97/Movie-Quiz">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio