// TodosList.js
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';

function TodosList({ todos, deleteTodo, toggleCompleted }) {
  return (
    <ul className="todos-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default TodosList;
