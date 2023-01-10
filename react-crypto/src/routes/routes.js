import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favourite from "../pages/Favourite/Favourite";
import MainRoot from "../pages/MainRoot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "favourite",
                element: <Favourite />
            }
        ]
    },

])