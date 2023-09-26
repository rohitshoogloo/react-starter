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

//not found
import NotFoundPage from "../common/Error/404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />} errorElement={<NotFoundPage />} >
      <Route element={<Home />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ContactPage />} path="/contact" />
    </Route>
  )
);
