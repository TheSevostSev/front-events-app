import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePAge";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default Router;
