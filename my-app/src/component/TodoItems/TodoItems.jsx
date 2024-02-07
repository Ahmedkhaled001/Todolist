import { useDispatch } from "react-redux";
import { setCheck , deleteTodo } from "../../TodoSlice";
import './todoitem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function TodoItems ({ name, done, id }) {

  const dispach = useDispatch();
  const handleCheck = () => {
    dispach(setCheck(id));
  };

  const handleDelete = () => {
    dispach(deleteTodo(id))
  }

  return (
    <>

      <div className="todo-item">
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          checked={done}
          onChange={handleCheck}
        />
        <label htmlFor={id} className={done ? "active" : ""}>
          {name}
        </label>
        <div style={{cursor:"pointer", fontSize:"25px"}} onClick={handleDelete}><FontAwesomeIcon icon={faTrash} style={{color:'red'}}/></div>
      </div>
    </>
  )
}

export default TodoItems