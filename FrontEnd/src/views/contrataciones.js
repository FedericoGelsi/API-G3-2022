import CardContratacion from "../components/contrataciones/CardContratacion";
import { Grid, Typography } from "@mui/material";
import GridPage from "../components/GridPage";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import mock from "../data/mock.json";
import { POST } from "../hooks/apiCrud";
function Contrataciones(props) {
  const userContext = useContext(UserContext);

  const [contracts, setContracts] = useState();

  const getProfessorContracts = () => {
    return mock.contracts;
  };

  const getStudentContracts = () => {
    let contracts = POST(
      "/contracting/byStudent",
      { studentId: userContext.user._id },
      userContext.token
    )
      .then((response) => {
        return response.data.docs;
      })
      .catch((error) => console.error(error));
    return contracts;
  };

  const getClassbyId = async (idClass) => {
    return await POST(
      "/class/byId",
      {
        id: idClass,
      },
      userContext.token
    ).then((response) => {
      return response.data.docs;
    });
  };

  const getContracts = () => {
    let contractsData =
      userContext.user.type === "professor"
        ? getProfessorContracts()
        : getStudentContracts();
    contractsData.then((contracts) =>
      setContracts(
        contracts.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardContratacion contratacion={_} />
          </Grid>
        ))
      )
    );
  };

  getContracts();
  return (
    <GridPage>
      <Grid item my={2}>
        <Typography variant="h4">Contrataciones</Typography>
      </Grid>
      <Grid item container direction="column" spacing={{ xs: 2, md: 2 }}>
        {contracts}
      </Grid>
    </GridPage>
  );
}

export default Contrataciones;
