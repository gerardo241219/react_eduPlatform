import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "../features/auth/pages/LoginPage";
import StudentsPage from "../features/students/pages/StudentsPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}