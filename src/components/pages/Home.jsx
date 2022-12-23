import {useSelector} from "react-redux";
import Form from "../posting/Form";
import List from "../posting/List";

function Home() {
  const globalTodo = useSelector((state) => state.todosReducer.todos);
  console.log(globalTodo);

  return (
    <div>
      <div>여긴 홈!</div>
      <Form />
      <div>
        <div>진행중!</div>
        <div>
          {globalTodo.map((todo) =>
            !todo.isDone ? (
              <List
                key={todo.id}
                globalTodoId={todo.id}
                globalTodo={todo}
                globalTodoIsDone={todo.isDone}
              />
            ) : null
          )}
        </div>
      </div>
      <div>
        <div>완료!</div>
        <div>
          {globalTodo.map((todo) =>
            todo.isDone ? (
              <List
                key={todo.id}
                globalTodoId={todo.id}
                globalTodo={todo}
                globalTodoIsDone={todo.isDone}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
