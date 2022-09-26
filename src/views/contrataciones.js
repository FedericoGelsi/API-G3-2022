import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "../components/appBar/appBar";
import CardContratacion from "../components/contrataciones/CardContratacion";
import { Course, Proffesor, Contratacion } from "../components/cursos/entities";

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

  const defaultCourse = new Course("Clase React","React","2 semanas", defaultUser,"2 dias por semana","25 USD");
  
  const defaultContratacion = new Contratacion(defaultCourse);
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md">
        <CardContratacion contratacion={defaultContratacion} />
        <CardContratacion contratacion={defaultContratacion} />
        <CardContratacion contratacion={defaultContratacion}/>
        <CardContratacion contratacion={defaultContratacion} />
      </Container>
    </Box>
  );
}

export default Contrataciones;
