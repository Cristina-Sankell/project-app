import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import app from "./firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate("/")
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email Already in Use');
        }
        if (error.code === 'auth/weak-password') {
          alert('Password must be at least 6 characters long');
        }
      })
    }
    if (id === 1) {
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        console.log(error.code)
        if (error.code === 'auth/wrong-password') {
          alert('Please check the Password');
        }
        if (error.code === 'auth/user-not-found') {
          alert('Please check the Email');
        }
      })
    }
  }

  return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/login" element={<Login setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)}/>} />
          <Route path="/signup" element={<Signup setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;