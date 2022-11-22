import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./site/frontPage";
import { Login } from "./header/login";
import { Register } from "./header/register";
import { Menu } from "./site/menu";
import { Header } from "./header/header";

const element = document.getElementById("app");

const root = createRoot(element);

function Application() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Application />);
