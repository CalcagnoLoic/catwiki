import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeDetails } from "./pages/HomeDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/breed" element={<HomeDetails />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
