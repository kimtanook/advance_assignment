import {useSelector} from "react-redux";
import Form from "../posting/Form";
import List from "../posting/List";

function Home() {
  const globalTodo = useSelector((state) => state.todosReducer.todos);
  console.log("globalTodo : ", globalTodo);
  return (
    <div>
      <div>여긴 홈!</div>
      <Form />
      <div>
        <div>진행중!</div>
        <div>
          {globalTodo.map((todo) =>
            !todo.isDone ? <List key={todo.id} globalTodo={todo} /> : null
          )}
        </div>
      </div>
      <div>
        <div>완료!</div>
        <div>
          {globalTodo.map((todo) =>
            todo.isDone ? <List key={todo.id} globalTodo={todo} /> : null
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
