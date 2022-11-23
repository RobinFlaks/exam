import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./site/frontPage";
import { Login } from "./banner/login";
import { Register } from "./banner/register";
import { Menu } from "./site/menu";
import { Banner } from "./banner/banner";
import { fetchJSON } from "./useLoader";
import { Logout } from "./banner/logout";

const element = document.getElementById("app");

const root = createRoot(element);

function Application() {
  const menuApi = {
    async listMenu() {
      return fetchJSON("api/menu");
    },
  };
  const userApi = {
    async returnUser() {
      return fetchJSON("api/users");
    },

    async registerUser(user) {
      await fetch("/api/users", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      });
    },

    async login(user) {
      await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      });
    },

    async logout() {
      await fetch("/api/users/logout", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
      });
    },
  };
  return (
    <BrowserRouter>
      <Banner userApi={userApi} />
      <Routes>
        <Route path="/" element={<FrontPage userApi={userApi} />} />
        <Route path="/login" element={<Login userApi={userApi} />} />
        <Route path="/register" element={<Register userApi={userApi} />} />
        <Route path="/menu" element={<Menu menuApi={menuApi} />} />
        <Route path="/logout" element={<Logout userApi={userApi} />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Application />);
