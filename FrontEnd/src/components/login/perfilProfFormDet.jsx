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
  
  const userContext = useContext(UserContext);
  const handleChange = (event) => {
    
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
                value={userContext.user.name}
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
                value={userContext.user.lastName}
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
                value={userContext.user.email}
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
                value={userContext.user.birthDate}
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
                label="phone"
                name="phone"
                onChange={handleChange}
                type="Number"
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
                label="title"
                name="title"
                onChange={handleChange}
                required
                value={userContext.user.title}
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
                label="experience"
                name="experience"
                onChange={handleChange}
                required
                value={userContext.user.experience}
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