import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ScoreChanger = ({ onScore }) => {
  const [score, setScore] = useState(onScore);

  return (
    <Box>
      <Stack alignItems="center" justifyContent="center">
        <IconButton
          disableRipple
          aria-label="increase score"
          onClick={() => {
            setScore(score + 1);
          }}
        >
          <AddIcon sx={{ height: "20px", width: " 20px" }} color="secondary" />
        </IconButton>
        <Typography color="primary">{score}</Typography>
        <IconButton
          disableRipple
          aria-label="decrease score"
          onClick={() => {
            setScore(score - 1);
          }}
        >
          <RemoveIcon
            sx={{ height: "20px", width: " 20px" }}
            color="secondary"
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ScoreChanger;
