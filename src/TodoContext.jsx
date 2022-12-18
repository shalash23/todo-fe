import data from "../data";
import { createContext, useState } from "react";

export const TodoContext = createContext();
export const TodoContextUpdatedState = createContext()

export const TodoContextProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState(data);
  const [sortArray, setSortArray] = useState('All')
  const values = {
    todoTasks,
    setTodoTasks,
    sortArray,
    setSortArray
  }

  
  return (
    <TodoContext.Provider value={[todoTasks, setTodoTasks]}>
      <TodoContextUpdatedState.Provider value={[sortArray,setSortArray]}>
        {children}
      </TodoContextUpdatedState.Provider>
    </TodoContext.Provider>
  );
};
