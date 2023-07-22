import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { FormHealthDataPage } from "./FormHealthData/views/FormHealthDataPage";
import { ViewHealthDataPage } from "./ViewHealthData/views/ViewHealthDataPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <FormHealthDataPage />,
    },
    {
        path: "/view-health-data",
        element: <ViewHealthDataPage />,
    }
]);

export const RoutesComponent = () => {
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
};
