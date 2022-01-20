import { useState } from "react";

const User = () => {
  const { user, setUser } = useState([]);
  /*
  const users = [
    ...user,
    {
      name: "John",
      email: "john@example.com",
    },
  ];
  */

  return (
    <div>
      <div className="user">
        <h2 className="user-title">Profile Page</h2>
        <div className="name-email">
          <p>
            <input placeholder="Username" type="text"></input>
          </p>
          <span className="span"></span>
          <p>
            <input placeholder="Email" type="text"></input>
          </p>
        </div>
        <div className="image-container">
          <p>Profile Image:</p>
          <img></img>
        </div>
        <div className="bio-container">
        </div>
      </div>
    </div>
  );
};

export default User;
