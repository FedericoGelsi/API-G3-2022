import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const PerfilDetalleAlum = (props) => {
  const [values, setValues] = useState({
    name: "Juan",
    lastName: "Lopez",
    email: "demo@profesor.com",
    phone: "",
    birthdate: "11/03/1980",
    education: "Ing Quimico",
  });

  const userContex = useContext(UserContext);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="" title="Datos" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Nombre/s"
                name="name"
                onChange={handleChange}
                required
                value={userContex.user.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Apellido/s"
                name="lastName"
                onChange={handleChange}
                required
                value={userContex.user.lastname}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={24}>
              <TextField
                fullWidth
                label="Direccion de mail"
                name="email"
                onChange={handleChange}
                required
                value={userContex.user.mail}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Fecha de Nacimiento"
                name="birthdate"
                onChange={handleChange}
                //type="date"
                value={userContex.user.birthdate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="phone"
                name="phone"
                onChange={handleChange}
                type="number"
                value={userContex.user.phone}
                variant="outlined"
              />
            </Grid>
            {userContex.user.degrees.map((degree) => {
              return (
                <Grid item container direction="row" spacing={3} md={12} xs={24}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Estudio"
                      name="estudio"
                      onChange={handleChange}
                      required
                      value={degree.title}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item  md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Estado"
                      name="estado"
                      onChange={handleChange}
                      required
                      value={degree.status}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
