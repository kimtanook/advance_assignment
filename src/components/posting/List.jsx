import styled from "styled-components";
import useTodo from "../../hooks/useTodo";

function List({ globalTodoId, globalTodo, globalTodoIsDone }) {
  const {
    onChangeTitle,
    onChangeBody,
    onDeleteTodo,
    updateToggle,
    onUpdateSubmit,
    onToggleButton,
    newTitle,
    newBody,
    onConfirmButton,
  } = useTodo();

  return (
    <StTodoItem>
      {updateToggle ? (
        <form
          onSubmit={(event) => onUpdateSubmit(event, globalTodoId)}
          id={globalTodoId}
        >
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
        <StButton type="button" onClick={() => onDeleteTodo(globalTodoId)}>
          삭제
        </StButton>
        <StButton type="button" onClick={onToggleButton}>
          {updateToggle ? "취소" : "수정"}
        </StButton>
        <StButton
          type="button"
          onClick={() => onConfirmButton(globalTodoId, globalTodoIsDone)}
        >
          {globalTodoIsDone ? "Cancel.." : "Success!!"}
        </StButton>
        <StDate>
          작성일 :
          {new Date(globalTodo.id + 9 * 60 * 60 * 1000).toLocaleString(
            "ko-KR",
            {
              timeZone: "UTC",
            }
          )}
        </StDate>
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
const StDate = styled.div`
  font-size: 14px;
  margin: 5px;
`;
