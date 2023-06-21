import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeDetails } from "./pages/HomeDetails";
import { MostResearched } from "./pages/MostResearched";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/catwiki" element={<Home />}></Route>
                <Route path="/catwiki/breed" element={<HomeDetails />}></Route>
                <Route path="/catwiki/most-researched-breeds" element={<MostResearched />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
