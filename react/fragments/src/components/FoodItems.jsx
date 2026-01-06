import React from 'react'
import Item from './Item'

const FoodItems = ({food}) => {
  return (
    <>
      <ul className="list-group">
         {food.map((item => (
          <Item key={item} foodItem={item}/>
         )))}
        </ul> 
    </>
  )
}

export default FoodItems