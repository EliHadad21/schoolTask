import React from 'react'
import styles from './style.module.css'


const ItemCard = ({ item }) => {
   return (
      <div className={styles.itemCard}>
         <img src={item.imageSrc} alt={item.name} />
         <h3>{item.name}</h3>
         <p>${item.price}</p>
      </div>
   );
};


export default ItemCard
