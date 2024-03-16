import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import RootLayout from './layout/RootLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
       },
      {
        path: "/about",
        element: <AboutPage />,
       },
       {
        path: "/services",
        element: <ServicesPage />,
       },
       {
        path: "/blog",
        element: <BlogPage />,
       },
       {
        path: "/contact",
        element: <ContactPage />,
       },
       {
        path: "/:id",
        element: <ProductDetailPage />,
       },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={myRouter}/>

  </React.StrictMode>,
)

