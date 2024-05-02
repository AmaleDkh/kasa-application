// React elements
import { createBrowserRouter } from "react-router-dom";

// Components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accommodation from "./pages/Accommodation/Accommodation";
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
    path: "/accommodations/:id",
    element: <Accommodation />,
    errorElement: <Error />,
  },
  {
    path: "/404",
    element: <Error />,
  },
]);

export default router;
