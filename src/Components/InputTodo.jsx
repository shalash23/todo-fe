import React from "react";
import { Box, Paper, TextField } from "@mui/material";
import InputCheckbox from "./InputCheckbox";
import { TodoContext } from "../TodoContext";



const InputTodo = () => {
  const [tasks, setTasks] = React.useContext(TodoContext)
  

  const [data, setData] = React.useState({
    id: (Math.floor(Math.random() * 200) * Date.now()).toString(),
    task: "",
    completed: false,
  });

  console.log(data,tasks)
  const handleChange = (e) => {
    setData((prevData) => ({...prevData,
      task: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prevTasks => {
     return [...prevTasks,data]
    })
    setData({
      id: (Math.floor(Math.random() * 200)* Date.now()).toString(),
      task: "",
      completed: false,
    });
  }

  return (
    <Paper
      elevation={2}
      sx={{
        mt: 6,
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputCheckbox />
        <form action="submit" onSubmit={handleSubmit} style={{
          width:'100%'
        }}>
          <TextField
            id="standard-basic"
            variant="standard"
            sx={{
              width: "90%",
              paddingX: 0.5,
              paddingY: 1.5,
            }}
            placeholder="Create a new todo"
            onChange={handleChange}
            value={data.task}
          />
        </form>
      </Box>
    </Paper>
  );
};

export default InputTodo;
