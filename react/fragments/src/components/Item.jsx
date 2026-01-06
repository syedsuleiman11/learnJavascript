import React from 'react'
import styles from './Item.module.css'

const Item = ({foodItem}) => {
  return (
    <>
    <li className={`${styles['foodItem']} list-group-item`}><span className={`${styles['food-span']}`}>{foodItem}</span></li> 
    </>
  )
}

export default Item