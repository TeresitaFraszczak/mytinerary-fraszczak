import { createBrowserRouter } from "react-router-dom"
import HeaderLayout from "./layouts/HeaderLayout"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import NotFound from "./pages/NotFound"
import CityDetails from "./pages/CityDetails"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        { path: "/cities", element: <Cities /> },
        { path: "/*", element: <NotFound />},
        { path: "/city/:city_id", elements: <CityDetails />}
    ],
  },
  
]);

export default router;
