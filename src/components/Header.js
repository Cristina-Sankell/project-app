import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    let authToken = sessionStorage.getItem("Auth Token")

    useEffect(() => {
            
        if (authToken) {
            setIsLoggedIn(true)
        }
        if (!authToken) {
            setIsLoggedIn(false)
        }
    }, [authToken])

   let navigate = useNavigate();

    const handleLogout = () => {
         sessionStorage.removeItem("Auth Token");
         navigate("/login")
    }

    return (
        <div className="header">
            <h1>Header</h1>
            {isLoggedIn ? <button onClick={handleLogout}>Log out</button> : null }
        </div>
    );
};