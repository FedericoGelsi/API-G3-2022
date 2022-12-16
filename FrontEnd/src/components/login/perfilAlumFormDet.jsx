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

import { PUT } from "../../hooks/apiCrud";
import { UserContext } from "../../contexts/UserContext";

export const PerfilDetalleAlum = (props) => {
 
  const userContex = useContext(UserContext);

  const putUser = async (values) => {
    await PUT(
      "/users/update",
      {
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        birthDate: values.birthDate,
        phone: values.phone,
        education: values.education,
      },
      userContex.token
    )
      .then((response) => {
        alert(response.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleChange = (event) => {
    
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
                value={userContex.user.lastName}
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
                value={userContex.user.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Fecha de Nacimiento"
                name="birthDate"
                onChange={handleChange}
                //type="date"
                value={userContex.user.birthDate}
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

            <Grid item md={12} xs={24}>
              <TextField
                fullWidth
                label="education"
                name="education"
                onChange={handleChange}
                required
                value={userContex.user.education}
                variant="outlined"
              />
            </Grid>
             
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
          <Button color="primary" variant="contained" onClick={putUser}>
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
