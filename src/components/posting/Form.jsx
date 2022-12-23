import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/modules/todoModule";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

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
  };

  return (
    <form onSubmit={onSubmitTodo}>
      <input
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        type="text"
        placeholder="제목"
        required
      />
      <input
        onChange={(event) => {
          setBody(event.target.value);
        }}
        type="text"
        placeholder="내용"
        required
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default Form;
