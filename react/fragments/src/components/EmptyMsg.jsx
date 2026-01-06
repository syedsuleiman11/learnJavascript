import React from 'react'

const EmptyMsg = ({food}) => {
  return (
   <>
    {food.length === 0 ? <h5>I am Hungry</h5> : null}
   </>
  )
}

export default EmptyMsg