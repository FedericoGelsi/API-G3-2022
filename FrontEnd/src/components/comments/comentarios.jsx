import { Grid } from "@mui/material";
import Core from "./Core";
import { CommentProvider } from "../../contexts/commentContext";

function Comentarios() {
  return (
    <Grid item container columns={{ xs: 2, sm: 8, md: 12 }}>
      <CommentProvider>
        <Core />
      </CommentProvider>
    </Grid>
  );
}

export default Comentarios;
