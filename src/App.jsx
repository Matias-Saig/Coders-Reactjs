import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Greeting from "./components/ItemList/Greeting.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import RouteNotFound from "./components/Pages/RouteNotFound.jsx";
import Contacto from "./components/Pages/Contacto.jsx";
import Category from "./components/Pages/Category.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Header />

        <section className="container bg-green-50 py-5 flex flex-col items-center">
          
          <Greeting
            greeting="Hola!!!"
            content="estos son nuestro productos destacados"
            url="src/components/ItemList/greeting_Image.png"
            alt="Greeting"
          />

          <ItemListContainer />
          
        </section>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/not-found" element={<RouteNotFound />} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
