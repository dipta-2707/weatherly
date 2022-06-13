import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import CloudIcon from '@mui/icons-material/Cloud';

function Cloud(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Typography variant="h5" sx={{ color: "#707070" }}>
            Cloudiness
        </Typography>
        <CloudIcon
          variant="determinate"
          size="1.5em"
          sx={{color: "#FFFFFF"}}
        />
      </Stack>
      <Typography variant="h2" pt={1}>
        <CountUp end={props.cloud} />%
      </Typography>
    </Box>
  );
}

export default Cloud;
