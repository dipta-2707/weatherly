import { Box, Typography } from "@mui/material";
import React from "react";

function Week(props) {
  return (
    <Box p={1.5} mx={1} sx={{ bgcolor: "#FFFFFF", borderRadius: "15px" }}>
      <Typography variant="title1">{props.day}</Typography>
      <Typography variant="h5">{props.type}</Typography>
      <Typography variant="h5">12°C</Typography>
    </Box>
  );
}

export default Week;
