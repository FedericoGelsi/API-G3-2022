import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, Chip, Divider, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import ClassDetails from "./classDetails";
import ClassConfirmationPopUp from "./classConfirmationPopup";
import ProfessorDetails from "./ProfessorDetails";
import Comentarios from "../../comments/comentarios";

export default function VistaClase(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const clase = props.clase;
  let cardImageUrl = "/img/" + "default.png";

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="row"
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="flex-end"
          alignItems="center"
          justifyItems="center"
          rowSpacing={2}
        >
          <Grid item xs={2} sm={5} md={8} order={{ xs: 1, sm: 1, md: 1 }}>
            <CardMedia
              component="img"
              src={cardImageUrl}
              sx={{
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid item xs={2} sm={3} md={4} order={{ xs: 3, sm: 1, md: 1 }}>
            <ClassDetails clase={clase} />
          </Grid>
          {!(props.variant === "view-only") && (
            <Grid item xs={2} sm={3} md={4} order={{ xs: 4, sm: 2, md: 2 }}>
              <Stack>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleOpen}
                >
                  <Typography variant="button">Contratar</Typography>
                  <ShoppingCart />
                </Button>
                <ClassConfirmationPopUp id = {clase._id} handleClose={handleClose} open={open} />
              </Stack>
            </Grid>
          )}
          <Grid item xs={2} sm={8} md={12} order={{ xs: 2, sm: 3, md: 3 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4" color="text.primary">
                {clase.name}
              </Typography>
              <Chip
                label={clase.subject}
                color="secondary"
                sx={{ fontWeight: "bold" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={2} sm={8} md={12} order={{ xs: 2, sm: 4, md: 4 }}>
            <ProfessorDetails professor={props.professor} />
          </Grid>
          <Grid item xs={2} sm={8} md={12} order={{ xs: 5, sm: 4, md: 4 }}>
            <Typography variant="h5" color="text.primary">
              Descripcion
            </Typography>
            <Typography variant="body1" color="text.secondary" noWrap>
              {clase.description}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={8} md={12} order={{ xs: 5, sm: 5, md: 5 }}>
            <Divider />
          </Grid>
          <Grid item xs={2} sm={8} md={12} order={{ xs: 5, sm: 5, md: 5 }}>
            <Typography variant="h5" color="text.primary" mb={2}>
              Comentarios
            </Typography>
            <Comentarios />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
