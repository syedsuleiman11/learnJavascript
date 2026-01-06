import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems'
import EmptyMsg from './components/EmptyMsg'
import './App.css';

const App = () => {

  let foodItems = ['Red Meat','Egg','Chicken','Fish','Milk','Dal','Paneer'];

  return (
    <>
        <h1 className='food-h1'>Healthy Foods</h1>
        <EmptyMsg food={foodItems}/>
        <FoodItems food={foodItems}/> 
    </>
  )
}

export default App