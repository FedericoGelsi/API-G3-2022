import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Fab } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function CardClase(props) {
  const clase = props.clase;
  let cardImageUrl = "/img/" + (clase.image ? clase.image : "default.png");
  const navigate = useNavigate();
  const handleClass = () => {
    props.variant === "home"
      ? navigate("/clases/" + clase._id)
      : navigate("/mis-clases/" + clase._id);
  };

  return (
    <Card>
      <Stack direction="column">
        <CardMedia
          component="img"
          src={cardImageUrl}
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography variant="h4" color="text.primary">
            {clase.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" noWrap>
            {clase.description}
          </Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-between" p={1}>
          <Chip label={clase.subject} variant="outlined" color="primary" />
          <Fab
            color="secondary"
            size="small"
            variant="extended"
            onClick={handleClass}
          >
            <Typography variant="button">Ver clase</Typography>
          </Fab>
        </Stack>
      </Stack>
    </Card>
  );
}
