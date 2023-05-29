import React, { useState } from "react";
import styles from "./style.module.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Favorites from "../../components/Favorites";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import LastProducts from "../../components/LastProducts";
import Datacontext from "../../context/Datacontext";

export default function Home() {
  const [user, setUser] = useState({ name: "guest", id: null, image: "" });
  return (
    <div>
      <Datacontext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Hero />
        <Favorites />
        <LastProducts />
        <Form />
        <Footer />
      </Datacontext.Provider>
    </div>
  );
}
