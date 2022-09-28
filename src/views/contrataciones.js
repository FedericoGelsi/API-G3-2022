import CardContratacion from "../components/contrataciones/CardContratacion";
import { Grid } from "@mui/material";
import {
  Class,
  Proffesor,
  Contratacion,
  Student,
  Status,
} from "../components/clases/entities";
import GridPage from "../components/GridPage";

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

  const defaultCourse = new Class(
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

  const statusIndex = [
    Status.Solicitada,
    Status.Aceptada,
    Status.Cancelada,
    Status.Finalizada,
  ];

  return (
    <GridPage>
      <Grid container direction="column" spacing={{ xs: 2, md: 2 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item key={index}>
            <CardContratacion
              contratacion={
                new Contratacion(
                  defaultCourse,
                  defaultStudent,
                  statusIndex[index]
                )
              }
            />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}

export default Contrataciones;
