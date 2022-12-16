import * as Yup from "yup";
import  { useState,useContext } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import * as React from 'react';
import { POST } from "../../hooks/apiCrud";
import { UserContext } from "../../contexts/UserContext";

/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};



const RegistroFormAlum = ({  }) => {

  const {setToken } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "valor muy corto")
      .max(50, "valor muy largo")
      .required("Es necesario completar este campo"),
    lastName: Yup.string()
      .min(2, "valor muy corto")
      .max(50, "valor muy largo")
      .required("Es necesario completar este campo"),
    email: Yup.string()
      .email("Debe ingresaar un mail valido")
      .required("Es necesario completar este campo"),
    password: Yup.string()
    .min(8,"valor muy corto")
    .required("Es necesario completar este campo"),
    phone: Yup.string()
      .required("Es necesario completar este campo"),
    birthDate: Yup.string().required("Es necesario completar este campo"),

  });


  const postUser = (values) => {
    return POST("/users/registration", values);
  };

  const formik = useFormik({
    initialValues: {
      type:"student",
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone:11,
      birthDate:"",
      education:"",
      
    },
    validationSchema: SignupSchema,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        handleRegister(values);
        
        actions.setSubmitting(false);
      }, 2000);
    },
  });


  const handleRegister = (values) => {
    const registerData = postUser(values);
    if (registerData) {
      setToken(registerData.token);
      alert("Se registro con Exito")
      navigate("/");
    } else {
      alert("No se logro Registrar");
    }
  };

  const estudiosCbx = [
    'Primario Incompleto', 
    'Primario Completo',
    'Secundario Incompleto',
    'Secundario Completo',
    'Universitario Incompleto',
    'Universitario Completo'
  ];

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps  } = formik;
  
  

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              label="Nombre/s"
              {...getFieldProps("name")}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label="Apelllido/s"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Direccion de mail"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              type="tel"
              label="Telefono"
              {...getFieldProps("phone")}
              error={Boolean(touched.phone && errors.phone)}
              helperText={touched.phone && errors.phone}
            />

            <TextField
              fullWidth
              type="birthDate"
              label="Fecha de Nacimiento"
              placeholder="mm/dd/aaaa"
              {...getFieldProps("birthDate")}
              error={Boolean(touched.birthDate && errors.birthDate)}
              helperText={touched.birthDate && errors.birthDate}
            />

            <Autocomplete              
              fullWidth
              options={estudiosCbx}
              renderInput={(params) => <TextField {...params} label="Estudios" 
              {...getFieldProps("education")}
              />}
            />


            {/* <FormControl fullWidth>
                <InputLabel>Estudios</InputLabel>
                <Field name="estudios" component={MuiSelectComponent}>
                  <MenuItem value="unica">Unica</MenuItem>
                  <MenuItem value="semanal">Semanal</MenuItem>
                  <MenuItem value="mensual">Mensual</MenuItem>
                </Field>
            </FormControl> */}

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Contraseña"
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <Icon
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Registrarse
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RegistroFormAlum;
