import { Close, Comment, Mail, Phone, Schedule } from "@mui/icons-material";
import { Card, CardContent, Typography, Link, IconButton } from "@mui/material";
import { Stack } from "@mui/system";

function CardContact(props) {
  const user = props.user;

  return (
    <Card sx={{ maxWidth: "90%" }}>
      <CardContent>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="h5" color="text.primary" gutterBottom>
            Datos de contacto
          </Typography>
          <IconButton onClick={props.onClick}>
            <Close color="secondary"/>
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Schedule color="secondary" />
          <Typography variant="subtitle1" color="text.secondary" flexGrow={1}>
            Horario:
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {user.contactTime}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Mail color="secondary" />
          <Typography variant="subtitle1" color="text.secondary" flexGrow={1}>
            Email:
          </Typography>
          <Link
            underline="hover"
            href="mailto:example@example.com"
            color="secondary"
          >
            {user.mail}
          </Link>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="nowrap">
          <Phone color="secondary" />
          <Typography variant="subtitle1" color="text.secondary" flexGrow={1}>
            Telefono:
          </Typography>
          <Link underline="hover" href="tel:4849-4049" color="secondary">
            {user.phone}
          </Link>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="nowrap">
          <Comment color="secondary" />
          <Typography variant="subtitle1" color="text.secondary" flexGrow={1}>
            Motivo:
          </Typography>
          <Typography color="secondary">{user.requestDescription}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CardContact;
