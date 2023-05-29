import React from "react";
import styles from "./style.module.css";
import ItemCard from "../ItemCard";
import items from "../../assets/favorites.json";
import { useContext } from "react";
import Datacontext from "../../context/Datacontext";

export default function Favorites() {
  const connectedUser = useContext(Datacontext);
  {
    /* TODO  - remove if disconnected and show please check in message*/
  }
  return (
    <div className={styles.main}>
      <h2>your favorite:</h2>
      <div className={styles.itemList}>
        {connectedUser.user.name === "guest"
          ? "Please log in to your account to see your favorite items"
          : items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
