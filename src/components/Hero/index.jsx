import React, { useState } from "react";
import styles from "./style.module.css";
import { useContext } from "react";
import Datacontext from "../../context/Datacontext";

export default function Hero() {
  const connectedUser = useContext(Datacontext);
  return (
    <div className={styles.hero}>
      <h1>my store</h1>
      {/* TODO */}
      <p>
        nice to see you{" "}
        {connectedUser.user.name !== "guest"
          ? connectedUser.user.name
          : "guest"}{" "}
        <br /> what do you want to buy?{" "}
      </p>
      <button>click here</button>
    </div>
  );
}
