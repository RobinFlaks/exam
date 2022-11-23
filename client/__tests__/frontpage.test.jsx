import * as React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { FrontPage } from "../site/frontPage";
import { MemoryRouter } from "react-router-dom";

describe("frontpage test suite", () => {
  it("frontpage is served", () => {
    const element = document.createElement("div");

    const root = createRoot(element);

    act(() => {
      root.render(
        <MemoryRouter>
          <FrontPage />
        </MemoryRouter>
      );
    });

    expect(element.querySelector("div")?.innerHTML).toEqual("Loading...");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
