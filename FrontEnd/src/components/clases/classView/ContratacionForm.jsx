import * as React from "react";
import { Box, Button, DialogActions, Stack, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { POST } from "../../../hooks/apiCrud";
import { useContext } from "react";

export function ContratacionForm(props) {
  const userContext = useContext(UserContext);

  const createContract = async (values) => {
    await POST(
      "/contracting/registration",values,userContext.token
    )
      .then((response) => {
        alert(response.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  const handleChangeFrom = (newValue) => {
    myForm.setFieldValue("from", newValue);
  };
  const handleChangeTo = (newValue) => {
    myForm.setFieldValue("to", newValue);
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formValidation = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Ingrese un telefono valido")
      .required("Campo requerido"),
    email: Yup.string().email().required("Campo requerido"),
    from: Yup.date()
      .max(Yup.ref("to"), "Debe ser menor que Hasta")
      .required("Campo requerido"),
    to: Yup.date()
      .min(Yup.ref("from"), "Debe ser mayor que Desde")
      .required("Campo requerido"),
    motivo: Yup.string().required("Campo requerido"),
  });
  const myForm = useFormik({
    initialValues: {
      idClass: props.idclase,
      idStudent: userContext.user._id,
      phone: "",
      email: "",
      from: "",
      to: "",
      motivo: "",
      status:"solicitada",

    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      createContract(values);
      console.log(values); // Crear contratacion en el backend. Llamada a la API
    },
  });
  useEffect(() => {
    myForm.setFieldTouched("name", true);
  }, []);

  return (
    <Box>
      <TextField
        required
        fullWidth
        margin="dense"
        name="phone"
        label="Telefono"
        type="tel"
        variant="standard"
        value={myForm.values.phone}
        onChange={myForm.handleChange}
        error={!!myForm.errors.phone}
        helperText={myForm.errors.phone}
      />
      <TextField
        required
        autoFocus
        margin="dense"
        name="email"
        label="Direccion de Email"
        type="email"
        fullWidth
        variant="standard"
        value={myForm.values.email}
        onChange={myForm.handleChange}
        error={!!myForm.errors.email}
        helperText={myForm.errors.email}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction="row" spacing={3} mt={2}>
          <TimePicker
            label="Desde"
            renderInput={(params) => (
              <TextField
                error={!!myForm.errors.from}
                helperText={myForm.errors.from}
                name="to"
                variant="standard"
                fullWidth
                {...params}
              />
            )}
            name="from"
            value={myForm.values.from}
            onChange={handleChangeFrom}
          />
          <TimePicker
            label="Hasta"
            name="to"
            value={myForm.values.to}
            onChange={handleChangeTo}
            renderInput={(params) => (
              <TextField
                error={!!myForm.errors.to}
                helperText={myForm.errors.to}
                name="to"
                variant="standard"
                fullWidth
                {...params}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
      <TextField
        required
        multiline
        maxRows={4}
        autoFocus
        margin="dense"
        id="motivo"
        label="Motivo de la solicitud"
        type="text"
        fullWidth
        variant="standard"
        name="motivo"
        value={myForm.values.motivo}
        onChange={myForm.handleChange}
        error={!!myForm.errors.motivo}
        helperText={myForm.errors.motivo}
      />
      <DialogActions>
        <Button onClick={props.handleClose}>Cancelar</Button>
        <Button
          color="secondary"
          variant="contained"
          disabled={!myForm.isValid}
          onClick={myForm.submitForm}
        >
          Contratar
        </Button>
      </DialogActions>
    </Box>
  );
}

export default ContratacionForm;
