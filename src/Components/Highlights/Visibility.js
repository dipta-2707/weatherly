import { Box, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Visibility(props) {
  return (
    <Box className="highlights" borderRadius="15px" p={2} m={1}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ color: "#707070" }}>
          Visibility
        </Typography>
        <VisibilityIcon
          sx={{ display: "block", color: "#4c35ae", marginTop: "5px" }}
        />
      </Box>

      <Typography display="inline-block" variant="h2" pt={1}>
        {props.visibility}
      </Typography>
      <Typography display="inline" variant="h5">
        <span> </span>km
      </Typography>
    </Box>
  );
}

export default Visibility;
