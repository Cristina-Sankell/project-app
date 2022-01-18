import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {

    const { user } = useUserAuth();
  
  return (
      <div className="container">
        <p>Welcome: {user && user.email}</p>
      </div>
  );
};

export default Home;
