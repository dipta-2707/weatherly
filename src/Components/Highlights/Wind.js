import { Box, Typography } from "@mui/material";
import React from "react";

function Wind(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Typography variant="h5" sx={{ color: "#707070" }}>
        Wind Status
      </Typography>
      <Typography display="inline-block" variant="h2" pt={1}>
        {props.speed}
      </Typography>
      <Typography display="inline" variant="h5">
        <span> </span>m/s
      </Typography>
    </Box>
  );
}

export default Wind;
