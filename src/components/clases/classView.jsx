import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Chip,
  Fab,
  Grid,
} from "@mui/material";
import { Stack } from "@mui/system";
import { ExpandMore, ShoppingCart } from "@mui/icons-material";
import ClassDetails from "./classDetails";

export default function VistaClase(props) {
  const clase = props.clase;

  let cardImageUrl = "/img/" + (clase.image ? clase.image : "default.png");

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Card>
      <Grid container direction="column">
        <Grid item xs={2} sm={8} md={12}>
          <Typography variant="h4" color="text.primary">
            {clase.name}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            wrap="nowrap"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={5} md={8}>
              <Stack direction="column">
                <CardMedia
                  component="img"
                  src={cardImageUrl}
                  sx={{
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="secondary">
                    Profesor - {clase.professor.getFullName()}
                  </Typography>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography color="text.secondary">Ver mas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{clase.professor.experience}</Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Typography variant="body1" color="text.secondary" noWrap>
                    {clase.description}
                  </Typography>
                </CardContent>
                <Stack direction="row" justifyContent="space-between" p={1}>
                  <Chip
                    label={clase.subject}
                    variant="outlined"
                    color="primary"
                  />
                  {props.variant === "home" && (
                    <Fab color="secondary" size="small" variant="extended">
                      <Typography variant="button">Contratar</Typography>
                      <ShoppingCart />
                    </Fab>
                  )}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={2} sm={3} md={4}>
              <ClassDetails clase={clase} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
