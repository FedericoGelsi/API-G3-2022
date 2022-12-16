import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import BackButtonBar from "../components/clases/backButtonBar";
import VistaClase from "../components/clases/classView/classView";
import GridPage from "../components/GridPage";
import { POST } from "../hooks/apiCrud";
import { UserContext } from "../contexts/UserContext";

function Clase() {
  let params = useParams();
  const userContext = useContext(UserContext);
  const [clase, setClase] = useState(<></>);

  function getClass(claseId) {
    POST("/class/byId", { id: claseId }, userContext.token)
      .then((response) => {
        getProfessor(response.data.docs[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getProfessor(clase) {
    POST("/users/", { id: clase.idProfessor }, userContext.token)
      .then((response) => {
        setClase(
          <VistaClase
            clase={clase}
            professor={response.getUser.user}
            variant={variant}
          />
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getClass(params.claseId);

  let { pathname } = useResolvedPath();
  let variant = pathname.includes("mis-clases") ? "view-only" : "";
  return (
    <GridPage>
      <Grid item my={2}>
        <BackButtonBar />
      </Grid>
      <Grid item>{clase}</Grid>
    </GridPage>
  );
}

export default Clase;
