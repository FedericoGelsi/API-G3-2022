import { Grid } from "@mui/material";
import CardCurso from "../components/cursos/courseCard";
import { Course, Proffesor } from "../components/cursos/entities";
import GridPage from "../components/GridPage";

function MisCursos(props) {
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

  const defaultCourse = new Course(
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
            <CardCurso course={defaultCourse} />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}

export default MisCursos;
