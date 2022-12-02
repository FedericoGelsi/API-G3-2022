import { Grid, Typography } from "@mui/material";
import GridPage from "../components/GridPage";

import teacherSvg from "../assets/undraw_educator_re_ju47.svg"

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
          <img width="100%" alt="hero" src="./img/undraw_Online_learning_re_qw08.png" />
        </Grid>
        <Grid item md={4}>
          <Typography variant="h4" align="center">
            Bienvenido a For-Education!!
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h5" align="center">
            Una forma sencilla de contratar clases particulares
          </Typography>
        </Grid>
        <Grid item md={8}>
          <img width="100%" alt="teacher" src={teacherSvg} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body" align="center">
            <strong>Sos profesor?</strong>
            <br/>
            Ingresa a la pagina o registrate para publicar clases
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body" align="center">
            <strong>Sos estudiante?</strong>
            <br/>
            Ingresa a la pagina o registrate para ver las clases disponibles
          </Typography>
        </Grid>
        <Grid item md={12}>
          
        </Grid>
      </Grid>
    </GridPage>
  );
}

export default Inicio;
