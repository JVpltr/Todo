import './App.css'
import {Header} from "./components/header";
import {TodoList} from "./components/todoList";

function App() {
  return (
    <div className={'app'}>
        <Header></Header>
        <TodoList/>
    </div>
  )
}

export default App
