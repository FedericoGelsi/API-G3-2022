import { Grid } from "@mui/material";
import { useParams, useResolvedPath } from "react-router-dom";
import BackButtonBar from "../components/clases/backButtonBar";
import VistaClase from "../components/clases/classView/classView";
import GridPage from "../components/GridPage";
import mock from "../data/mock.json";

function Clase() {
  let params = useParams();

  let clase = mock.classes[params.claseId - 1];

  let { pathname } = useResolvedPath();
  let variant = pathname.includes("mis-clases") ? "view-only" : "";
  return (
    <GridPage>
      <Grid item my={2}>
        <BackButtonBar />
      </Grid>
      <Grid item>
        <VistaClase clase={clase} variant={variant} />
      </Grid>
    </GridPage>
  );
}

export default Clase;
