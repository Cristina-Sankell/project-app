import { useNavigate } from "react-router";
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
             {user && <button variant="primary" onClick={handleLogout}>Log out</button>}
         </div>
     )
 }

export default Header 