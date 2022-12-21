import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../../redux/modules/todoModule";

function List({globalTodoId, globalTodo}) {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTitle, setNewTitle] = useState(globalTodo.title);
  const [newBody, setNewBody] = useState(globalTodo.body);

  const dispatch = useDispatch();

  const onChangeTitle = (event) => {
    setNewTitle(event.target.value);
    console.log("title", event.target.value);
  };
  const onChangeBody = (event) => {
    setNewBody(event.target.value);
    console.log("body", event.target.value);
  };

  const onDeleteTodo = () => {
    dispatch(deleteTodo(globalTodoId));
  };

  const onUpdateSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateTodo({todoId: globalTodoId, title: newTitle, body: newBody})
    );
    onToggleButton();
  };

  const onToggleButton = () => {
    setUpdateToggle(!updateToggle);
  };
  return (
    <div>
      {updateToggle ? (
        <form onSubmit={onUpdateSubmit} id={globalTodoId}>
          <div>{globalTodo.id}</div>
          <input
            type="text"
            onChange={onChangeTitle}
            value={newTitle}
            placeholder="수정할 제목"
          />
          <input
            type="text"
            onChange={onChangeBody}
            value={newBody}
            placeholder="수정할 내용"
          />
          <button type="submit">완료</button>
        </form>
      ) : (
        <div>
          <div>{globalTodo.id}</div>
          <div>{globalTodo.title}</div>
          <div>{globalTodo.body}</div>
        </div>
      )}
      <button type="button" onClick={onDeleteTodo}>
        삭제
      </button>
      <button type="button" onClick={onToggleButton}>
        수정
      </button>
    </div>
  );
}

export default List;
