// Imports
import './App.css';
import Sidebar from "./components/sidebar"; // Sidebar Component
import TodoList from './components/todoList'; // Todo List Component
import { useTodoManager } from './Hooks/todoManager.js';


// React APP
function App() {

  const {todoDB, isFetching, timeLeft, isEmpty, fetchDeleteTodo, fetchChangeTodoState,fetchGetAll,setIsFetching} = useTodoManager()

  return (
    <>
      <div className="container-fluid">
          <div className="row">

              <Sidebar
                fetchGetAll ={fetchGetAll}
                setIsFetching={setIsFetching}
              />

              <main className="col-10">
                    <TodoList     
                      todoDB = {todoDB}
                      fetchDeleteTodo = {fetchDeleteTodo}
                      fetchChangeTodoState = {fetchChangeTodoState}
                      timeLeft = {timeLeft}
                      isEmpty = {isEmpty}
                      isFetching = {isFetching}
                    />
              </main>
          </div>
      </div>
    </>
  );
}

export default App;
