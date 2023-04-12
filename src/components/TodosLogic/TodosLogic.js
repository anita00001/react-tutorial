// TodosLogic.js
import { useState, useEffect } from 'react';
import './TodosLogic.css';
import InputTodo from './InputTodo/InputTodo';
import TodosList from './TodosList/TodosList';

function TodosLogic() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = (id, updatedTitle) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  return (
    <>
      <main className="todo-logic">
        <InputTodo addTodo={addTodo} />
        <TodosList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          updateTodo={updateTodo}
        />
      </main>
    </>
  );
}

export default TodosLogic;
