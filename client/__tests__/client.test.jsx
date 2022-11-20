import * as React from "react";
import {createRoot } from "react-dom/client";
import {FrontPage} from "../frontPage";
import {act} from "react-dom/test-utils";
import {BrowserRouter, MemoryRouter} from "react-router-dom";

describe("client test suite", () =>{

    it("frontpage gets rendered", () =>{
        const element = document.createElement("div");

        const root = createRoot(element);

        act (() => {
            root.render(<BrowserRouter><FrontPage/></BrowserRouter>)
        });

        expect(element.querySelector("h2")?.innerHTML).toEqual("hello!")
        expect(element.innerHTML).toMatchSnapshot();
    });
});