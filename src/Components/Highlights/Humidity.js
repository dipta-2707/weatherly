import { Box, Typography, CircularProgress, Stack } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

function Humidity(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Typography variant="h5" sx={{ color: "#707070" }}>
          Humidity
        </Typography>
        <CircularProgress
          variant="determinate"
          value={props.humidity}
          size="1.5em"
        />
      </Stack>
      <Typography variant="h2" pt={1}>
        <CountUp end={props.humidity} />%
      </Typography>
    </Box>
  );
}

export default Humidity;
