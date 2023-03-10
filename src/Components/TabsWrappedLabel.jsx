import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { TodoContextUpdatedState } from "../TodoContext";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useContext(TodoContextUpdatedState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs"
        indicatorColor="none"
        variant="standard"
        centered
        color="main"
      >
        <Tab
          value="All"
          label="All"
          sx={{
            fontSize: 15,
            textTransform: "none",
            fontFamily: "Josefin Sans",
            fontWeight: "700",
          }}
        />
        <Tab
          value="Active"
          label="Active"
          color="text.main"
          sx={{
            fontSize: 15,
            textTransform: "none",
            fontFamily: "Josefin Sans",
            fontWeight: "700",
            pl: 0,
          }}
        />
        <Tab
          value="Completed"
          label="Completed"
          sx={{
            fontSize: 15,
            textTransform: "none",
            fontFamily: "Josefin Sans",
            fontWeight: "700",
          }}
        />
      </Tabs>
    </Box>
  );
}
