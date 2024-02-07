import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../TodoSlice";
import './AddItem.css'


const AddItem = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
    if (input) {
      console.log("not empty");
    } else {
      console.log("empty");
      window.addEventListener("load", () => {});
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="input-contain">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      ref={inputRef}
      className="input-field"
    />
    <button className="btn" onClick={addTodo}>
      Add
    </button>
  </form>
  )
}

export default AddItem