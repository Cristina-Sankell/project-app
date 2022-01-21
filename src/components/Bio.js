import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Bio = () => {
  //uncomment this to make the localStorage work
  /*
  // const firstRender = useRef(true);

  const [newBio, setNewBio] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("newBio");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input newBio
    localStorage.setItem("newBio", JSON.stringify(newBio));
  }, [newBio]);
*/

  // remove this to remove the error that occurs if you remove the enclosing comment up top
  const [newBio, setNewBio] = useState([]);

  const [inputValue, setInputValue] = useState("");

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
      <h3 className="bio-title">Biography</h3>
      <form onSubmit={addNewBio}>
        <input
          className="this"
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
          <button onClick={() => removeBio(nBio.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bio;
