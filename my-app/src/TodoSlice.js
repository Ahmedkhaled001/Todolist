import { createSlice } from "@reduxjs/toolkit";


const lTodos = localStorage.getItem('todosItem') !== null ? JSON.parse(localStorage.getItem('todosItem')) : []
const initialState = {
  todoList: lTodos,
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      localStorage.setItem('todosItem' , JSON.stringify(state.todoList.map((todo) =>  todo)))
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done ? (item.done = false) : (item.done = true);
        }
      });
    },
    deleteTodo: (state, action) => {
        state.todoList = state.todoList.filter((todo) =>
        todo.id !== action.payload)
        localStorage.setItem('todosItem' , JSON.stringify(state.todoList.map((todo) =>  todo)))
        }
  },
});

export const { saveTodo, setCheck, deleteTodo } = TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;