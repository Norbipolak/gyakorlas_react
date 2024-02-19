import './App.css';
import MyComponent from './components/MyComponent';
import ClickCounter from './components/ClickCounter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
    {/* <MyComponent color="purple" text="Purple Rain"/>
    <MyComponent color="green" text="Deep Purple"/> */}
    {/* <ClickCounter/> */}
    <TodoList/>
    </div>
  );
}

export default App;
