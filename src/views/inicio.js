import { Grid, Typography } from "@mui/material";
import GridPage from "../components/GridPage";

function Inicio(props) {
  return (
    <GridPage>
      <Grid
        container
        height="90vh"
        direction="row"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={8}>
          <img width="100%" src="./img/undraw_Online_learning_re_qw08.png" />
        </Grid>
        <Grid item md={4}>
          <Typography variant="h4" align="center">
            Bienvenido a For-Education!!
          </Typography>
        </Grid>
      </Grid>
    </GridPage>
  );
}

export default Inicio;
