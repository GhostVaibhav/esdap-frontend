import { createContext, useContext, useState } from "react"
import { RenderMenu, RenderRoutes } from "../components/RenderNavigation";
import { getSHA256Hash } from "boring-webcrypto-sha256";
import Footer from "../components/Footer";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: false })

    const login = async (username, password) => {
        try {            
            let hash = await getSHA256Hash(username + "@" + password);
            
            const response = await fetch("http://localhost:4000/esdap/v1/login/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ credentials: hash }),
            });
            
            var data = await response.json();
            data = JSON.stringify(data)
            data = JSON.parse(data)

            if (data.login === true) {
                setUser({ name: username, isAuthenticated: true })
                console.log("Authenticated the user")
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    const logout = () => {
        setUser({ ...user, isAuthenticated: false })
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <div className="min-h-screen dark:bg-gray-900"
                style={{ fontFamily: "Poppins" }}>
                <RenderMenu />
                <RenderRoutes />
                <Footer />
            </div>
        </AuthContext.Provider>
    )
}
