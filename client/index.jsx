import * as React from "react";
import {createRoot} from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./frontPage";
import {Login} from "./login";

const element = document.getElementById("app");

const root = createRoot(element);


function Application(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </HashRouter>
    )
}

root.render(
        <Application/>
);
