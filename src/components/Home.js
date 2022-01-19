import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Flow from "./Flow";

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
      <Flow />
      <Footer />
    </div>
  );
}
