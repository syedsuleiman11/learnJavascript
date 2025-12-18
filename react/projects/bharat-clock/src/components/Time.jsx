import React from 'react'

const Time = () => {
    const date = new Date();
  return (
    <>
    <p className='lead'>This is Current Date & Time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
    </>
  )
}

export default Time