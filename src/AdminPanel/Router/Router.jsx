import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "../Components/charts";
import Main from "../Components/Main";
import App from "../../App";
import Tables from "../Components/Tables";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
