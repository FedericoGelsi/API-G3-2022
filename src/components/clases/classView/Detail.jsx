import { Stack, Typography, Rating} from "@mui/material";
import React from "react";

function Detail(props) {
  return (
    <Stack direction="row" alignItems="center" pr={1}>
      <Typography variant="body2" flexGrow={1}>
        {props.name}:
      </Typography>
      {props.variant === "rating" ? <Rating name="simple-controlled" value={props.value} /> : <Typography variant="body2">{props.value}</Typography>}
    </Stack>
  );
}
export default Detail;
