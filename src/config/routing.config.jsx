import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import AboutUsPage from "../pages/about-us/about-us.page";
import AllProductGridPage from "../pages/products/all-products.page";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/products" element={<AllProductGridPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
