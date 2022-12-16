import { Grid, Typography, Fab } from "@mui/material";
import CardClase from "../components/clases/classCard";
import GridPage from "../components/GridPage";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { POST, GET } from "../hooks/apiCrud";

function MisClases(props) {
  const userContext = useContext(UserContext);

  const [classes, setClasses] = useState();

  const filterByClassId = (classes, contracts) => {
    return classes.filter(
      ({ _id: id1 }) => contracts.some(({ idClass: id2 }) => id2 === id1)
    );
  };
  const getStudentClasses = async () => {
    return await POST(
      "/contracting/byStudent",
      {
        studentId: userContext.user._id,
      },
      userContext.token
    )
      .then((response) => response.data.docs)
      .then(async (contracts) => {
        try {
          const response = await GET("/class", userContext.token);
          const clases = response.data.docs;
          return filterByClassId(clases, contracts);
        } catch (error) {
          return console.error(error);
        }
      })
      .catch((error) => console.error(error));
  };

  const getProfessorClasses = async () => {
    return await POST(
      "/class/byProfessor",
      { professor: userContext.user._id },
      userContext.token
    )
      .then((response) => response.data.docs)
      .catch((error) => console.error(error));
  };

  const getMyClasses = async () => {
    return userContext.user.type === "student"
      ? await getStudentClasses()
      : await getProfessorClasses();
  };

  const navigate = useNavigate();

  const handleNewClass = () => {
    navigate("/clases/new");
  };

  useEffect(() => {
    getMyClasses().then(
      function (classesData) {
        console.log(classesData);
        setClasses(
          classesData.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardClase clase={_} />
            </Grid>
          ))
        );
      }
    );
  }, [classes])
  

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
