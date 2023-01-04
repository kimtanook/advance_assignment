import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  confirmTodo,
  deleteTodo,
  updateTodo,
} from "../redux/modules/todoModule";
const useTodo = () => {
  const globalTodo = useSelector((state) => state.todosReducer.todos);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [newTitle, setNewTitle] = useState(globalTodo.title);
  const [newBody, setNewBody] = useState(globalTodo.body);

  const [updateToggle, setUpdateToggle] = useState(false);

  const dispatch = useDispatch();

  const onChangeTitle = (event) => {
    setNewTitle(event.target.value);
    console.log("title", event.target.value);
  };
  const onChangeBody = (event) => {
    setNewBody(event.target.value);
    console.log("body", event.target.value);
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (title === "" || body === "") {
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };
  const onDeleteTodo = (globalTodoId) => {
    dispatch(deleteTodo(globalTodoId));
  };

  const onToggleButton = () => {
    setUpdateToggle(!updateToggle);
  };

  const onUpdateSubmit = (event, globalTodoId) => {
    event.preventDefault();
    dispatch(
      updateTodo({
        todoId: globalTodoId,
        title: newTitle,
        body: newBody,
        updateToggle,
      })
    );
    onToggleButton();
  };

  const onConfirmButton = (globalTodoId, globalTodoIsDone) => {
    dispatch(confirmTodo({ todoId: globalTodoId, isDone: globalTodoIsDone }));
  };

  return {
    onSubmitTodo,
    title,
    body,
    setTitle,
    setBody,
    onDeleteTodo,
    onUpdateSubmit,
    onToggleButton,
    updateToggle,
    onChangeTitle,
    newTitle,
    newBody,
    onChangeBody,
    onConfirmButton,
  };
};

export default useTodo;
