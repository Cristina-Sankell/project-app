
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CmntShPic = () => {
  // const firstRender = useRef(true);

  const [newComment, setNewComment] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("newComment");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [inputValue, setInputValue] = useState("");

  const [currentCommentId, setCurrentCommentId] = useState(null);

  const addNewComment = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    setNewComment([
      ...newComment,
      {
        text: inputValue,
        id: uuidv4(),
      },
    ]);

    setInputValue("");
  };

  const removeComment = (id) => {
    setNewComment(newComment.filter((Cmt) => Cmt.id !== id));
  };

  useEffect(() => {
    // storing input newComment
    localStorage.setItem("newComment", JSON.stringify(newComment));
  }, [newComment]);

  return (
    <div className="bio">
      <form onSubmit={addNewComment}>
        <input
          autoFocus
          type="text"
          placeholder={`Add a comment`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {newComment.map((Cmt) => (
        <div key={Cmt.id} className="bio">
          <p className="cmt-text">{Cmt.text}</p>
          <button onClick={() => removeComment(Cmt.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CmntShPic;
