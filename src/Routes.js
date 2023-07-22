import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { FormHealthDataPage } from "./FormHealthData/views/FormHealthDataPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <FormHealthDataPage />,
    },
]);

export const RoutesComponent = () => {
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
};
