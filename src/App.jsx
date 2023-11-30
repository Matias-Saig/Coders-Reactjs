import React from "react";
import Header from "./components/Header/Header";
import Greeting from "./components/ItemList/Greeting.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <>
      <Header />

      <section className="container bg-green-50 py-5  h-screen flex flex-col items-center">
      <Greeting
        greeting="Hola!!!"
        content="estos son nuestro productos destacados"
        url="src/components/ItemList/greeting_Image.png"
        alt="Greeting"
      />
      <ItemListContainer/>

      </section>
    </>
  );
}

export default App;
