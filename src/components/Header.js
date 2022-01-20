import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Header = () => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/login");
        } catch (error) {
          console.log(error.message);
        }
      };
    

     return (
         <div className="header">
             <h1>Header</h1>
             <div className="header-logged-in">
                {user && <p>Welcome: {user.displayName}</p>}
                {user && <button><Link className="btn-link" to="/profile">My Profile</Link></button>}
                {user && <button onClick={handleLogout}>Log out</button>}
             </div>
         </div>
     )
 }

export default Header 