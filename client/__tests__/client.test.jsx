import * as React from "react";
import {createRoot } from "react-dom/client";
import {FrontPage} from "../site/frontPage";
import {act} from "react-dom/test-utils";
import {BrowserRouter, HashRouter, MemoryRouter} from "react-router-dom";

describe("client test suite", () =>{

    it("frontpage is served", () =>{
        const element = document.createElement("div");

        const root = createRoot(element);

        act (() => {
            root.render(<HashRouter><FrontPage/></HashRouter>)
        });

        expect(element.querySelector("h2")?.innerHTML).toEqual("hello!")
        expect(element.innerHTML).toMatchSnapshot();
    });
});