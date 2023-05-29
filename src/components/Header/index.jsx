import React from "react";
import styles from "./style.module.css";
import { useContext } from "react";
import Datacontext from "../../context/Datacontext";

export default function Header() {
  const connectedUser = useContext(Datacontext);
  return (
    <header className={styles.header}>
      <div className={styles.user}>
        {/* TODO */}
        {connectedUser.user.name !== "guest"
          ? connectedUser.user.name
          : "guest"}
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <a href="#">home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">about</a>{" "}
          </li>
        </ul>
        {/* 
            
            sign in or sign out button - with functionality 
            -  sign in function:
            onClick  = put some user { name : 'avi', id: '88772653', img : '' } in the context
            -  sign out function:
            onClick  = delete this user from the context
            
            */}
        <button
          onClick={() => {
            if (connectedUser.user.name === "guest") {
              connectedUser.setUser({
                name: "Eli Hadad",
                id: 5443988,
                image: "",
              });
            } else {
              connectedUser.setUser({ name: "guest", id: null, image: "" });
            }
          }}
        >
          {connectedUser.user.name === "guest" ? "sign in" : "signout"}
        </button>
      </nav>
    </header>
  );
}
