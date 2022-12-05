import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./styles/global";

import { LoginPage } from "./components/pages/Login";
import { RegisterPage } from "./components/pages/Register";
import { MainPage } from "./components/pages/Main";

export const App = () => {

  const [theme, setTheme] = useState('dark');

  return (
    <div className="App">
      <GlobalStyles theme={theme} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/app" element={<MainPage />} />
      </Routes>
    </div>
  );
}
