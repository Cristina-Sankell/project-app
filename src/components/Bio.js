import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Bio = () => {
  // const firstRender = useRef(true);

  const [newBio, setNewBio] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("newBio");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [inputValue, setInputValue] = useState("");

  const [currentBioId, setCurrentBioId] = useState(null);

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

  const editBio = (setNewBio) => {
    setNewBio(newBio.newBioText);
    setCurrentBioId(newBio.newBioId);
  };

  useEffect(() => {
    // storing input newBio
    localStorage.setItem("newBio", JSON.stringify(newBio));
  }, [newBio]);

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
        <button>Add Bio</button>
      </form>
      {newBio.map((nBio) => (
        <div key={nBio.id} className="bio">
          <h2 className="bio-text">{nBio.text}</h2>
          <button onClick={() => editBio(nBio.text)}>Edit</button>
          <button onClick={() => removeBio(nBio.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bio;