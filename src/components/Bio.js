import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Bio = () => {
  const firstRender = useRef(true);

  const [inputValue, setInputValue] = useState("");
  const [newBio, setNewBio] = useState([]);

  const addNewBio = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    setNewBio([
      ...newBio,
      {
        text: inputValue,
        id: uuidv4(),
      },
    ]);

    setInputValue("");
  };
  const removeBio = (id) => {
    setNewBio(newBio.filter((nBio) => nBio.id !== id));
  };

  return (
    <div className="bio">
      <h3>Your Bio</h3>
      <form onSubmit={addNewBio}>
        <input
          autoFocus
          type="text"
          placeholder={`Tell us about you`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add new Bio / Edit</button>
      </form>
      {newBio.map((nBio) => (
        <div key={nBio.id} className="addbio">
          <p>{nBio.text}</p>
          <button onClick={() => removeBio(nBio.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bio;

// Button to add bio
// button to edit existing Bio
// button to delete existing Bio
// place for the bio
// placholder for the bio