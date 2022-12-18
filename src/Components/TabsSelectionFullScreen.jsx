import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import TabsWrappedLabel from "./TabsWrappedLabel";

const TabsSelectionFullScreen = ({ tasks }) => {
  const tasksLength = tasks.filter((task) => !task.completed);
  return (
    <div>
      <Paper
        variant="outlined"
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
          <Typography
            variant="subtitle2"
            component="p"
            noWrap
            color={secondary.main}
          >
            {tasksLength.length} items left
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            noWrap
            color={secondary.main}
          >
            Clear Completed
          </Typography>
        </Box>
      </Paper>
      <Box marginTop={3}>
        <TabsWrappedLabel />
      </Box>
    </div>
  );
};

export default TabsSelectionFullScreen;
