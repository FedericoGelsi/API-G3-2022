import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";


export const PerfilDetalleProf = (props) => {
  const [values, setValues] = useState({
    firstName: 'Juan',
    lastName: 'Lopez',
    email: 'demo@profesor.com',
    telefono: '',
    bornDate:'11/03/1980',
    titulo: 'Ing Quimico',
    experiencia: '2 anios en la UBA'

  });
  const userContext = useContext(UserContext);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Datos"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText=""
                label="Nombre/s"
                name="firstName"
                onChange={handleChange}
                required
                value={userContext.user.firstname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Apellido/s"
                name="lastName"
                onChange={handleChange}
                required
                value={userContext.user.lastname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={24}
            >
              <TextField
                fullWidth
                label="Direccion de mail"
                name="email"
                onChange={handleChange}
                required
                value={userContext.user.mail}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Fecha de Nacimiento"
                name="birthdate"
                onChange={handleChange}
                //type="date"
                value={userContext.user.birthdate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefono"
                name="telefono"
                onChange={handleChange}
                type="number"
                value={userContext.user.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Titulo"
                name="titulo"
                onChange={handleChange}
                required
                value={userContext.user.degree}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Experiencia"
                name="experiencia"
                onChange={handleChange}
                required
                value={values.experiencia}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};