import React from "react";
import { Box, Paper,  Typography } from "@mui/material";
import TabsWrappedLabel from "./TabsWrappedLabel";

const TabsSelectionSmallScreens = ({tasks}) => {
        const tasksLength = tasks.filter(task => !task.completed)
  return (
    <div>
      <Paper
        square
        sx={{
          width: "100%",
          paddingY: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
                      width: "100%",
          }}
        >
          <Typography variant="subtitle2" component="p" noWrap>
                 {tasksLength.length}      items left
          </Typography>
        <TabsWrappedLabel />
          <Typography variant="subtitle2" component="p" noWrap>
            Clear Completed
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default TabsSelectionSmallScreens;
