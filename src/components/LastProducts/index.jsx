import React from 'react'
import styles from './style.module.css'
import ItemCard from '../ItemCard'
import items from '../../assets/recomanded.json'

export default function LastProducts() {

   return (
      <div className={styles.main}>
         <h2>last products in our store:</h2>
         <div className={styles.itemList}>
            {items.map((item) => (
               <ItemCard key={item.id} item={item} />
            ))}
         </div>
      </div>
   )
}
