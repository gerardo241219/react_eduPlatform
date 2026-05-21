import {
    Users,
    LogOut,
} from "lucide-react";

import {
    NavLink,
} from "react-router-dom";

export default function Sidebar() {
    const handleLogout = () => {
        localStorage.removeItem(
            "token"
        );

        window.location.href =
            "/login";
    };

    return (
        <aside
            className="
        w-64
        bg-gray-900
        text-white
        flex
        flex-col
        p-4
      "
        >
            <h1
                className="
          text-2xl
          font-bold
          mb-8
        "
            >
                EduSync
            </h1>

            <nav className="flex flex-col gap-2">
                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        `
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-lg
            transition
            ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-gray-800"
                        }
          `
                    }
                >
                    <Users size={18} />

                    Students
                </NavLink>
            </nav>

            <button
                onClick={handleLogout}
                className="
          mt-auto
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          hover:bg-red-600
          transition
        "
            >
                <LogOut size={18} />

                Logout
            </button>
        </aside>
    );
}