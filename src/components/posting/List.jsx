import {useDispatch} from "react-redux";
import {deleteTodo} from "../../redux/modules/todoModule";

function List({globalTodo}) {
  const dispatch = useDispatch();
  const onDeleteTodo = () => {
    dispatch(deleteTodo(globalTodo.id));
  };
  return (
    <div>
      <div>{globalTodo.id}</div>
      <div>{globalTodo.title}</div>
      <div>{globalTodo.body}</div>
      <button onClick={onDeleteTodo}>삭제</button>
    </div>
  );
}

export default List;
