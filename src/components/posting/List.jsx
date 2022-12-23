import {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {
  confirmTodo,
  deleteTodo,
  updateTodo,
} from "../../redux/modules/todoModule";

function List({globalTodoId, globalTodo, globalTodoIsDone}) {
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

  const onConfirmButton = () => {
    dispatch(confirmTodo({todoId: globalTodoId, isDone: globalTodoIsDone}));
  };
  return (
    <StTodoItem>
      {updateToggle ? (
        <form onSubmit={onUpdateSubmit} id={globalTodoId}>
          <StTitleInput
            type="text"
            onChange={onChangeTitle}
            value={newTitle}
            placeholder="수정할 제목"
          />
          <StBodyInput
            type="text"
            onChange={onChangeBody}
            value={newBody}
            placeholder="수정할 내용"
          />
          <button type="submit">완료</button>
        </form>
      ) : (
        <div>
          <StTitle>{globalTodo.title}</StTitle>
          <StBody>{globalTodo.body}</StBody>
        </div>
      )}
      <StButtonContainer>
        <StButton type="button" onClick={onDeleteTodo}>
          삭제
        </StButton>
        <StButton type="button" onClick={onToggleButton}>
          수정
        </StButton>
        <StButton type="button" onClick={onConfirmButton}>
          Success
        </StButton>
      </StButtonContainer>
    </StTodoItem>
  );
}

export default List;

const StTodoItem = styled.div`
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  height: 150px;
`;
const StTitle = styled.div`
  background-color: #00000023;
  font-size: 20px;
  height: 20px;
  margin: 10px;
  padding: 10px;
`;
const StBody = styled.div`
  padding: 10px;
  font-size: 20px;
  height: 20px;
  margin: 10px;
`;
const StTitleInput = styled.input`
  background-color: #00000023;
  font-size: 20px;
  height: 10px;
  width: 240px;
  margin: 10px;
  padding: 10px;
`;
const StBodyInput = styled.input`
  padding: 10px;
  font-size: 20px;
  height: 10px;
  width: 150px;
  margin: 10px;
`;
const StButtonContainer = styled.div`
  margin: 10px;
`;
const StButton = styled.button`
  margin: 5px;
`;
