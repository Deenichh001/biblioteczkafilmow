import './index.css'
import { UseState } from 'react';
import TodoForm from './components/Todoform/TodoForm';

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
