import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./site/frontPage";
import { Login } from "./header/login";
import { Register } from "./header/register";
import { Menu } from "./site/menu";
import { Header } from "./header/header";
import {fetchJSON} from "./useLoader";

const element = document.getElementById("app");

const root = createRoot(element);

function Application() {
    const menuApi = {
        async listMenu(){
            return fetchJSON("api/general/menu");
        }
    }
    const userApi = {
        async returnUser(){
            return fetchJSON("api/general/users");
        },

        async registerUser(user){
            fetch("/api/general/users", {
                method: "post",
                body: JSON.stringify(user),
                headers:{
                    "content-type": "application/json",
                },
            });
        }
    }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage userApi={userApi}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register userApi={userApi}/>} />
        <Route path="/menu" element={<Menu menuApi={menuApi}/>} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Application />);
