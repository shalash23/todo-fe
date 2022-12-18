import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import InputCheckbox from "./InputCheckbox";
import { AnimatePresence, motion } from "framer-motion";
import { TodoContext } from "../TodoContext";

const Todos = ({ todo }) => {
  const [state, setState] = React.useContext(TodoContext);
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <AnimatePresence>
      <Paper
        // elevation={12}
        // variant="outlined"
        square
        sx={{
          width: "100%",
          // paddingX: 1,
          // paddingY: 2,
          paddingY: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        component={motion.div}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.15 },
        }}
        initial={{
          y: "-50vh",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          staggerChildren: 0.3,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <InputCheckbox completed={todo.completed} id={todo.id} put={todo} />
        <Typography
          variant="body2"
          component="p"
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "hsl(234, 11%, 52%)" : "inherit",
            flexGrow: 1,
          }}
        >
          {todo.task}
        </Typography>
        <Box
          sx={{
            mr: 2,
          }}
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#494C6B"
              fill-rule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </Box>
      </Paper>
    </AnimatePresence>
  );
};

export default Todos;
