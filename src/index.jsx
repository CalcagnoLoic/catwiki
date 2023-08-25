import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeDetails } from "./pages/HomeDetails";
import { MostResearched } from "./pages/MostResearched";
import { Error } from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                    path="/catwiki/breed/:id"
                    element={<HomeDetails />}
                ></Route>
                <Route
                    path="/catwiki/most-researched-breeds"
                    element={<MostResearched />}
                ></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
