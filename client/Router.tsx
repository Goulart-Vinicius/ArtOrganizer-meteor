import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <h1>Home</h1> } />
            </Routes>
        </BrowserRouter>
    )
}
