

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
   
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
   
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
   
  },
]);


function App() {

  
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
