import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import RouteNotFound from "./components/Pages/RouteNotFound.jsx";
import Contacto from "./components/Pages/Contacto.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="w-full pb-5 bg-green-50  m-0 flex flex-col items-center">
          <Header />

          <Greeting
            greeting="Hola!!!"
            contentIndex="estos son nuestro productos"
            url="../public/img/Greeting/greeting_Image.png"
            alt="Greeting"
          />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/not-found" element={<RouteNotFound />} />
            <Route path="*" element={<Navigate to={"/not-found"} />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
