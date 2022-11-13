import CardContratacion from "../components/contrataciones/CardContratacion";
import { Grid, Typography } from "@mui/material";
import GridPage from "../components/GridPage";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import mock from "../data/mock.json";
import BackButtonBar from "../components/clases/backButtonBar";

function Contrataciones(props) {
  const userContext = useContext(UserContext);

  const getProfessorContracts = () => {
    return mock.contracts.filter((contract) => {
      return contract.class.professor.id === userContext.user.id;
    });
  };

  const getUserContracts = () => {
    return mock.contracts.filter((contract) => {
      return contract.student.id === userContext.user.id;
    });
  };

  const getContracts = () => {
    return userContext.user.role === "professor"
      ? getProfessorContracts()
      : getUserContracts();
  };

  const contracts = getContracts();

  return (
    <GridPage>
      <Grid item my={2}>
        <Typography variant="h4">Contrataciones</Typography>
      </Grid>
      <Grid item container direction="column" spacing={{ xs: 2, md: 2 }}>
        {contracts.map((_, index) => (
          <Grid item key={index}>
            <CardContratacion contratacion={_} />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}

export default Contrataciones;
