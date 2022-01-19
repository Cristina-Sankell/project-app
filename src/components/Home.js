import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bio from "./Bio";
import User from "./User";
import CmntShPic from "./CmntShPic";
import Footer from "./Footer";

export default function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h1> Home Page </h1>
      <div className="user-link">
        <p>Click the link to get directed to:</p>
        <a className="" href="/User">
          {" "}
          User Page{" "}
        </a>{" "}
      </div>
      <Footer />
    </div>
  );
}
