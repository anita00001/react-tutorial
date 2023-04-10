import TodoItem from './TodoItem/TodoItem';

const TodosList = ({ todosProps, handleChange }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
      />
    ))}
  </ul>
);
export default TodosList;
