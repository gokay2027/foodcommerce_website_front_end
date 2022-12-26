
import { Routes, Route, Outlet, Link, withRouter, useNavigate } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import RegisterPage from "./Screens/RegisterPage";
import RestaurantsPage from "./Screens/RestaurantsPage";
import MainPage from "./Screens/MainPage";
import CategoriesPage from "./Screens/CategoriesPage"
import ProfilePage from "./Screens/ProfilePage";
import CartPage from "./Screens/CartPage";
import React, { useState } from 'react';
import "./Styles/componentStyle.css"


import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantPage from "./Screens/RestaurantPage";




function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="restaurantspage" element={<RestaurantsPage />} />
        <Route path="mainpage" element={<MainPage></MainPage>}></Route>
        <Route path="categoriespage" element={<CategoriesPage></CategoriesPage>}></Route>
        <Route path="restaurantpage" element={<RestaurantPage></RestaurantPage>}></Route>
        <Route path="profilepage" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="cartpage" element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
  );
}export default App;