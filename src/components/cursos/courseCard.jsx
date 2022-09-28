import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Fab } from "@mui/material";
import { Stack } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";

export default function CardCurso(props) {
  const course = props.course;

  let cardImageUrl = "/img/" + (course.image ? course.image : "default.png");

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
          <Typography variant="subtitle2" color="secondary">
            Profesor - {course.professor.getFullName()}
          </Typography>
          <Typography variant="h4" color="text.primary">
            {course.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" noWrap>
            {course.description}
          </Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-between" p={1}>
          <Chip label={course.subject} variant="outlined" color="primary" />
          {props.variant === "home" && (
            <Fab color="secondary" size="small" variant="extended">
              <Typography variant="button">Contratar</Typography>
              <ShoppingCart />
            </Fab>
          )}
        </Stack>
      </Stack>
    </Card>
  );
}
