import React from 'react'
import MyImage from '../me.jpg'
import {MdOutlineArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'


const Home = () => {
  return (
  <div name ='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>Coding & Climbing</h2>
                    <p className='text-gray-500 py-4 max-w-md'>Hello there! My name is Mark Podrabinnik and I am currently studying to be a full stack developer. When I am not coding I'm probably out climbing!</p>

                    <div>
                        <Link to='portfolio' smooth duration={300} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowRight size={27} className='ml-0.5'/>
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={MyImage} alt="Me" width={13} height={250} className='rounded-2xl mx-auto w-1/2 md:w-2/3'/>
                </div>
        </div>
  </div>
  )
}

export default Home