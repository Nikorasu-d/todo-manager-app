import { Timer } from "./timer"
import Todo from "./todo"

export default function TodoList({todoDB, fetchDeleteTodo, fetchChangeTodoState, timeLeft, isEmpty, isFetching}){

    return(
    <>
        <div className="container-fluid main-content">
            <div className="row title">
                <h1>TO DO LIST</h1>
            </div>      
            <div className="row">
                <div className="container-fluid todo-list">
                    <ul>
                        
                        {isFetching && (
                            <div className="loading-overlay">
                                <h1>
                                LOADING <b>TO DO</b>...
                                </h1>
                            </div>
                        )}

                        {!isEmpty ? 
                            todoDB.map((item)=>(
                                <Todo
                                    key={item._id}
                                    documento={item}
                                    fetchDeleteTodo = {fetchDeleteTodo}
                                    fetchChangeTodoState = {fetchChangeTodoState}
                                />
                            ))
                        :
                            <>
                            </>
                        }
                        
                    </ul>
                </div>
            </div>
            <Timer
                timeLeft={timeLeft}
            />  
        </div>
    </>
    )
}