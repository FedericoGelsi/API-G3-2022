import { Grid, Typography } from "@mui/material";
import CardClase from "../components/clases/classCard";
import GridPage from "../components/GridPage";
import SearchFilter from "../components/clases/SearchFilter";
import { Stack } from "@mui/system";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import mock from "../data/mock.json";

function Clases(props) {
  const context = useContext(UserContext);

  function getClasses() {
    return mock.classes;
  }

  const classes = getClasses();

  return (
    <GridPage>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4">Clases</Typography>
        <Grid
          container
          direction="row"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={2} md={4}>
            <SearchFilter />
          </Grid>
          <Grid item xs={2} sm={6} md={8}>
            <Grid
              container
              direction="row"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 8 }}
            >
              {classes.map((clase, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <CardClase
                    variant="home"
                    clase={clase}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </GridPage>
  );
}

export default Clases;
