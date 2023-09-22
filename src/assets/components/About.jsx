import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-x1 mt-20'>
                My name is Mark Podrabinnik. I am currently studying to be a full stack developer. I am located in Denver, Colorado.
                While I am studyig all aspects of code, my strengths include: HTML, CSS, React, JavaScript, NodeJS, ExpressJS & SQL. 
                If you are interested in more check out the Github link below!
                </p>
            <br />
            <p className='text-x1'>
                Climbing is another big passion of mine. I started climbing at the age of 12 and haven't stopped! If you are interested in more check out the Instagram link below!
            </p>
        </div>
    </div>
  )
}

export default About
