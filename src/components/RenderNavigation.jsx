import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { nav } from "./Navigation";

export const RenderRoutes = () => {
    const { user } = AuthData();

    return (
        <Routes>
            {nav.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else return false
            })}
        </Routes>
    )
}

export const RenderMenu = () => {
    const { user, logout } = AuthData()
    const isActiveLink = (path) => {
        return window.location.pathname === path;
    };
    const MenuItem = ({ r }) => {
        return (
            <Link to={r.path}>
                <span
                    className={`font-medium `}
                    style={{
                        color: isActiveLink(r.path)
                            ? "rgb(59 130 246)"
                            : "rgb(156 163 175)",
                    }}
                >
                    {r.name}
                </span>
            </Link>
        )
    }
    return (
        <header
            className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 px-20 "
            style={{ backgroundColor: "rgb(13, 18, 26)" }}
        >
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <Link to="/">
                    <span
                        className="flex-none text-xl font-semibold dark:text-white"
                    >
                        ESDAP
                    </span>
                </Link>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 ">
                    {nav.map((r, i) => {
                        if (!r.isPrivate && r.isMenu) {
                            return (
                                <MenuItem key={i} r={r} />
                            )
                        } else if (user.isAuthenticated && r.isMenu) {
                            return (
                                <MenuItem key={i} r={r} />
                            )
                        } else return false
                    })}

                    {user.isAuthenticated ?
                        <Link to={'#'} onClick={logout}>
                            <span
                                className={`font-medium `}
                                style={{
                                    color: isActiveLink('/login')
                                        ? "rgb(59 130 246)"
                                        : "rgb(156 163 175)",
                                }}
                            >
                                Logout
                            </span>
                        </Link>
                        :
                        <Link to={'/login'}>
                            <span
                                className={`font-medium `}
                                style={{
                                    color: isActiveLink('/login')
                                        ? "rgb(59 130 246)"
                                        : "rgb(156 163 175)",
                                }}
                            >
                                Login
                            </span>
                        </Link>}
                </div>
            </nav>
        </header>
    )
}