import "./App.css";
import { selectTodoList } from "./TodoSlice";
import AddItem from "./component/AddItem/AddItem";
import TodoItems from "./component/TodoItems/TodoItems";
import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <>
      <div className="container">
        <h1 style={{ color: "#c4f1e2", fontFamily: "cursive" }}>
          Todo List App
        </h1>
        <div className="span-columns">
          <span>Status</span>
          <span>Todos</span>
          <span>Action</span>
        </div>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            name={item.item}
            done={item.done}
            id={item.id}
            className="todo-item"
          />
        ))}
        <AddItem />
      </div>
    </>
  );
}

export default App;
