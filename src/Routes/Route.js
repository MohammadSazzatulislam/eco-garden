import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import ProductsDetails from "../Component/Products/ProductsDetails/ProductsDetails";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        },
        {
            path: '/details/:id',
            loader: ({params}) => fetch(`https://eco-garden-server.vercel.app/products/${params.id}`),
            element: <ProductsDetails></ProductsDetails>
      }
    ],
  },
]);
