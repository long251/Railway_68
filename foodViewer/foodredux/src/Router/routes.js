import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import FoodPage from "../Page/FoodPage";
import CustomerPage from "../Page/CustomerPage";
import ErrorPage from "../Page/ErrorPage";
import LoginPage from "../Page/LoginPage";
import SignUpPage from "../Page/SignUpPage";
import FoodType from "../Page/FoodType";
import FoodDetail from "../Page/FoodDetail";
import GioHangPage from "../Page/GioHangPage";
import OrderSuccessful from "../Page/OrderSuccessful";
import HuyDon from "../Page/HuyDon";
export let routes = (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/home" element={<HomePage />}></Route>
    <Route path="/food" element={<FoodPage />}></Route>
    <Route path="/customer" element={<CustomerPage />}></Route>

    <Route path="/foodType/:id" element={<FoodType />}></Route>
    <Route path="/foodDetail/:id" element={<FoodDetail />}></Route>

    <Route path="/gioHang" element={<GioHangPage />}></Route>
    <Route path="/ordersuccessful" element={<OrderSuccessful />}></Route>
    <Route path="/huyDon" element={<HuyDon />}></Route>

    <Route path="*" element={<ErrorPage />}></Route>

    {/* <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/signUp" element={<SignUpPage />}></Route> */}
  </Routes>
);
