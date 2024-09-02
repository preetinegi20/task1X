import ReactDOM from "react-dom/client";
import Layout from "./component/layout/Layout";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Property from "./component/property/Property";
import Contact from "./component/contact/Contact";
import Blog from "./component/blog/Blog";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./component/signIn/Signin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="property" element={<Property />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<Signin />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
