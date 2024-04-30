import React from 'react'

function AboutCard() {
  return (
    <div className='text-white p-16 px-36 h-full flex-grow flex flex-col justify-center animate__animated animate__fadeIn'>
      <div className='pb-8'>
        <div className='text-5xl'>About</div>
      </div>
      <div className='font-extralight' style={{ fontFamily: "Arial" }}>
        The scope of the project encompasses a comprehensive examination of the operational
        dynamics within educational institutions, particularly focusing on the intricacies of data
        flow and encryption logic. This includes an in-depth exploration of the workings of
        schools, as well as collaboration with a third-party analytics company to gain insights
        into data manipulation practices. The project aims to elucidate the entire data flow
        process, from data collection to analysis, while emphasizing the importance of
        encryption in safeguarding sensitive information. Additionally, the project will involve
        the development of a frontend interface to provide a user-friendly portrayal of the data
        analytics process, enhancing accessibility and understanding for stakeholders involved.
      </div>
    </div>
  )
}

export default AboutCard
