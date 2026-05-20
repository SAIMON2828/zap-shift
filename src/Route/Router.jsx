import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayOut from "../LayOuts/AuthLayOut";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import ForgetPassword from "../Pages/Auth/ForgetPassword/ForgetPassword";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path:'rider',
          element: <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>

        },
        {
          path:'send-parcel',
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>,
          loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
        },
        {
          path:'coverage',
          Component: Coverage,
          loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
        }
    ]
  },
  {
    path:'/',
    Component: AuthLayOut,
    children:[
      {
        path:'login',
        Component: Login,
      },
      {
        path:'register',
        Component: Register,
      },
      {
        path:'forgetPassword',
        Component: ForgetPassword,
      },
    ]
  }
]);