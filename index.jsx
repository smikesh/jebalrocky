import {createRoot} from "react-dom/client"
import App from './App';
import "./style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ExpericeArea from "./components/ExpericeArea";
import WorkTrades from "./components/WorkTrades";
import Career from "./components/Career";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
          path:'/home',
          element:<Home />
        },
        {
          path:'/about',
          element:<Home />
        },
        {
          path:'/services',
          element:<Home />
        },
        {
          path:'/portfolio',
          element:<Home />
        },
        {
          path:'/areas-of-expertise',
          element:<ExpericeArea />
        },
        {
          path:'/Trades',
          element:<WorkTrades />
        },
        {
          path:'/careers',
          element:<Career />
        }, 


        
        {
          path:'/contact',
          element:<Contact />
      },
      ]
    },
    
  ]);

const root = createRoot(document.querySelector('#root'));

root.render(
    
    <RouterProvider router={router} />
)