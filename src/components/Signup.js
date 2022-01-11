import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

export default function Signup({ setPassword, setEmail, handleAction }) {

    const handleSubmit = (e) => {
        e.preventDefault()
    };
        

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-title">Sign up</h1>
            <input onChange={(e) => setEmail(e.target.value)} type="email" autoFocus required placeholder="E-mail" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Password" />
            <AuthButton title="Sign up" handleAction={handleAction}/>
            <p>Already have an account?</p>
            <Link className="form-link" to="/login">Log In Here!</Link>
        </form>
    );
};