import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/Login";
import { RegisterPage } from "../../pages/Register";
import { MainPage } from "../../pages/Main";
import { TechsProvider } from "../../contexts/TechContext";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/app" element={<TechsProvider><MainPage /></TechsProvider>} />
        </Routes>
    );
};
