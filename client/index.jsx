import * as React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {FrontPage} from "./frontPage";

const element = document.getElementById("app");

const root = createRoot(element);

function Application(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

root.render(<Application/>);
