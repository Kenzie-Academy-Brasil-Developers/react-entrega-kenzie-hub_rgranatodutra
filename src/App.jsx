import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./styles/global";

import { LoginPage } from "./components/pages/Login";
import { RegisterPage } from "./components/pages/Register";
import { MainPage } from "./components/pages/Main";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthPage } from "./components/pages/Auth";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles theme="dark" />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/app" element={<MainPage />} />
      </Routes>
      <ToastContainer
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        theme="light"
        pauseOnFocusLoss={false}
      />
    </div>
  );
};
