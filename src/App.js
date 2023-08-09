

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";




function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (<HomePage/>),
  //   },
  //   {
  //     path: "/about",
  //     element: <div>Hello world!</div>,
  //   },
    
    
  // ]);
  
  return (
    <div className="App">
      <HomePage></HomePage>
    
   {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
