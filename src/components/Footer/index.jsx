import React, { useContext } from "react";
import styles from "./style.module.css";
import Datacontext from "../../context/Datacontext";

export default function Footer() {
  const connectedUser = useContext(Datacontext);
  return (
    <footer className={styles.footer}>
      {/* TODO */}
      <p>
        All rights reserved -{" "}
        {connectedUser.user.name !== "guest"
          ? connectedUser.user.name
          : "guest"}{" "}
        is connected
      </p>
    </footer>
  );
}
