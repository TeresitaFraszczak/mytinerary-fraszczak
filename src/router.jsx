import { createBrowserRouter } from "react-router-dom"
import HeaderLayout from "./layouts/HeaderLayout"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cities from "./pages/Cities"
import CityDetails from "./pages/CityDetails"
import NotFound from "./pages/NotFound"
import Itineraries from "./pages/Itineraries"
import FormSignUp from "./pages/FormSignUp"
import FormSignIn from "./pages/FormSignIn"
import FormSignUptwo from "./pages/FormSignUptwo"
import FormSignIntwo from "./pages/FormSignIntwo"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        { path: "/signin", element: <SignIn />},
        { path: "/signup", element: <SignUp />},
        { path: "/cities", element: <Cities /> },        
        { path: "/city/:city_id", element: <CityDetails />},
        { path: "/auth/signup", element: <FormSignUp /> },
        { path: "/auth/signin", element: <FormSignIn /> },
        { path: "/itineraries", element: <Itineraries /> },
        { path: "/auth/signuptwo", element: <FormSignUptwo /> },
        { path: "/auth/signintwo", element: <FormSignIntwo /> },
        { path: "/*", element: <NotFound />},
    ],
  },
  
]);

export default router;
