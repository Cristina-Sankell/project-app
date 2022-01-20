import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, username);
      updateProfile(auth.currentUser, {displayName: username,});
      navigate("/");
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            setError("Error. There is already an account registered with this e-mail");
        }
        if (error.code === "auth/weak-password") {
            setError("Error. Password must be at least 6 characters long");
        }
    }
  };

  return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Sign up</h2>
            {error && <p className="error-msg">{error}</p>}
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="Submit">Sign up</button>
            <p>Already have an account?</p>
            <Link className="form-link" to="/">Log In</Link>
        </form>
  );
};

export default Signup;