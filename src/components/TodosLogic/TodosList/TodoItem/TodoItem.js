// TodoItem.js
import PropTypes from 'prop-types';
import { useState } from 'react';
import './TodoItem.css';

function TodoItem({
  todo, deleteTodo, toggleCompleted, updateTodo,
}) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggleCompleted = () => {
    toggleCompleted(todo.id);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      updateTodo(todo.id, title);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <li className="task-row">
      <input type="checkbox" checked={todo.completed} onChange={handleToggleCompleted} />
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <p
          id="task-description"
          className={todo.completed ? 'completed' : ''}
          onDoubleClick={handleDoubleClick}
        >
          {todo.title}
        </p>
      )}
      <i
        className="fas fa-trash"
        onClick={handleDelete}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleDelete();
          }
        }}
        tabIndex={0} // make the element focusable
        role="button" // indicate the element is clickable
        aria-label="Delete"
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
