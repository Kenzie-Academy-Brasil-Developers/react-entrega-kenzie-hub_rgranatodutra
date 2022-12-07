import { Route, Routes } from "react-router-dom";

import { AuthPage } from "../../pages/Auth";
import { LoginPage } from "../../pages/Login";
import { RegisterPage } from "../../pages/Register";
import { MainPage } from "../../pages/Main";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/app" element={<MainPage />} />
        </Routes>
    );
};
