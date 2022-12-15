import { Grid, Typography, Fab } from "@mui/material";
import CardClase from "../components/clases/classCard";
import GridPage from "../components/GridPage";
import mock from "../data/mock.json";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { POST, GET } from "../hooks/apiCrud";

function MisClases(props) {
  const userContext = useContext(UserContext);

  const [classes, setClasses] = useState();

  const filterByClassId = (classes, contracts) => {
    return classes.filter(
      ({ idClass: id1 }) => !contracts.some(({ idClass: id2 }) => id2 === id1)
    );
  };
  const getStudentClasses = () => {
    const studentContracts = POST(
      "/contracting/byStudent",
      {
        studentId: userContext.user._id,
      },
      userContext.token
    )
      .then((response) => {
        return response.data.docs;
      })
      .catch((error) => console.error(error));
    let classes = GET("/class", userContext.token)
      .then((response) => {
        return response.data.docs;
      })
      .catch((error) => console.error(error));
    return filterByClassId(classes, studentContracts);
  };

  const getProfessorClasses = () => {
    let classes = POST(
      "/class/byProfessor",
      { professor: userContext.user._id },
      userContext.token
    )
      .then((response) => {
        return response.data.docs;
      })
      .catch((error) => console.error(error));
    return classes;
  };

  const getMyClasses = () => {
    return userContext.user.type === "student"
      ? getStudentClasses()
      : getProfessorClasses();
  };

  const navigate = useNavigate();

  const handleNewClass = () => {
    navigate("/clases/new");
  };

  getMyClasses().then(
    function (classesData) {
      setClasses(
        classesData.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardClase clase={_} />
          </Grid>
        ))
      );
    },
    function (error) {
      console.error("Could not get classes.", error);
    }
  );

  return (
    <GridPage>
      <Grid item my={2}>
        <Typography variant="h4">Mis Clases</Typography>
      </Grid>
      {userContext.user.type === "professor" && (
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
        {classes}
      </Grid>
    </GridPage>
  );
}

export default MisClases;
