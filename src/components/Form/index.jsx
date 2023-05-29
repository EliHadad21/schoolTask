import React from "react";
import styles from "./style.module.css";
import { useState, useContext } from "react";
import Datacontext from "../../context/Datacontext";

export default function Form() {
  const connectedUser = useContext(Datacontext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    connectedUser.setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  // BONUS !!!
  // TODO- change name by submit
  // TODO- form not shown if not connected
  return (
    <div className={styles.form}>
      {connectedUser.user.name !== "guest" && (
        <form onSubmit={handleSubmit}>
          <h4>change your details</h4>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            placeholder="your name..."
          />
          <button type="submit"> change now!</button>
        </form>
      )}
    </div>
  );
}
