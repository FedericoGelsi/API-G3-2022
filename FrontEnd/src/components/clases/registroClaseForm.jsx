import * as Yup from "yup";
import { useFormik, Form, FormikProvider, Field } from "formik";
import { useNavigate } from "react-router-dom";

import { Stack, Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";
import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { POST } from "../../hooks/apiCrud";

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
const MuiSelectComponent = ({ children, form, field }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <Select
      name={name}
      value={value}
      onChange={e => {
        setFieldValue(name, e.target.value);
      }}
    >
      {children}
    </Select>
  );
};

const RegistroClaseForm = ({ setAuth }) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const createClass = async (values) => {
    await POST(
      "/class/registration",
      {
        name: values.className,
        subject: values.materiaName,
        description: values.descripcion,
        duration: values.duracion,
        frequency: values.frecuencia,
        cost: values.costo,
        rating: 0,
        idProfessor: userContext.user._id,
      },
      userContext.token
    )
      .then((response) => {
        alert(response.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const SignupSchema = Yup.object().shape({
    className: Yup.string()
      .min(2, "valor muy corto")
      .required("Es necesario completar este campo"),
    materiaName: Yup.string()
      .min(2, "valor muy corto")
      .required("Es necesario completar este campo"),
    duracion: Yup.string().required("Es necesario completar este campo"),
    frecuencia: Yup.string()
      .min(2, "valor muy corto")
      .required("Es necesario completar este campo"),
    costo: Yup.string().required("Es necesario completar este campo"),

    descripcion: Yup.string(),
  });

  const handleCreation = (values) => {
    createClass(values);
    navigate("/", { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      className: "",
      materiaName: "",
      duracion: "",
      frecuencia: "semanal",
      costo: "",
      moneda: "USD",
      descripcion: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        handleCreation(values);
        actions.setSubmitting(false);
      }, 2000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              label="Nombre de la Clase *"
              {...getFieldProps("className")}
              error={Boolean(touched.className && errors.className)}
              helperText={touched.className && errors.className}
            />
            <TextField
              fullWidth
              label="Materia *"
              {...getFieldProps("materiaName")}
              error={Boolean(touched.materiaName && errors.materiaName)}
              helperText={touched.materiaName && errors.materiaName}
            />

            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                fullWidth
                label="Duracion de la Clase *"
                {...getFieldProps("duracion")}
                error={Boolean(touched.duracion && errors.duracion)}
                helperText={touched.duracion && errors.duracion}
              />

              <FormControl fullWidth>
                <InputLabel>Frecuencia</InputLabel>
                <Field name="frecuencia" component={MuiSelectComponent}>
                  <MenuItem value="unica">Unica</MenuItem>
                  <MenuItem value="semanal">Semanal</MenuItem>
                  <MenuItem value="mensual">Mensual</MenuItem>
                </Field>
              </FormControl>
            </Stack>

            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                fullWidth
                type={"number"}
                label="Costo de la Clase *"
                {...getFieldProps("costo")}
                error={Boolean(touched.costo && errors.costo)}
                helperText={touched.costo && errors.costo}
              />
              <FormControl fullWidth>
                <InputLabel>Moneda</InputLabel>
                <Field name="moneda" component={MuiSelectComponent}>
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="ARS">ARS</MenuItem>
                </Field>
              </FormControl>
            </Stack>

            <TextField
              fullWidth
              label="Descripcion"
              multiline
              maxRows={10}
              {...getFieldProps("descripcion")}
              error={Boolean(touched.descripcion && errors.descripcion)}
              helperText={touched.descripcion && errors.descripcion}
            />
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Registrar
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RegistroClaseForm;
