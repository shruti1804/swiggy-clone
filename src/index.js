import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Help from './Pages/Help';
import Restaurant from './Pages/Restaurant';


const urls = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/cart",
        element: <Cart></Cart>
      },
      {
        path:"/search",
        element: <Search></Search>
      },
      {
        path:"/help",
        element: <Help></Help>
      },
      {
        path:"/restaurant",
        element: <Restaurant></Restaurant>
      },
      {
        path:"*",
        element: <h1>OOPS! Wrong URL.</h1>,
      },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={urls}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
