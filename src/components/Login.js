import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            setError("Error. Please check e-mail address");
        }
        if (error.code === "auth/wrong-password") {
            setError("Error. Please check password");
        }
    }
  };

  return (
      <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Log in</h2>
            {error && <p className="error-msg">{error}</p>}
            <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button variant="primary" type="Submit">Log in</button>
            <p>Don't have an account yet?</p>
            <Link className="form-link" to="/signup">Sign Up</Link>
        </form>
  );
};

export default Login;