// InputTodo.js
import PropTypes from 'prop-types';
import { useState } from 'react';
import './InputTodo.css';

function InputTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        id: Date.now(),
        title,
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <form className="new-task" onSubmit={handleSubmit}>
      <input id="my-task" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new todo..." />
      <button id="press-enter" type="submit">
        <i className="fa-solid fa-arrow-turn-down" />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
