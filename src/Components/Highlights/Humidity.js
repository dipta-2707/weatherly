import { Box, Typography } from "@mui/material";
import React from "react";

function Humidity(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Typography variant="h5" sx={{ color: "#707070" }}>
        Humidity
      </Typography>
      <Typography variant="h2" pt={1}>
        {props.humidity}%
      </Typography>
    </Box>
  );
}

export default Humidity;
