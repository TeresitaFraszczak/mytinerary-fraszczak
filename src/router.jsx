import { createBrowserRouter } from "react-router-dom"
import HeaderLayout from "./layouts/HeaderLayout"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import CityDetails from "./pages/CityDetails"
import NotFound from "./pages/NotFound"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        { path: "/cities", element: <Cities /> },        
        { path: "/city/:city_id", elements: <CityDetails />},
        { path: "/*", element: <NotFound />},
    ],
  },
  
]);

export default router;
