import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <div>
            <header style={{
                padding: "1rem",
                borderBottom: "1px solid gray"
            }}>
                <h2>EduSync Platform</h2>
                <button
                    onClick={handleLogout}
                >Logout</button>
            </header>

            <main style={{
                padding: "1rem"
            }}>
                <Outlet />
            </main>
        </div>
    );
}