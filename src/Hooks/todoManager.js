//Imports
import { useEffect, useState, useMemo } from 'react'; // React Hooks
import { getAllTodo, deleteTodo, completeTodo} from '../config/fetchAPI.js'; // FetchAPIMethods

export const useTodoManager = () => {

    // State Hooks
    const [todoDB, setTodoDB] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [timeLeft, setTimeLeft] = useState(1000)

    const isEmpty = useMemo(() => {
        if(typeof(todoDB)!== 'undefined'){
            return todoDB === 0
        }else{
            return true
        }
    }, [todoDB])
    
    // Effect Hooks
    useEffect(() => { // Exec on Start
        setIsFetching(true) 
        console.log('Fetching')
        fetchGetAll()
      }, [])

    useEffect(() => { // Exec 30 Seconds before initial GetAll
    if (!timeLeft) { 
        setIsFetching(true) 
        fetchGetAll() // Exec before timer ends
    };

    const intervalId = setInterval(() => !isFetching && setTimeLeft(timeLeft - 1) , 1000) // - 1 every Second

    return () => clearInterval(intervalId) // Delete Interval
    }, [timeLeft]);

    
    // Fetch to todos/all
    const fetchGetAll = async () => {
        try {
            const response = await getAllTodo()
            setTodoDB(response)
            setIsFetching(false)
            setTimeLeft(30)
        } catch (error) {
            console.error(error)
            setTodoDB([])
            setTimeLeft(30)
            setIsFetching(false)
        }
    }

    // Fetch to todos DELETE
    const fetchDeleteTodo = async (_id) =>{
        try {
            setIsFetching(true)
            console.log('Deleting') 
            await deleteTodo(_id)
            await fetchGetAll()
        } catch (error) {
            console.log(error)
        }
    }

    // Fetch to todos PUT
    const fetchChangeTodoState = async (documento) =>{
        try {
            setIsFetching(true)
            console.log('Updating') 
            const {_id, completed} = documento
            await completeTodo(_id, !completed)
            await fetchGetAll()
        } catch (error) {
            console.log(error)
        }
    }

    
    return {
        todoDB,
        isFetching,
        timeLeft,
        isEmpty,
        setIsFetching,
        fetchGetAll,
        fetchDeleteTodo,
        fetchChangeTodoState

    }
}