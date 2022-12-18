import React from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import images from "../assets/index";
import InputTodo from "./InputTodo";
import "./Header.css";
import { motion } from "framer-motion";
const Header = ({ changeTheme, theme }) => {
  const { mode } = theme.palette;
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        paddingTop: 8,
      }}
    >
      <Paper
        sx={{
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "hsl(0, 0%, 98%)",
              letterSpacing: 12,
            }}
          >
            TODO
          </Typography>
          <motion.img
            src={mode === "light" ? images.iconMoon : images.iconSun}
            alt=""
            onClick={changeTheme}
            initial={{ "--rotate": "0deg" }}
            animate={{ "--rotate": "360deg" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </Box>
        <InputTodo />
      </Paper>
    </Container>
  );
};

export default Header;
