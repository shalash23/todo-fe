import React, { useEffect, useContext, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import { Container, Box, Button } from "@mui/material";
import TodoList from "./Components/TodoList";
import images from "./assets/index";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { TodoContextProvider } from "./TodoContext";
import { ThemeModeProvider } from "./ThemeContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "hsl(236, 33%, 92%)",
      dark: "hsl(236, 9%, 61%)",
      light: "hsl(233, 11%, 84%)",
      contrastText: "hsl(234, 11%, 52%)",
    },
    info: {
      main: "hsl(233, 14%, 35%)",
      dark: "hsl(237, 14%, 26%)",
    },
    background: {
      default: "hsl(235, 21%, 11%)",
      paper: "hsl(235, 24%, 19%)",
    },
    text: {
      primary: "hsl(234, 39%, 85%)",
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: "Josefin Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    htmlFontSize: 18,
    subtitle2: {
      color: "hsl(233, 14%, 35%)",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(220, 98%, 61%)",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "hsl(0, 0%, 98%)",
    },
    text: {
      secondary: "hsl(236, 9%, 61%)",
      primary: "hsl(235, 19%, 35%)",
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: "Josefin Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    htmlFontSize: 18,
    subtitle2: {
      color: "hsl(234, 11%, 52%)",
    },
  },
});

const App = () => {
  const [assignTheme, setAssignTheme] = useState(darkTheme);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const changeTheme = (e) => {
    setAssignTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const backgroundImageChanger = () => {
    if (matches && assignTheme === lightTheme) {
      return `url(${images.bgMobileLight})`;
    }
    if (matches && assignTheme === darkTheme) {
      return `url(${images.bgMobileDark})`;
    }
    if (!matches && assignTheme === lightTheme) {
      return `url(${images.bgDesktopLight})`;
    }
    if (!matches && assignTheme === darkTheme) {
      return `url(${images.bgDesktopDark})`;
    }
  };
  //
  //  matches
  //               ? `url(${images.bgMobileLight})`
  //               : `url(${images.bgDesktopLight})`

  return (
    <ThemeModeProvider>
      <ThemeProvider theme={assignTheme}>
        <TodoContextProvider>
          <CssBaseline />
          <Container
            maxWidth={false}
            sx={{
              minHeight: "100vh",
              backgroundImage: backgroundImageChanger(matches, assignTheme),
              backgroundRepeat: "no-repeat",
              backgroundSize: matches ? "100% 35%" : "100% 45%",
            }}
          >
            <Box>
              <Header changeTheme={changeTheme} theme={assignTheme} />
              <Container
                maxWidth={"sm"}
                sx={{
                  paddingTop: 1,
                  marginTop: matches ? 1 : 4,
                }}
              >
                <TodoList matches={matches} />
              </Container>
            </Box>
          </Container>
        </TodoContextProvider>
      </ThemeProvider>
    </ThemeModeProvider>
  );
};

export default App;
