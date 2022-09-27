import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "../components/appBar/appBar";
import CardCurso from "../components/cursos/courseCard";
import { Course, Proffesor } from "../components/cursos/entities";

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
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md">
        <CardCurso course={defaultCourse} />
      </Container>
    </Box>
  );
}

export default MisCursos;
