import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    return (
        <div
            className="
        min-h-screen
        flex
        bg-gray-100
      "
        >
            <Sidebar />

            <div className="flex-1">
                <header
                    className="
            h-16
            bg-white
            border-b
            px-6
            flex
            items-center
          "
                >
                    <h2
                        className="
              text-xl
              font-semibold
            "
                    >
                        Dashboard
                    </h2>
                </header>

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}