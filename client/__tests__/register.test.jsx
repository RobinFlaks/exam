import React from "react";
import { createRoot } from "react-dom/client";
import { Register } from "../banner/register";
import { act, Simulate } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("", () => {
  it("shows form", async () => {
    const element = document.createElement("div");
    const root = createRoot(element);

    await act(async () => {
      root.render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      );
    });

    expect(element.innerHTML).toMatchSnapshot();
  });

  it("adds user", async () => {
    const registerUser = jest.fn();

    const element = document.createElement("div");
    const root = createRoot(element);

    await act(() => {
      root.render(
        <MemoryRouter>
          <Register userApi={{ registerUser }} />
        </MemoryRouter>
      );
    });

    act(() =>
      Simulate.change(element.querySelector("form input"), {
        target: { value: "username" },
      })
    );

    act(() => Simulate.submit(element.querySelector("form")));

    expect(registerUser).toBeCalledWith({
      username: "username",
      password: "",
    });
  });
});
