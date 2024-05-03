import React from 'react'

function AboutCard() {
  return (
    <div className='text-white p-16 px-64 h-full flex-grow flex flex-col justify-center animate__animated animate__fadeIn'>
      <div className='pb-8'>
        <div className='text-4xl font-semibold'>About</div>
      </div>
      <div className='font-thin text-lg ' style={{ fontFamily: "Arial" }}>
      The project aims to revolutionize educational data management through ESDAP, leveraging homomorphic encryption for secure data analysis. It involves examining operational dynamics, collaborating with analytics firms, and developing a user-friendly interface. The goal is to ensure data privacy, empower informed decision-making, and enhance educational outcomes through innovative data management practices.
      </div>
    </div>
  )
}

export default AboutCard
