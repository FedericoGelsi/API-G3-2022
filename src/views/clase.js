import VistaClase from "../components/clases/classView";
import { Class, Professor } from "../components/clases/entities";
import GridPage from "../components/GridPage";
import mock from "../data/mock.json";

function Clase(props) {
  
  return (
    <GridPage>
      <VistaClase clase={props.class} />
    </GridPage>
  );
}

export default Clase;
