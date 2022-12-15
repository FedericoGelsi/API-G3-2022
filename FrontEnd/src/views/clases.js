import { Grid, Typography } from "@mui/material";
import CardClase from "../components/clases/classCard";
import GridPage from "../components/GridPage";
import SearchFilter from "../components/clases/SearchFilter";
import { GET } from "../hooks/apiCrud";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
function Clases(props) {
  const userContext = useContext(UserContext);
  const [classes, setClasses] = useState(<></>);
  function getClasses() {
    GET("/class", userContext.token)
      .then((response) => {
        setClasses(
          response.data.docs.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardClase variant="home" clase={_} />
            </Grid>
          ))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getClasses();
  return (
    <GridPage>
      <Grid item my={2}>
        <Typography variant="h4">Clases</Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={2} md={4}>
          <SearchFilter getClasses={getClasses} />
        </Grid>
        <Grid item xs={2} sm={6} md={8}>
          <Grid
            container
            direction="row"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            {classes}
          </Grid>
        </Grid>
      </Grid>
    </GridPage>
  );
}

export default Clases;
