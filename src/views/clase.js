import { useParams, useResolvedPath } from "react-router-dom";
import VistaClase from "../components/clases/classView/classView";
import GridPage from "../components/GridPage";
import mock from "../data/mock.json";

function Clase() {
  let params = useParams();

  let clase = mock.classes[params.claseId-1];

  let { pathname } = useResolvedPath();
  let variant = pathname.includes("mis-clases") ? "view-only" : "";
  return (
    <GridPage>
      <VistaClase clase={clase} variant={variant} />
    </GridPage>
  );
}

export default Clase;
