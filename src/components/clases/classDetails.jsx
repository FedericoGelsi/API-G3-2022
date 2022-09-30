import { Divider, Stack, Typography } from "@mui/material";

function ClassDetails(props) {
    const clase = props.clase;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      spacing={1}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography variant="body2">Duracion: {clase.courseLength}</Typography>
      <Typography variant="body2">Frecuencia: {clase.frec}</Typography>
      <Typography variant="body2">Precio: {clase.price}</Typography>
    </Stack>
  );
}

export default ClassDetails;
