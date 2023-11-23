import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <h1> if we want something to be the same we can have some components and elements here too </h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />  
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} /> {/* Page Not Found */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
