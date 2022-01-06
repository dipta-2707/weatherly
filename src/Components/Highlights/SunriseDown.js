import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function SunriseDown(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Typography variant="h5" sx={{ color: "#707070" }}>
        Sun Rise & Down
      </Typography>
      <Typography variant="h5" pt={1}>
        <ArrowCircleUpIcon
          sx={{
            color: "#FFC900",
            marginRight: ".5rem",
            marginBottom: "-.15rem",
          }}
        />
        {props.sunRise}
        <br />
        <ArrowCircleDownIcon
          sx={{
            color: "#FFC900",
            marginRight: ".5rem",
            marginBottom: "-.15rem",
          }}
        />
        {props.sunDown}
      </Typography>
    </Box>
  );
}

export default SunriseDown;
