import {useSelector} from "react-redux";
import styled, {keyframes} from "styled-components";
import Form from "../posting/Form";
import List from "../posting/List";

function Home() {
  const globalTodo = useSelector((state) => state.todosReducer.todos);
  console.log(globalTodo);

  return (
    <div>
      <StHomeHeader>
        <StHomeHeaderTitle>Todo List</StHomeHeaderTitle>
        <Form />
      </StHomeHeader>
      <StTodoMainContainer>
        <StTodoItemContainer>
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
        </StTodoItemContainer>
        <StTodoItemContainer>
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
        </StTodoItemContainer>
      </StTodoMainContainer>
    </div>
  );
}
export default Home;
const boxFade = keyframes`
  50% { // 50% -> 정해둔 초의 50%가 지났을 때 중괄호 안의 코드를 실행
    opacity: 50%; // 불투명도
  }
`;

const StHomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin: 30px;
`;
const StHomeHeaderTitle = styled.div`
  & {
    animation: ${boxFade} 1s step-end infinite; // ease-in-out infinite : 무한 alternate
  }
`;

const StTodoMainContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const StTodoItemContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: repeat(3, 1fr);
  height: 650px;
  overflow-y: scroll;
`;
