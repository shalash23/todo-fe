import React,{useContext} from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import Box from "@mui/material/Box";
import { TodoContext } from "../TodoContext";

const InputCheckbox = ({ completed, id, put }) => {
  const [tasks, setTasks] = useContext(TodoContext)

  const handleUpdate = (id) => {
    const updatedTask = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed:!task.completed}
      }
      return task
    })
    setTasks(updatedTask)
 }


  return (
    <Box>
      <Checkbox
        onClick={() => {
          handleUpdate(id)
        }}
        checked={completed}
        icon={<RadioButtonUnchecked />}
        checkedIcon={
          <CheckIcon
            sx={{
              background:
                "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
              color: "white",
              borderRadius: "50%",
              fontSize: 24,
            }}
          />
        }
      />
    </Box>
  );
};

export default InputCheckbox;
