// React elements
import { createBrowserRouter } from "react-router-dom";

// Components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accomodation from "./pages/Accomodation/Accomodation";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/accomodations/:id",
    element: <Accomodation />,
    errorElement: <Error />,
  },
  {
    path: "/404",
    element: <Error />,
  },
]);

export default router;
