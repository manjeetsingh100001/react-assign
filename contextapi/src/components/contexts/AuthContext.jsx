import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [IsAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    // prepping for user log in
    const data = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };
    const toggleAuth = () => {
        // if user is logged in
        if (IsAuth) {
            setToken(null);
            setIsAuth(false);
            return;
        }

        // if user is not logged in
        fetch("https://reqres.in/api/login", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setIsAuth(true);
                setToken(data.token);
            });
    }

    return <AuthContext.Provider value={{ IsAuth, toggleAuth, token }}>{children}</ AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }