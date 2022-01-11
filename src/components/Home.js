import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token")

        if (authToken) {
            navigate("/")
        }

        if (!authToken) {
            navigate("/login")
        }
    }, [navigate])

    return (
        <div>
            Home Page
        </div>
    )
}
