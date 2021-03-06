import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import Bio from "./Bio";

const User = () => {
  const { user } = useUserAuth();

  return (
    <div>
      <div className="user">
        <h2 className="user-title">Profile Page</h2>
        <div className="name-email">
          <p>
            <input
              className="user-input"
              placeholder={user.displayName}
              type="text"
            ></input>
          </p>
          <span className="span"></span>
          <p>
            <input
              className="user-input"
              placeholder={user.email}
              type="text"
            ></input>
          </p>
        </div>
        <div className="image-container">
          <p>Profile Image:</p>
          <img></img>
        </div>
        <div className="bio-container">
          <Bio />
        </div>
      </div>
    </div>
  );
};

export default User;
