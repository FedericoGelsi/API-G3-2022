import VistaClase from "../components/clases/classView";
import { Class, Professor } from "../components/clases/entities";
import GridPage from "../components/GridPage";

function Clase(props) {
  const defaultUser = new Professor(
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
    "Semanal",
    "25 USD"
  );
  return (
    <GridPage>
      <VistaClase clase={defaultClase} />
    </GridPage>
  );
}

export default Clase;
