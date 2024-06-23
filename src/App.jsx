import React, { useState } from 'react';
import { UserContext } from './components/context/Context';
import { product, product4 } from '../data';
import { product2,product3 } from '../data';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ComponentLayout from './components/Layout/ComponentLayout';
import ProductPage from './components/Page/ProductPage/ProductPage';
import Hader from './components/Header/Hader';
import Like from './components/Page/like/Like';
import Cart from './components/Page/cart/Cart';
import PageNotFound from './components/Page/PageNotFound/PageNotFound';
import Category from './components/Page/Category/Category';

const App = () => {
  const [card,setCard] = useState([]);
  

  const router= createBrowserRouter([
    {
      path:"/",
      element:<ComponentLayout />,
      children:[
        {
          index:true,
          element:<Hader />
        },
        {
          path:"/ProductPage",
          element:<ProductPage card={card}/>
        },
        {
          path:"/like",
          element:<Like/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/category",
          element:<Category/>
        },
        {
          path:"*",
          element:<PageNotFound/> 
        }
      ]
    }
  ])
  return (
    <UserContext.Provider value={{product,product2,product3,product4, setCard,}}>
      <RouterProvider router={router}/>
      {/* <Hader/> */}
      {/* <div className="flex">
        <Cards/>
      </div> */}
    </UserContext.Provider>
  );
};

export default App;
