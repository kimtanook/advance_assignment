import useTodo from "../../hooks/useTodo";

function Form() {
  const { onSubmitTodo, title, body, setTitle, setBody } = useTodo();

  return (
    <form onSubmit={onSubmitTodo}>
      <input
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title}
        type="text"
        placeholder="제목"
        required
      />
      <input
        onChange={(event) => {
          setBody(event.target.value);
        }}
        value={body}
        type="text"
        placeholder="내용"
        required
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default Form;
