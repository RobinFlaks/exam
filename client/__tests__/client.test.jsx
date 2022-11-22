import * as React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import {FrontPage} from "../site/frontPage";
import {BrowserRouter} from "react-router-dom";

describe("client test suite", () => {
  it("frontpage is served", () => {
    const element = document.createElement("div");

    const root = createRoot(element);

    act(() => {
      root.render(<BrowserRouter><FrontPage/></BrowserRouter>);
    });

    expect(element.querySelector("div")?.innerHTML).toEqual(
        "Loading..."
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
