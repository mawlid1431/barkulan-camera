import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//pages will start here 

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search'


// Components willl be here 
import Header from './components/Header';
import Footer from './components/Footer';


// Layouts will be here 

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />


    </div>

  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <Home /> },
      {path: '/Products/:id', element: <Products /> },
      {path: '/Product/:id', element: <ProductDetails /> },
      {path: '/Search', element: <Search /> },], }]);
const App = () => {
  return <div>
    
    
    
  <RouterProvider  router={router}/>




  </div>;
};

export default App;
