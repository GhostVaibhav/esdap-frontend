import React from 'react'

function HomeCard() {
  return (
    <div className='text-white p-16 px-36 h-full flex-grow flex flex-col justify-center animate__animated animate__fadeIn'>
      <div className='pb-8'>
        <div className='text-5xl pb-1'><b className='text-slate-400'>E</b>ncrypted <b className='text-slate-400'>S</b>tudent <b className='text-slate-400'>D</b>ata <b className='text-slate-400'>A</b>nalytics <b className='text-slate-400'>P</b>latform</div>
        <div className='font-light text-sm'>(Using Homomorphic Encryption)</div>
      </div>
      <div className='font-extralight' style={{ fontFamily: "Arial" }}>
        In today's educational landscape, the management of student data stands as a critical
        concern, necessitating careful attention from educational institutions. The Encrypted
        Student Data Analytics Platform (ESDAP) offers a groundbreaking solution to the
        diverse challenges surrounding data analysis, privacy, and security within educational
        settings. At its core, ESDAP leverages homomorphic encryption, particularly the CKKS
        scheme type, enabling computations on encrypted data without decryption. This
        innovative approach ensures the preservation of privacy and confidentiality throughout
        the data analytics process, marking a significant paradigm shift in educational data
        management. By facilitating secure and privacy-preserving data analysis, ESDAP
        promotes transparency, accountability, and responsible utilization of student data,
        aiming to yield positive outcomes for all stakeholders involved in the educational
        domain.
      </div>
    </div>
  )
}

export default HomeCard
