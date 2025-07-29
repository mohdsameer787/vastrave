import Userlayout from "./layout/Userlayout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./layout/product/Product";
import ProductListing from "./layout/product/Productpage";
import Signup from "./components/Signup";
import Login from "./components/utilities/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>} />
          <Route path="product/:id" element={<Product />} />
          <Route
            path="productlisting/:categorie"
            element={<ProductListing/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
