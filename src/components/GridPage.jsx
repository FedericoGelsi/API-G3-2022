import { Grid, Container } from "@mui/material";
import ResponsiveAppBar from "./appBar/appBar";

function GridPage(props) {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <ResponsiveAppBar />
      </Grid>
      <Grid item>
        <Container maxWidth="md">{props.children}</Container>
      </Grid>
    </Grid>
  );
}

export default GridPage;
