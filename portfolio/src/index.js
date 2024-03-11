import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service';
import Work from './Components/Work';
import Resume from './Components/Resume';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

const router=createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    errorElement:<h1>404</h1>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"service",
        element:<Service/>
      },
      {
        path:"work",
        element:<Work/>
      },
      {
        path:"resume",
        element:<Resume/>
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
