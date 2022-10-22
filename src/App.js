import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/products/new" element={<NewProduct />} />
          <Route exact path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
