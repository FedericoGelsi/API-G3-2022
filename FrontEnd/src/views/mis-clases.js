import { Grid, Typography, Fab } from "@mui/material";
import CardClase from "../components/clases/classCard";
import GridPage from "../components/GridPage";
import mock from "../data/mock.json";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function MisClases(props) {
  const userContext = useContext(UserContext);

  const getStudentContracts = () => {
    return mock.contracts.filter((_) => {
      return _.student.id === userContext.user.id;
    });
  };

  const getProfessorContracts = () => {
    return mock.contracts.filter((_) => {
      return _.class.professor.id === userContext.user.id;
    });
  };

  const getMyClasses = () => {
    return userContext.user.role === "student"
      ? getStudentContracts()
      : getProfessorContracts();
  };

  const classes = getMyClasses();
  const navigate = useNavigate();

  const handleNewClass = () => {
    navigate("/clases/new");
  };

  return (
    <GridPage>
      <Grid item>
        <Typography variant="h4">Mis Clases</Typography>
      </Grid>
      {userContext.user.role === "professor" && (
        <Grid item>
          <Fab color="secondary" variant="extended" onClick={handleNewClass}>
            <Add />
            <Typography variant="button">Crear clase</Typography>
          </Fab>
        </Grid>
      )}
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {classes.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardClase clase={_.class} />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}

export default MisClases;
