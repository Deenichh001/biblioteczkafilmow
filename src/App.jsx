import './index.css'
import { UseState } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/Todoform/TodoForm';
import Todolist from './components/Todolist/Todolist';

function App() {

  const [todos, setTodos] = useState(
    'Home Alone',
    'The Elf',
    'The Grinch',
  )

  return ( 
    <>
    <Header /> 

    <TodoForm />
    <TodoList todos={todos} />

    </>

); 
}

export default App;
