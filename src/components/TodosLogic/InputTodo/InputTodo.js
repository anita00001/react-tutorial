import './InputTodo.css';

function InputTodo() {
  return (
    <form className="new-task">
      <input id="my-task" type="text" placeholder="Add Task To Your List" />
      <button id="press-enter"><i className="fa-solid fa-arrow-turn-down" /></button>
    </form>
  );
}

export default InputTodo;
