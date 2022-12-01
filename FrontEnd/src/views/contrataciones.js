import CardContratacion from "../components/contrataciones/CardContratacion";
import { Grid, Typography } from "@mui/material";
import GridPage from "../components/GridPage";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import mock from "../data/mock.json";
import { POST,GET } from "../hooks/apiCrud";

function Contrataciones(props) {
  const userContext = useContext(UserContext);

  const getProfessorContracts = () => {
    return mock.contracts;
  };

  const getUserContracts = () => {
    POST(
      "/contracting/byStudent" ,
        ({
          studentId: userContext.user._id,
        }),
      userContext.token
    ).then((response) => {
       contracts = response;
    });
    return contracts;
  };
  
  const getClassbyId = () => {
    POST(
      "/class/byId" ,
        ({
          id: getUserContracts().idClass,
        }),
      userContext.token
    ).then((response) => {
       classes = response;
    });
    return classes;
  };
  

  const getContracts = () => {
    return userContext.user.type === "professor"
      ? getProfessorContracts()
      : getUserContracts();
  };

  const contracts = getContracts();
  const classes=getClassbyId();

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
