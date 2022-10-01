import { Grid, Container } from "@mui/material";
import ResponsiveAppBar from "./appBar/appBar";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import LoginAppBar from "./appBar/loginAppBar";

function GridPage(props) {
  const userContext = useContext(UserContext);
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        {userContext.user ? <ResponsiveAppBar /> : <LoginAppBar/>}
      </Grid>
      <Grid item>
        <Container maxWidth="md">{props.children}</Container>
      </Grid>
    </Grid>
  );
}

export default GridPage;
