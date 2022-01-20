import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Header = () => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const [onHome, setOnHome] = useState(true)
    const [onProfile, setOnProfile] = useState(false)

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/login");
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const toProfile = () => {
        setOnHome(false)
        setOnProfile(true)
      };

      const toHome = () => {
        setOnHome(true)
        setOnProfile(false)
      };

     return (
         <div className="header">
             <h1>Header</h1>
             <div className="header-logged-in">
                {user && <p>Welcome: {user.displayName}</p>}
                {user && onHome && <button onClick={toProfile}><Link className="btn-link" to="/profile">My Profile</Link></button>}
                {user && onProfile && <button onClick={toHome}><Link className="btn-link" to="/">Home</Link></button>}
                {user && <button onClick={handleLogout}>Log out</button>}
             </div>
         </div>
     )
 }

export default Header 