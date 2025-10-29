import {Meteor} from 'meteor/meteor';
import React from 'react';
import {createRoot} from 'react-dom/client';
// import {Router} from './Router';
import { BrowserRouter, Routes, Route } from "react-router";

Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container!);
    root.render(   <BrowserRouter>
        <Routes>
            <Route path="/" element={ <h1>Home</h1> } />
        </Routes>
    </BrowserRouter>);
});
