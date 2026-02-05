
import Advantage from "./components/Advantage/Advantage";
import Group from "./components/Group 213/Group";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import FeaturesArmchair from "./components/FeaturesArmchair/FeaturesArmchair";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart"

function App() {
  return (
      <div className="App">
          <BrowserRouter>
           
            <Routes>
               <Route path="/" element={<Product/>} />
               <Route path="/cart" element={<Cart/>} />
            </Routes>
           
          </BrowserRouter>

</div>
  );
}

export default App;
