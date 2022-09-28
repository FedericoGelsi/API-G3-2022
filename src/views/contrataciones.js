import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "../components/appBar/appBar";
import CardContratacion from "../components/contrataciones/CardContratacion";
import {
  Course,
  Proffesor,
  Contratacion,
  Student,
  Status,
} from "../components/cursos/entities";

function Contrataciones(props) {
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

  const defaultStudent = new Student(
    "Juan",
    "Perez",
    "juan.perez@alumno.com",
    "1122540953",
    "20-02-1989",
    "12345678",
    "Ingeniero en Sistemas",
    "12:00 a 18:00",
    "Tengo un examen y estoy corto de tiempo"
  );

  return (
      <Box>
        <ResponsiveAppBar />
        <Container maxWidth="md">
          <CardContratacion contratacion={new Contratacion(
    defaultCourse,
    defaultStudent,
    Status.Solicitada
  )} />
          <CardContratacion contratacion={new Contratacion(
    defaultCourse,
    defaultStudent,
    Status.Aceptada
  )} />
          <CardContratacion contratacion={new Contratacion(
    defaultCourse,
    defaultStudent,
    Status.Finalizada
  )} />
          <CardContratacion contratacion={new Contratacion(
    defaultCourse,
    defaultStudent,
    Status.Cancelada
  )} />
        </Container>
      </Box>
  );
}

export default Contrataciones;
