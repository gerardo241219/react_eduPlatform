import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "../features/auth/pages/LoginPage";
import StudentsPage from "../features/students/pages/StudentsPage";

import ProtectedRoute from "./components/ProtectedRoute";

import MainLayout from "../shared/layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/students" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
          <Route
            path="/students"
            element={<StudentsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}