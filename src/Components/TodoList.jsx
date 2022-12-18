import React, { useContext } from "react";
import Todos from "./Todos";
import CircularProgress from "@mui/material/CircularProgress";
import { TodoContext, TodoContextUpdatedState } from "../TodoContext";
import TabsSelectionFullScreen from "./TabsSelectionFullScreen";
import TabsSelectionSmallScreens from "./TabsSelectionSmallScreens";
const TodoList = ({ matches }) => {
  console.log(TodoContext);
  const [tasks] = useContext(TodoContext);
  const [filteredValue] = useContext(TodoContextUpdatedState);
  if (!tasks) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  const filteredValues = tasks
    .filter((task) => {
      if (filteredValue === "All") {
        return task;
      }
      if (filteredValue === "Completed") {
        return task.completed;
      }
      if (filteredValue === "Active") {
        return !task.completed;
      }
    })
    .map((todo) => {
      return (
        <div key={todo.id}>
          <Todos todo={todo} key={todo.tasks} id={todo.id} />
        </div>
      );
    });

  return (
    <div>
      {filteredValues}
      {matches ? (
        <TabsSelectionFullScreen tasks={tasks} />
      ) : (
        <TabsSelectionSmallScreens tasks={tasks} />
      )}
    </div>
  );
};

export default TodoList;
