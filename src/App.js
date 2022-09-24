import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import ResponsiveAppBar from "./components/appBar/appBar";
import { theme } from "./components/theme";
import BasicTabs from "./components/appBar/tabNavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ResponsiveAppBar />
      <BasicTabs/>
    </ThemeProvider>
  );
}

export default App;
