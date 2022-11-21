import * as React from "react";
import {createRoot } from "react-dom/client";
import {act} from "react-dom/test-utils";
import {Login} from "../header/login";

describe("client test suite", () =>{

    it("frontpage is served", () =>{
        const element = document.createElement("div");

        const root = createRoot(element);

        act (() => {
            root.render(<Login/>)
        });

        expect(element.querySelector("h3")?.innerHTML).toEqual("this is the Login page :D")
        expect(element.innerHTML).toMatchSnapshot();
    });
});