import React from "react";
import Loadable from "react-loadable";
import { Route, Routes } from "react-router-dom";
import LoadingComponent from "../Component/LoadingComponent";


const AsyncHome = Loadable({
    loader: () => import("../Pages/Home"),
    loading: LoadingComponent,
});

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<AsyncHome/>} />
        </Routes>
    );
};
  
export default Router;
  