import './App.css';
import Header from './components/Header/Header';
import TodosLogic from './components/TodosLogic/TodosLogic';

function App() {
  return (
    <div className="app">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default App;
