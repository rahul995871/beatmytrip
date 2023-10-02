

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ItenaryPage from "./pages/ItenaryPage";




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage></HomePage>,
   
//   },
//   {
//     path: "/about",
//     element: <AboutPage></AboutPage>,
   
//   },
//   {
//     path: "/contact",
//     element: <ContactPage></ContactPage>,
   
//   },
//   {
//     path: "/itenary",
//     element: <ItenaryPage></ItenaryPage>,
   
//   },
// ]);


function App() {

  
  return (
    <>
      <HashRouter >
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/> 
        <Route path="/about" element={<AboutPage></AboutPage>} /> 
        <Route path="/contact" element={<ContactPage></ContactPage>} /> 
        <Route path="/itenary" element={<ItenaryPage></ItenaryPage>} /> 
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
