import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styled, {keyframes} from "styled-components";
import Form from "../posting/Form";
import List from "../posting/List";

function Home() {
  const globalTodo = useSelector((state) => state.todosReducer.todos);
  const [time, setTime] = useState(
    new Date(Date.now() + 9 * 60 * 60 * 1000).toLocaleString("ko-KR", {
      timeZone: "UTC",
    })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date(Date.now() + 9 * 60 * 60 * 1000).toLocaleString("ko-KR", {
          timeZone: "UTC",
        })
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <StHomeHeader>
        <StHomeHeaderTitle>Todo List</StHomeHeaderTitle>
        <StClock>{time}</StClock>
        <Form />
      </StHomeHeader>
      <StTodoMainContainer>
        <StTodoItemContainer>
          <StCompleteContainerName>진행중!</StCompleteContainerName>
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
          <StCompleteContainerName>완료!</StCompleteContainerName>
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
const StClock = styled.div`
  font-size: 15px;
  margin: 10px;
`;
const StHomeHeaderTitle = styled.div`
  & {
    animation: ${boxFade} 1s step-end infinite; // ease-in-out infinite : 무한 alternate
  }
`;
const StCompleteContainerName = styled.div`
  background-color: #c3c3c3;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
