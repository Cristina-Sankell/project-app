import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import User from "./components/User";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="container">
          <UserAuthContextProvider>
          <Header />
            <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<ProtectedRoute><User /></ProtectedRoute>} />
            </Routes>
            <Footer />
          </UserAuthContextProvider>
    </div>
  );
}

export default App;