import { Grid } from "@mui/material";
import CardClase from "../components/clases/classCard";
import { Class, Proffesor } from "../components/clases/entities";
import GridPage from "../components/GridPage";

function MisClases(props) {
  const defaultUser = new Proffesor(
    "Juan",
    "Perez",
    "juan.perez@profesor.com",
    "1122540953",
    "20-02-1989",
    "12345678",
    "12:00 a 18:00",
    "Ingeniero en Sistemas",
    "30 anios de experiencia en desarrollo FullStack"
  );

  const defaultClase = new Class(
    "Clase React",
    "React",
    "2 semanas",
    defaultUser,
    "2 dias por semana",
    "25 USD"
  );

  return (
    <GridPage>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardClase clase={defaultClase} />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}

export default MisClases;
