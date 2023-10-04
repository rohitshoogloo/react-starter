import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//layout
import MainLayout from "../layout/MainLayout";

//Pages
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import CartPage from "../pages/Cart";
import ProductPage from "../pages/Product";

//not found
import NotFoundPage from "../common/Error/404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />} errorElement={<NotFoundPage />} >
      <Route element={<Home />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<CartPage />} path="/cart" />
      <Route element={<ProductPage />} path="/product/:id" />
    </Route>
  )
);
