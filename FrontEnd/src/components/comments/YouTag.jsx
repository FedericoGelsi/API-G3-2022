import { Chip, ThemeProvider } from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';

const YouTag = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Chip
        label="you"
        variant="filled"
        size="small"
        color="secondary"
      />
    </ThemeProvider>
  );
};

export default YouTag;
