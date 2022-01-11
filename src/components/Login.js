import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

export default function Login({ setPassword, setEmail, handleAction }) {

    const handleSubmit = (e) => {
        e.preventDefault()
    };
        

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-title">Log in</h1>
            <input onChange={(e) => setEmail(e.target.value)} type="email" autoFocus required placeholder="E-mail" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Password" />
            <AuthButton title="Log in" handleAction={handleAction}/>
            <p>Don't have an account yet? </p>
            <Link className="form-link" to="/signup">Sign Up Here!</Link>
        </form>
    );
};