import VistaClase from "../components/clases/classView";
import GridPage from "../components/GridPage";

function Clase(props) {
  
  return (
    <GridPage>
      <VistaClase clase={props.class} />
    </GridPage>
  );
}

export default Clase;
