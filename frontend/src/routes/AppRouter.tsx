import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import LoginPage from "../features/auth/pages/LoginPage";

import StudentsPage from "../features/students/pages/StudentsPage";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import MainLayout from "../shared/layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Navigate to="/login" />
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* PRIVATE */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/students"
            element={<StudentsPage />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}