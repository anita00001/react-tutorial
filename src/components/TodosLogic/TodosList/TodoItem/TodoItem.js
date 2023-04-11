import './TodoItem.css';

const TodoItem = ({ itemProp, handleChange }) => (
  <li className="task-row">
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <p id="task-description" contenteditable="true">{itemProp.title}</p>
    <button
      type="button"
      className="trash"
      onClick={() => removeTask(itemProp.id)}>
        <i className="fa-solid fa-trash-can"></i>
    </button>
  </li>
);
export default TodoItem;
