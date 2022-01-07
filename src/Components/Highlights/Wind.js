import { Box, Typography } from "@mui/material";
import React from "react";
import AirIcon from "@mui/icons-material/Air";

function Wind(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ color: "#707070" }}>
          Wind Status
        </Typography>
        <AirIcon
          sx={{ display: "block", color: "#FFFFFF", marginTop: "5px" }}
        />
      </Box>

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
